import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@app/core/services/services.service';
import { Product } from '@app/shared/models/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(public services: ServicesService) {}

  ngOnInit(): void {
    this.services.getAllProducts();
    // this.services.getSearchProducts('text');
    // this.services.getFiltteredProducts('text');
  }
}
