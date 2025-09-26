import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  bgColor: string = 'red';
  show: boolean = true;
  students = ['Anil', 'Sam', 'Peter', 'Vinay', 'Bruce'];
  login:boolean=false;
  color:string='black';
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

  changeColor(val:string){
    this.color=val;
  }
}
