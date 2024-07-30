import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authservice:AuthService,private router:Router){}
registerUserData={email:'',password:''}
registerUser(){

  this.authservice.registerUsers(this.registerUserData).subscribe((res:any)=>{console.log(res)
  localStorage.setItem('token',res.token)
  this.router.navigate(['/login'])
})
  
}

}
