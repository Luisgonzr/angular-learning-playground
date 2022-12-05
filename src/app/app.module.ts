import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    InvoiceFormComponent,
    CustomerComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
