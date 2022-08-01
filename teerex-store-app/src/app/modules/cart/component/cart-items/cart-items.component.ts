import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '@app/core/services/services.service';
import { Product } from '@app/shared/models/product.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  @Input()
  product: Product;

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  onDecrement(data) {
    this.service.removeFromCart(this.product)
  }

  onIncrement(data) {
    this.service.addToCart(this.product)
  }

  removeFromCart() {
    this.service.removeFromCart(this.product)
  }
}
