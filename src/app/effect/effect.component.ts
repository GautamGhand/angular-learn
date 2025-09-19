import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css',
})
export class EffectComponent {
  count=signal(0);
  displayHeading=false;

  constructor() {
    effect(()=>{
      if(this.count()==2){
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        },2000);
      }else{
        this.displayHeading=false;
      }
    });
  }

  toggleValue(){
    this.count.set(this.count()+1);
  }
}
