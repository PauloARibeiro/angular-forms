import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss'],
})
export class AdditionalInfoComponent implements OnInit {
  @Input() parentForm: FormGroup;

  foods = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'}
  ];

  foodsTime = [
    {value: 'breakfast', viewValue: 'Breakfast'},
    {value: 'lunch', viewValue: 'Lunch'},
    {value: 'dinner', viewValue: 'Dinner'}
  ];

  constructor() {}

  ngOnInit() {
  }

  get food() {
    return this.parentForm.get('food');
  }

  get foodTime() {
    return this.parentForm.get('foodTime');
  }

  get body() {
    return this.parentForm.get('body');
  } 
}
