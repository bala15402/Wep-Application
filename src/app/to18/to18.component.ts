import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to18',
  templateUrl: './to18.component.html',
  styleUrls: ['./to18.component.css']
})
export class To18Component implements OnInit {

  constructor() { }
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

  ngOnInit(): void {
  }

}
