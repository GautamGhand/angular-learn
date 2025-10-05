import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_lear_complete';
  userName:string='bruce';

  // users=['Anil','Sam','Sidhu'];

  users:undefined|string[];
  // changeDetails(val:string){
  //   this.userName=val;
  // }

  handleUsers(users:string[]){
    this.users=users;
  }
}
