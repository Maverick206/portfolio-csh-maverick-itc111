import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})

export class CalcService {
 
  constructor() { }
 
  public barneyrubble(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    };

    

    console.log("Hello from CalcService!!!");



    return result;
  }
}