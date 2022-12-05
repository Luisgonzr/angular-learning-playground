import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sweetAlertService: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.products.push(this.newProduct());
  }

  initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      policyAcceptance: [false, [Validators.requiredTrue]],
      address: this.fb.group({
        street: ['', [Validators.required, Validators.minLength(3)]],
        zip: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]],
      }),
      aliases: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(3)])
      ]),
      products: this.fb.array([])
    });
  }

  get firstNameProfileForm() { return this.profileForm.get('firstName'); }
  get nameProfileForm() { return this.profileForm.get('firstName'); }
  get lastNameProfileForm() { return this.profileForm.get('lastName'); };
  get passwordProfileForm() { return this.profileForm.get('password'); };
  get policyAcceptanceProfileForm() { return this.profileForm.get('policyAcceptance'); };
  get aliases() { return this.profileForm.get('aliases') as FormArray; }
  get products() { return this.profileForm.get('products') as FormArray; }

  public errorMessages = {
    profileForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be at least 3 characters long' },
      { type: 'pattern', message: 'This field must be a number' },
    ]
  }

  newProduct() {
    return this.fb.group(
      {
        sku: ['', [Validators.required, Validators.minLength(3)]],
        concept: ['', [Validators.required, Validators.minLength(3)]],
        subtotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      });
  }

  removeP(index:number){
    this.products.removeAt(index);
  }

  addProduct() {
    if(this.products.length==0){
      this.products.push(this.newProduct());
      return;
    }
    const lastIndex = this.products.length - 1;
    console.log(this.products.at(lastIndex));
    if (this.products.at(lastIndex).value.sku.length > 0) {
      this.products.push(this.newProduct());
    } else {
      this.sweetAlertService.fireErrorAlert('You left previous one empty!');
    }
  }

  removeProduct() {
    if (this.products.length == 1) {
      this.sweetAlertService.fireErrorAlert('Hellos!!!');
    } else {
      this.products.removeAt(this.products.length - 1);
    }
  }

  addAlias() {
    const lastIndex = this.aliases.length - 1;
    if (this.aliases.at(lastIndex).value.length > 0) {
      this.aliases.push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
    } else {
      this.sweetAlertService.fireErrorAlert('You left previous one empty!');
    }
  }

  removeAlias() {
    if (this.aliases.length == 1) {
      this.sweetAlertService.fireErrorAlert('Hellos!!!');
    } else {
      this.aliases.removeAt(this.aliases.length - 1);
    }
  }

  sendForm() {
    console.log(this.profileForm.value);
  }

}
