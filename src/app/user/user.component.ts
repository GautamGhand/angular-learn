import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: string = '';
  @Output() getUsers=new EventEmitter();

  users = ['Anil', 'Sam', 'Sidhu'];

  // ngOnInit(){
  //   this.getUsers.emit(this.users);
  // }

  loadData(){
    this.getUsers.emit(this.users);
  }
}
