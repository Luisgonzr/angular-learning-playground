import { Injectable } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  swalWithTailwindButtons = Swal.mixin({
    customClass: {
      confirmButton: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
    },
    buttonsStyling: false
  })

  constructor() { }

  fireErrorAlert(message?:string){
    if(typeof message !== "string"){
      message = "You must have at least one alias!";
    }
    this.swalWithTailwindButtons.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
