import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '@app/core/services/services.service';
import { Product } from '@app/shared/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product:Product
  constructor(
    private service:ServicesService
  ) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.service.addToCart(this.product);
  }

}
