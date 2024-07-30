import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees:any=[]
constructor(private userService:UserService){}
ngOnInit(): void {
  this.userService.getEmployees().subscribe(res=> this.employees=res)
}
}
