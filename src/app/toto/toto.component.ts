import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TotoComponent implements OnInit {
  show:boolean=false;
  public hai(){
    this.show=!this.show;
  }
  new:boolean=true;
  public hi(){
    this.new=!this.new;
  }
  new1:boolean=true;
  public hii(){
    this.new1=!this.new1;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
