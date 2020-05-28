import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  {
    path: 'basic',
    component: BasicFormComponent,
  },
  {
    path: 'nested',
    component: NestedFormComponent,
  },
  {
    path: 'array',
    component: ArrayFormComponent,
  },
  {
    path: 'valid',
    component: ValidFormComponent,
  },
  {
    path: 'final',
    loadChildren: './final-form/final-form.module#FinalFormModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
