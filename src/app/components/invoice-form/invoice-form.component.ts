import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  invoiceCreateForm!: FormGroup;
  //Catalogs
  TaxSystemCatalog = [{ id: 1, name: 'something' },];
  // Constructor
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initInvoiceCreateForm()
    this.items.push(this.newItem());
  }
  initInvoiceCreateForm() {
    this.invoiceCreateForm = this.fb.group({
      legalName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100),]],
      taxId: ['', [Validators.required, Validators.pattern(/^[ña-z]{3,4}[0-9]{6}[0-9a-z]{3}$/i),]],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5),]],
      taxSystem: ['', [Validators.required,]],
      items: this.fb.array([]),
      email: ['', [Validators.required, Validators.email,]],
    });
  }
  // Getters
  get legalNameInvoiceCreateForm() { return this.invoiceCreateForm.get('legalName'); }
  get taxIdInvoiceCreateForm() { return this.invoiceCreateForm.get('taxId'); }
  get zipCodeInvoiceCreateForm() { return this.invoiceCreateForm.get('zipCode'); }
  get taxSystemInvoiceCreateForm() { return this.invoiceCreateForm.get('taxSystem'); }
  get emailInvoiceCreateForm() { return this.invoiceCreateForm.get('email'); }
  get items() { return this.invoiceCreateForm.get('items') as FormArray; }



  public errorMessages = {
    invoiceCreateForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be at least 3 characters long' },
      { type: 'pattern', message: 'Pattern is not right' },
    ]
  }
  submitInvoiceCreateForm() { console.log(this.invoiceCreateForm.value); }
  // Select assign value
  change(e: any) {
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      case 'taxSystem': this.invoiceCreateForm.get('taxSystem')?.setValue(value); break;
      default: break;
    }
  }


  newItem(){
    return this.fb.group({
    sku:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5),]],
    concept:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100),]],
    quantity:['',[Validators.required,]],
    unitPrice:['',[Validators.required,]],
    });
    }
    // Add & Remove
    addItem(){
    this.items.push(this.newItem());
    }
    removeItem(){
    this.items.removeAt(this.items.length - 1);
    }
    // Delete item
    deleteItem(index:number){
    this.items.removeAt(index);
    }







}
