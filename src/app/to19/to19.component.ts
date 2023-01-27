import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to19',
  templateUrl: './to19.component.html',
  styleUrls: ['./to19.component.css']
})
export class To19Component implements OnInit {

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
