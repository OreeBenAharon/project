import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _d: DataService,
              private _r: Router) {}  

  canActivate(): boolean {
      if (!this._d.user.admin)
        this._r.navigateByUrl("login")
    return true;
  }
  
}
