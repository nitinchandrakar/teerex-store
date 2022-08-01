import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from '@app/shared/models/filter.model';
import { Product } from '@app/shared/models/product.model';
import { environment } from '@src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private productSubject = new BehaviorSubject<any>(null);
  private filterSubject = new BehaviorSubject<any>(null);
  private resetFilterSubject = new Subject();

  private cartSubject = new BehaviorSubject<any>(null);

  private searchQuery: string;
  private filterData: Array<Filter> = [];
  private productList: Array<Product>;
  private searchProducts: Array<Product>;
  private selectedFilters: any = {};

  private cartProduct: any = {};

  productSubject$: Observable<any> = this.productSubject.asObservable();
  filterSubject$: Observable<any> = this.filterSubject.asObservable();
  resetFilterSubject$: Observable<any> = this.resetFilterSubject.asObservable();

  cartSubject$: Observable<any> = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllProducts() {
    this.http
      .get<Product[]>(environment.apiUrl)
      .subscribe((data: Product[]) => {
        this.productList = data;
        this.getFilters(data);
        this.productSubject.next(data);
        this.searchProducts = data;
      });
  }

  getFilters(data: Product[]) {
    const colorCat = {
      category: 'color',
      filtervalues: [],
    };
    const genderCat = {
      category: 'gender',
      filtervalues: [],
    };
    const typeCat = {
      category: 'type',
      filtervalues: [],
    };

    const priceCat = {
      category: 'price',
      filtervalues: [],
    };

    data.forEach((filter: Product) => {
      if (!colorCat.filtervalues.includes(filter.color))
        colorCat.filtervalues.push(filter.color);

      if (!genderCat.filtervalues.includes(filter.gender))
        genderCat.filtervalues.push(filter.gender);

      if (!priceCat.filtervalues.includes(filter.price))
        priceCat.filtervalues.push(filter.price);

      if (!typeCat.filtervalues.includes(filter.type))
        typeCat.filtervalues.push(filter.type);
    });

    const maxPrice = priceCat.filtervalues.sort((a, b) => b - a)[0];

    let i = 0;
    const priceRange = [];
    do {
      if (maxPrice > i + 150) {
        priceRange.push(`${i}-${i + 150}`);
      } else {
        priceRange.push(maxPrice);
      }
      i = i + 150;
    } while (i < maxPrice);

    priceCat.filtervalues = priceRange;

    this.filterData = [colorCat, genderCat, typeCat, priceCat];
    this.filterSubject.next(this.filterData);
  }

  getSearchProducts(query: string) {
    if (!query || query.trim() === '') {
      this.getFilters(this.productList);
      this.productSubject.next(this.productList);
      return;
    }

    this.searchQuery = query;
    const searchData = this.productList.filter((product: Product) => {
      if (product.name.toLowerCase() == query.toLowerCase()) {
        return true;
      }

      let count = 0;
      const queries = query.split(' ').map((item) => item.toLowerCase());

      if (queries.includes(product.color.toLowerCase())) {
        count++;
      }

      if (queries.includes(product.type.toLowerCase())) {
        count++;
      }

      if (queries.length === count) {
        return true;
      }

      return false;
    });

    this.searchProducts = searchData;
    this.resetFilter();
    this.getFilters(searchData);
  }

  resetFilter() {
    this.selectedFilters = {};
    this.resetFilterSubject.next(true);
    this.productSubject.next(this.searchProducts);
  }

  getFiltteredProducts(filter: any) {
    console.log(filter);

    this.selectedFilters[filter.category] = filter.selectedValues;

    let prices = [];
    if (
      this.selectedFilters['price'] &&
      this.selectedFilters['price'].length > 0
    ) {
      this.selectedFilters['price'].forEach((item) => {
        prices = prices.concat(...item.split('-'));
      });

      prices = [
        prices.sort((a, b) => a - b)[0],
        prices.sort((a, b) => b - a)[0],
      ];
    }

    const data = this.searchProducts.filter((product: Product) => {
      let flag = true;
      if (
        this.selectedFilters['color'] &&
        this.selectedFilters['color'].length > 0 &&
        !this.selectedFilters['color'].includes(product.color)
      ) {
        flag = false;
      }

      if (
        this.selectedFilters['gender'] &&
        this.selectedFilters['gender'].length > 0 &&
        !this.selectedFilters['gender'].includes(product.gender)
      ) {
        flag = false;
      }

      if (
        this.selectedFilters['type'] &&
        this.selectedFilters['type'].length > 0 &&
        !this.selectedFilters['type'].includes(product.type)
      ) {
        flag = false;
      }

      if (prices.length > 0) {
        flag = product.price >= prices[0] && product.price <= prices[1];
      }
      return flag;
    });

    this.productSubject.next(data);
  }

  addToCart(product: Product) {
    if (this.cartProduct[product.id]) {
      if (this.cartProduct[product.id].cartCount != product.quantity) {
        this.cartProduct[product.id].cartCount++;
      }else{
        console.log('Max quantity exceed ');
        return;
      }
    } else {
      product.cartCount = 1;
      this.cartProduct[product.id] = product;
    }

    this.cartSubject.next(this.cartProduct);
  }

  removeFromCart(product: Product) {
    if(this.cartProduct[product.id].cartCount==0){
      delete this.cartProduct[product.id];
    }else{
      this.cartProduct[product.id].cartCount--;
    }
   
    this.cartSubject.next(this.cartProduct);
  }

  filterService(){
    
  }
}
