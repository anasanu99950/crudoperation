import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginUserData={email:'',password:''}
constructor(private authService:AuthService,private router:Router){}
loginUser(){
  this.authService.loginUser(this.loginUserData).subscribe((user:any)=>{console.log(user)
  localStorage.setItem('token',user.token)
  this.router.navigate(['/manager'])
})
  
}
}
