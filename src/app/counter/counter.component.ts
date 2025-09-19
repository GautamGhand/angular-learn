import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  name = '';
  displayName = '';
  email = '';

  handleEvent(event: Event) {
    console.log(event.type);
  }

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Gautam';
  }

  getEmail(val:string){
    console.log(val);
    this.email=val;
  }

  setEmail(){
    this.email='gautamgahnd820@gmail.com';
  }
}
