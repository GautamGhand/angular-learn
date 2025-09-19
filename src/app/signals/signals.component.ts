import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count = signal(10);
  x = signal(10);
  data:WritableSignal<number | string> = signal<number | string>(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());

  updateSignal() {
    this.data.set('hello');
  }

  showValue(){
    this.x.set(100);
  }
}
