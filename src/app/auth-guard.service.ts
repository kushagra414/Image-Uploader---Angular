import { Injectable, NgZone } from '@angular/core';
import { CanActivate } from '@angular/router/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Helper } from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate {

  router: Router;

  constructor(public zone: NgZone, router: Router) { 
    this.router = router;
  }

  canActivate(): boolean {
    if(!Helper.isNextStep){
      this.zone.run(() => {
        Helper.isNextStep = false;
        this.router.navigate(['upload-image']) //you can redirect user to any page here ( Optional )
      })
      return false;
    }else{
      return true;
    }
  }
}
