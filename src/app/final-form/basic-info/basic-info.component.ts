import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor() {}

  ngOnInit() {}

  get email() {
    return this.parentForm.get('email');
  }

  get name() {
    return this.parentForm.get('name');
  }

  get age() {
    return this.parentForm.get('age');
  }
}
