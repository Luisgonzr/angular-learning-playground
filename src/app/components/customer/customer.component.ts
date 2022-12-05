import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerCreateForm!: FormGroup;
  //Catalogs
  RegionCatalog = [{ id: 1, name: 'Jalisco' },{id:2, name:'Sonora'}];
  TaxSystemCatalog = [{ id: 1, name: 'General' },{id:2, name:'RESICO'}];
  // Constructor
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initCustomerCreateForm()
  }
  initCustomerCreateForm() {
    this.customerCreateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100),]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100),]],
      email: ['', [Validators.required, Validators.email,]],
      street: ['', [Validators.required,]],
      externalNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5),]],
      internalNumber: ['', []],
      neighborhood: ['', [Validators.required,]],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/),]],
      city: ['', []],
      region: ['', []],
      companies: this.fb.array([])
    });
  }
  // Getters
  get firstNameCustomerCreateForm() { return this.customerCreateForm.get('firstName'); }
  get lastNameCustomerCreateForm() { return this.customerCreateForm.get('lastName'); }
  get emailCustomerCreateForm() { return this.customerCreateForm.get('email'); }
  get streetCustomerCreateForm() { return this.customerCreateForm.get('street'); }
  get externalNumberCustomerCreateForm() { return this.customerCreateForm.get('externalNumber'); }
  get internalNumberCustomerCreateForm() { return this.customerCreateForm.get('internalNumber'); }
  get neighborhoodCustomerCreateForm() { return this.customerCreateForm.get('neighborhood'); }
  get zipCodeCustomerCreateForm() { return this.customerCreateForm.get('zipCode'); }
  get cityCustomerCreateForm() { return this.customerCreateForm.get('city'); }
  get regionCustomerCreateForm() { return this.customerCreateForm.get('region'); }
  get companies() { return this.customerCreateForm.get('companies') as FormArray; }
  public errorMessages = {
    customerCreateForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be at least 3 characters long' },
      { type: 'pattern', message: 'This field must be a number' },
    ]
  }
  submitCustomerCreateForm() { console.log(this.customerCreateForm.value); }
  // Select assign value
  change(e: any, i?:any) {
    console.log(e);
    console.log(i);
    const name = e.target.id;
    const value = e.target.value;
    console.log(name)
    console.log(value)
    console.log(this.customerCreateForm.value);
  }
  newCompany(){
    return this.fb.group({
    legalName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100),]],
    taxId:['',[Validators.required,Validators.minLength(12),Validators.maxLength(13),Validators.pattern(/^[ña-z]{3,4}[0-9]{6}[0-9a-z]{3}$/i),]],
    legalZipCode:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern(/^[0-9]*$/),]],
    taxSystem:['',[Validators.required,]],
    });
    }
    // Add & Remove
    addCompany(){
    this.companies.push(this.newCompany());
    }
    removeCompany(){
    this.companies.removeAt(this.companies.length - 1);
    }
    // Delete item
    deleteItem(index:number){
    this.companies.removeAt(index);
    }


}
