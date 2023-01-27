import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbutilityService {

  constructor(private http:HttpClient) { }
  loginService(email:string,password:string):Observable<any>
  {
    return this.http.get("http://localhost:3000/login?email="+email+"?password="+password);
  }
  registerService():Observable<any>
  {
    return this.http.get("http://localhost:3000/resis?name=");
  }
}
