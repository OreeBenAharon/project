import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
// import {RestRequestService} from "../../Services/rest-request.service";
import { DataService } from "src/app/services/data.service";
import { StoreDataService } from "src/app/services/store-data.service";

@Injectable()
export class StoreListResolver implements Resolve<any>{

  constructor(
     
    private _d:DataService,
    private _sd:StoreDataService,

  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    if (this._sd.chosenCateg > 0) return <any>this._sd.searchByCategory(this._sd.chosenCateg)
    else {
        this._d.itemsToShow = this._d.products 
        return null
    }

  }
}