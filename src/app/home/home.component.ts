import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mytime:any=new Date();
  show:boolean=false;
  public hai(){
    this.show=!this.show;
  }
  new:boolean=true;
  public hi(){
    this.new=!this.new;
  }
  movie:boolean=false;
  public mo(){
    this.movie=!this.movie;
  }
  constructor() {
    setInterval(()=>{this.mytime=new Date();},1000);
   }

  ngOnInit(): void {
  }

}
