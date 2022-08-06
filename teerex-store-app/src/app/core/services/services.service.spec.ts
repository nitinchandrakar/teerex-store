import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@src/environments/environment';
import { products } from '../mocks/product.mock';

import { ServicesService } from './services.service';

describe('ServicesService', () => {
  let service: ServicesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServicesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product infromation', () => {
    service.getAllProducts();

    const req = httpTestingController.expectOne(environment.apiUrl);
    expect(req.request.method).toEqual('GET');

    httpTestingController.verify();

  });

  
});
