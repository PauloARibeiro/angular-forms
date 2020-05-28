import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss'],
})
export class ArrayFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      phones: this.formBuilder.array([]),
    });
  }

  get phoneForms() {
    return this.form.get('phones') as FormArray;
  }

  onAddPhone() {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.phoneForms.push(phone);
  }

  onDeletePhone(index: number) {
    this.phoneForms.removeAt(index);
  }
}
