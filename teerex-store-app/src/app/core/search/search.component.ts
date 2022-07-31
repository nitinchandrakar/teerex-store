import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput:string;
  constructor(private services: ServicesService) {}

  ngOnInit(): void {
  }

  searchHandler(){
    this.services.getSearchProducts(this.searchInput);
  }

}
