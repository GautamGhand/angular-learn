import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  bgColor: string = 'red';
  show: boolean = false;
  students = ['Anil', 'Sam', 'Peter', 'Vinay', 'Bruce'];
  studentsData:{id:number,name:string,age:number,email:string}[] = [
    {
      id:1,
      name: 'Anil',
      age: 18,
      email: 'anil@sidhu.com',
    },
    {
      id:2,
      name: 'Test',
      age: 26,
      email: 'test@sidhu.com',
    },
    {
      id:3,
      name: 'Gautam',
      age: 30,
      email: 'gautam@sidhu.com',
    },
  ];
}
