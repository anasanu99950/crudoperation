import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:3000/api/register"
  loginUrl="http://localhost:3000/api/login"
  constructor(private http:HttpClient,private router:Router) { }

  registerUsers(user:any){
    return this.http.post(this.url,user)
  }
  loginUser(user:any){
    return this.http.post(this.loginUrl,user)
  }
  
  getToken(){
    return   localStorage.getItem('token')
  }
  logout(){
    return  localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
