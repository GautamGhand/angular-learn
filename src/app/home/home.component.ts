import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Peter',
    },
    {
      id: 2,
      name: 'Alice',
    },
    {
      id: 3,
      name: 'Bruce',
    },
    {
      id: 4,
      name: 'Sidhu',
    },
  ];
}
