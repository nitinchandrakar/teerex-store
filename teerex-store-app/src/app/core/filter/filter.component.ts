import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '@app/shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input()
  filters:Array<Filter>

  constructor() { }

  ngOnInit(): void {
    console.log(this.filters)
  }

  onFilterSelect(e, index, data){
    console.log(e,index, data)
  }

}
