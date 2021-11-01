import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Injectable()
export class LoginMainResolver implements Resolve<any>{

  constructor(
     
    public _d:DataService,

  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return null
    
    }
  }
