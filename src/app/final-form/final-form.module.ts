import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FinalFormComponent } from './final-form.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';

import { AppRoutingModule } from './final-form-routing.module';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    BasicInfoComponent,
    AdditionalInfoComponent,
    FinalFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [BasicInfoComponent, AdditionalInfoComponent, FinalFormComponent],
})
export class FinalFormModule {}
