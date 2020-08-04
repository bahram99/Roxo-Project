import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes} from '@angular/router';
import {SendDataService} from '../../services/send-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService implements CanActivate{
  constructor(private senddata: SendDataService , private route: Router) { }
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.senddata.authflag().then((val: boolean)=>{
      if(val){
        return true;
      } else { this.route.navigate(['/']); alert('please login'); }
    });
  }
}
