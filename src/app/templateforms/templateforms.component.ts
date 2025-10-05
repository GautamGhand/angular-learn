import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './templateforms.component.html',
  styleUrl: './templateforms.component.css',
})
export class TemplateformsComponent {
  userDetails: any = null;

  addDetails(form: NgForm) {
    if (form.valid) {
      this.userDetails = { ...form.value };
      form.reset({
        gender: '',
      });
    } else {
      console.log('Form Invalid');
    }
  }
}
