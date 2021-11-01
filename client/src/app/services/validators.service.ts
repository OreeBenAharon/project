import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(public _d:DataService) { }

  passwordsMatchValidator(): ValidatorFn {

    return (control: AbstractControl):ValidationErrors | null => {
      const match = this._d.regErrors.password;
      // if (exist !== undefined) {
      console.log("passwords MATCH")
      // return match ? {'passwordsUnmatchValidator':true ,'requiredValue': true} : null ;
      return match ? {'passwordsUnmatchValidator': {value: true}} : null ;
      // }
    };
  }
  
  usernameExistsValidator(): ValidatorFn {

      return (control: AbstractControl):ValidationErrors | null => {
        const exist = this._d.regErrors.username
        // if (exist !== undefined) {
        console.log("email EXIST")
        return exist ? null : {'usernameExistValidator': {value: control.value}};
        // }
      };
    }

  idExistValidator(): ValidatorFn {

    return ():ValidationErrors | null => {
      const exist = this._d.regErrors.id;
      // if (exist !== undefined) {
      console.log("id EXIST")
      return exist ? null : {'idExistValidator': {value: true}};
    };
  }


  waaValidator(): ValidatorFn {

    return ():ValidationErrors | null => {
      
      return null
    };
  }
}