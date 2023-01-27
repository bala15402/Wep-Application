import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resis',
  templateUrl: './resis.component.html',
  styleUrls: ['./resis.component.css']
})
export class ResisComponent implements OnInit {
   message:string="";
   registerUserData={}
  constructor() { }
  resister(){
    alert("sucess");
  }
  resisterUser(){
    console.log(this.registerUserData);
  }
 

  ngOnInit(): void {
  }

}
