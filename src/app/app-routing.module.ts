import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: 'profile', component: ProfileFormComponent },
  { path: 'invoice', component: InvoiceFormComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
