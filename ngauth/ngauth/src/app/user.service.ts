import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
empUrl="http://localhost:3000/api/employees"
managerUrl="http://localhost:3000/api/managers"
  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get(this.empUrl)
  }

  getManager(){
   return this.http.get(this.managerUrl)
  }
}
