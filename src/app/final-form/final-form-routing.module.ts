import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalFormComponent } from './final-form.component';

const routes: Routes = [
  {
    path: '',
    component: FinalFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
