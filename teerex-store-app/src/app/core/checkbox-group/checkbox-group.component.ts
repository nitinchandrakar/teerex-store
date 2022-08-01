import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export class CheckboxGroupComponent implements OnInit {
  form: FormGroup;
  serviceSubscriber$: Subscription;

  @Input()
  groupName: string;

  @Input()
  checkboxs: Array<string>;

  @Output()
  onChangeHandler = new EventEmitter();

  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;

  constructor(fb: FormBuilder, private services: ServicesService) {
    this.form = fb.group({
      selectedCheckBox: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.serviceSubscriber$ = this.services.resetFilterSubject$.subscribe(
      (data) => {
        if (data) {
          this.resetForm();
        }
      }
    );
  }

  onCheckboxChange(event: any) {
    const selectedValues = this.form.controls['selectedCheckBox'] as FormArray;
    if (event.target.checked) {
      selectedValues.push(new FormControl(event.target.value));
    } else {
      const index = selectedValues.controls.findIndex(
        (x) => x.value === event.target.value
      );
      selectedValues.removeAt(index);
    }
    this.onChangeHandler.emit({
      category: this.groupName,
      selectedValues: this.form.value.selectedCheckBox,
    });
  }

  resetForm() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  ngOnDestroy() {
    this.serviceSubscriber$.unsubscribe();
  }
}
