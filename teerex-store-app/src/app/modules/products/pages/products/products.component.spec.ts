import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { FilterModule } from '@app/core/filter/filter.module';
import { products } from '@app/core/mocks/product.mock';
import { SearchModule } from '@app/core/search/search.module';
import { ServicesService } from '@app/core/services/services.service';
import { AspectRatioImageModule } from '@app/shared/components/aspect-ratio-image/aspect-ratio-image.module';
import { CardModule } from '@app/shared/components/card/card.module';
import { of } from 'rxjs';
import { ProductsRoutingModule } from '../../products-routing.module';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let element: DebugElement;
  let productService: any;

  beforeEach(async () => {
    const productListServiceSpy = jasmine.createSpyObj('ServicesService', [
      'getAllProducts',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ProductsRoutingModule,
        FilterModule,
        CardModule,
        AspectRatioImageModule,
        SearchModule,
      ],
      providers: [
        { provide: ServicesService, useValue: productListServiceSpy },
      ],
      declarations: [ProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    productService = TestBed.get(ServicesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products', fakeAsync(() => {
    productService.getAllProducts.and.returnValue(of(products));

    fixture.detectChanges();
    flush();
    console.log(element.nativeElement.outerHTML);
  }));
});
