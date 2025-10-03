import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email:string="";
  password:string | number="";
  submitted=false;
  show:boolean=false;

  onSubmit(form: NgForm) {
    this.submitted=true;
    if (form.valid) {
      console.log(this.email,this.password);
      console.log('Form Submitted!');
    } else {
      console.log('Form is invalid');
    }
  }
}
