import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.css'
})
export class ManagersComponent implements OnInit {
managers:any=[]
constructor(private userService:UserService,private router:Router){}
ngOnInit(): void {
  this.userService.getManager().subscribe((res)=>this.managers=res),
  (err:any)=>{
    if (err instanceof HttpErrorResponse){
      if(err.status===401){
      this.router.navigate(['/login'])
      }
    }
  }
}
}
