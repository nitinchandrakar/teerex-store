import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from '@app/shared/models/filter.model';
import { Product } from '@app/shared/models/product.model';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private productSubject = new BehaviorSubject<any>(null);
  private filterSubject = new BehaviorSubject<any>(null);

  private searchQuery: string;
  private filterData: Array<Filter> = [];
  private productList: Array<Product>;

  productSubject$: Observable<any> = this.productSubject.asObservable();
  filterSubject$: Observable<any> = this.filterSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllProducts() {
    this.http
      .get<Product[]>(environment.apiUrl)
      .subscribe((data: Product[]) => {
        this.productList = data;
        this.getFilters(data);
        this.productSubject.next(data);
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

    this.filterData = [colorCat, genderCat, typeCat, priceCat];
    this.filterSubject.next(this.filterData);
  }

  getSearchProducts(query: string) {
    if(!query || query.trim()===""){
      this.getFilters(this.productList);
      this.productSubject.next(this.productList);
      return;
    }

    this.searchQuery = query;
    const searchData = this.productList.filter((product: Product) => {
      
      if(product.name.toLowerCase()==query.toLowerCase()){
        return true;
      }
      
      let count=0;
      const queries = query.split(' ').map(item=>item.toLowerCase());

      if(queries.includes(product.color.toLowerCase())){  
        count++;
      }

      if(queries.includes(product.type.toLowerCase())){  
        count++;
      }

      if(queries.length===count){
        return true;
      }

      return false

    });
    this.getFilters(searchData);
    this.productSubject.next(searchData);
  }

  getFiltteredProducts(filter: any) {
    
  }
}
