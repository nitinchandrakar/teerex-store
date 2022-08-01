import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '@app/shared/models/filter.model';
import { Subscription } from 'rxjs';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input()
  filters:Array<Filter>

  constructor(
    private services:ServicesService
  ) { }

  ngOnInit(): void {

  }

  onFilterSelect(e, index, data){
    console.log(e,index, data)
  }

  handleFilter(data){
    this.services.getFiltteredProducts(data);
  }

  resetFilters(){
    this.services.resetFilter();
  }

}
