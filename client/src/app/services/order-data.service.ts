import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  
  constructor(public _r:Router, public _d:DataService, public _http:HttpClient) { }

  public city:string = ""
  public street:string = ""
  public card:number  
  public dateOK:any = false
  public cardOK:any = false
  public date:Date = new Date()
  public searchValue:string
  public filePath:string = ""

  public setSearchValue(e) {
    this.searchValue = e.target.value
    console.log(this.searchValue)
  }
  public getUserDetails(q:number) {
    if (q === 1) {
      this.city = this._d.user.city
      console.log(this.city)
    } else {
      this.street = this._d.user.street
      console.log(this.street)
    }
  }
  
  public async validateDate(e:any) {
    console.log("got date:",e.value)
    this.date = e.value
    let dateConverted = new Date 
    dateConverted.setTime(this.date.setMinutes(this.date.getMinutes() - this.date.getTimezoneOffset()))
    const dateFormatted = dateConverted.toISOString().slice(0,10)
    try {
      const res = await fetch (`https://online-shop-bakery.herokuapp.com/order/checkday/?date=${dateFormatted}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.token}
      })
    this.dateOK = await res.json()
    if (!this.dateOK) 
      this.date = undefined
    } catch (error) {
      console.log(error)
    }
  }
  
  public async validateCard(n:number) {
    console.log("got ",n)
    this.card = n
    const stringyCard = this.card.toString()

    if (stringyCard.length >= 14 && stringyCard.length <= 16) 
      this.cardOK = true
    else {
      this.cardOK = false
      this.card = undefined
    }
  }

  public async submit() {
    let dateConverted = new Date 
    dateConverted.setTime(this.date.setMinutes(this.date.getMinutes() - this.date.getTimezoneOffset()))
    const date = dateConverted.toISOString().slice(0,10)
      try {
        const res = await fetch('https://online-shop-bakery.herokuapp.com/order/', {
          method: 'POST',
          headers: {'content-type': 'application/json',
                    authorization: localStorage.token},
          body: JSON.stringify({city:this.city, street:this.street, date, card:this.card}),
        });
        const fileName = await res.json()
        // this.filePath = "https://online-shop-bakery.herokuapp.com/receptions/" + fileName.filename
        this.filePath = "https://online-shop-bakery.herokuapp.com/" + fileName.filename
        // this.filePath = "../receptions/" + fileName.filename

    } catch (error) {
      console.log(error);
    }
  }

    async downloadReceipt() {
      const ress:any = await this._http.get(this.filePath, {
        headers: { authorization: localStorage.token },
        responseType: 'blob'}).subscribe(blob => {
          const a = document.createElement('a')
          const objectUrl = URL.createObjectURL(blob)
          a.href = objectUrl
          a.download = this.filePath;
          a.click();
          URL.revokeObjectURL(objectUrl);

      })
    }

  ngOnInit() {

  }
}
