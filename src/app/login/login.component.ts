import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mytime:any=new Date();
  public name:string = "";
  public password:string= "";

  constructor(private dbutil:DbutilityService,private route:Router) {
    setInterval(()=>{this.mytime=new Date();},1000);
   }
  loginUserData ={}
  message:string="";
  loginUser(){
    console.log("this.loginUserData");
  }  
  login(){
    this.dbutil.loginService(this.name,this.password).subscribe(data=>{
      if(data["message"])
      {
        this.message="Success";
        this.route.navigate(["/home"]);
      }
      else{
        this.route.navigate(["/error"]);
      }

    });
  }

  ngOnInit(): void {
  }

}
