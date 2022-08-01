import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@app/core/services/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  

  constructor(public services: ServicesService) {}

  ngOnInit(): void {

  }

}
