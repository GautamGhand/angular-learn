import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name:any="";
  constructor(private route:ActivatedRoute){
  }

  ngOnInit():void{
    // let name=this.route.snapshot.paramMap.get('name');
    // this.name=name;
    // this.route.queryParams.subscribe((params)=>{
    //   this.name=params['name'];
    // });

    this.route.data.subscribe((data)=>{
      this.name=data['name'];
    });
  }
}
