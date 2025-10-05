import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css',
})
export class ReactiveformsComponent {
  submitted: boolean = false;
  // name=new FormControl('anil');
  // password=new FormControl('123');
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // handleSubmit(){
  //   console.log(this.name.value,this.password.value)
  // }

  // setValues(){
  //   this.name.setValue('Peteer');
  //   this.password.setValue('1234');
  // }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }
}
