import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { FilterModule } from '@app/core/filter/filter.module';
import { CardModule } from '@app/shared/components/card/card.module';
import { AspectRatioImageModule } from '@app/shared/components/aspect-ratio-image/aspect-ratio-image.module';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { SearchModule } from '@app/core/search/search.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FilterModule,
    CardModule,
    AspectRatioImageModule,
    SearchModule
  ]
})
export class ProductsModule { }
