import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public service:ServicesService
  ) { }

  ngOnInit(): void {
  }

  getCartCount(data){
    let count = 0;
    if(data){
      Object.keys(data).forEach(key=>{
        count = count+(data[key].cartCount || 0)
      })
    }
    return count;
  }

}
