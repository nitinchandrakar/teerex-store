import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemsComponent } from './component/cart-items/cart-items.component';
import { AspectRatioImageModule } from '@app/shared/components/aspect-ratio-image/aspect-ratio-image.module';
import { CounterButtonModule } from '@app/core/counter-button/counter-button.module';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    AspectRatioImageModule,
    CounterButtonModule
  ]
})
export class CartModule { }
