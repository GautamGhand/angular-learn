import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamicrouting',
  standalone: true,
  imports: [],
  templateUrl: './dynamicrouting.component.html',
  styleUrl: './dynamicrouting.component.css'
})
export class DynamicroutingComponent {
  name:null | string="";
  constructor(
    private route:ActivatedRoute,
    private cbr:ChangeDetectorRef
  ){
    this.route.params.subscribe((params)=>{
      this.name=params['name'];
      this.cbr.detectChanges();
    });    
  }
}
