import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(): boolean  {
    if(this.authService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
