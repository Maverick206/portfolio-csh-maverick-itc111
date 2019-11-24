import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CshbotService {

  constructor() { }

    public fredflintstone(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result *= val;
    };

    console.log("Hello from cshbotService! !!");



    return result;
  }

}