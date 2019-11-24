import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

}