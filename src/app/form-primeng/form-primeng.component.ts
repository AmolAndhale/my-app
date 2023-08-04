import { Component } from '@angular/core';

@Component({
  selector: 'app-form-primeng',
  templateUrl: './form-primeng.component.html',
  styleUrls: ['./form-primeng.component.css']
})
export class FormPrimengComponent {

  
  fname:string='';
  lname:string='';
  age: number = 20;
  dob: Date=new Date();
  phone: number= 91;
  gender: string='';
  email:string='';
  address:string='';


  onSubmit(){
    console.log('First Name:', this.fname);
    console.log('Last Name:', this.lname);
    console.log('Age:', this.age);
  }

}
