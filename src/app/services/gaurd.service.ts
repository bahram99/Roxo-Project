import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {
  constructor(private authservice: AuthenticationService , private router: Router) { }
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean>{
   return  this.authservice.isauthenticate().then((val: boolean) =>{
      if(val){
        return true;
      } else  { this.router.navigate(['users']); }
    });
  }
}
