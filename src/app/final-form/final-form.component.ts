import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.scss'],
})
export class FinalFormComponent implements OnInit {
  parentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const basicInfo = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(65)]],
    });

    const additionalInfo = this.formBuilder.group({
      food: [''],
      foodTime: { value: '', disabled: true },
      body: ['', Validators.required],
    });

    this.parentForm = this.formBuilder.group({
      basic: basicInfo,
      additional: additionalInfo,
    });

    this.handleFoodValueChanges();
  }

  get basicInfoControl() {
    return this.parentForm.controls.basic as FormGroup;
  }

  get additionalInfoControl() {
    return this.parentForm.controls.additional as FormGroup;
  }

  handleFoodValueChanges() {
    this.additionalInfoControl.get('food').valueChanges.subscribe((value) => {
      if (!value) {
        return this.additionalInfoControl.controls.foodTime.disable();
      }

      return this.additionalInfoControl.controls.foodTime.enable();
    });
  }

  onSubmit() {
    this.parentForm.reset();
  }
}
