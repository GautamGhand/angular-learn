import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
})
export class ConditionsComponent {
  display: boolean = true;
  x: number = 5;
  toggleDiv: boolean = true;
  color: number = 2;
  users: string[] = ['Anil', 'Sam', 'Tony', 'Test'];
  // users: string[] = [];
  students = [
    {
      name: 'Anil',
      age: 18,
      email: 'anil@test.com',
    },
    {
      name: 'Sam',
      age: 25,
      email: 'sam@test.com',
    },
    {
      name: 'Tony',
      age: 30,
      email: 'tony@test.com',
    },
  ];

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggletwoDiv() {
    this.toggleDiv = !this.toggleDiv;
  }

  handleColor(val: number) {
    this.color = val;
  }

  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  getName(name:string){
    console.log(name);
  }
}
