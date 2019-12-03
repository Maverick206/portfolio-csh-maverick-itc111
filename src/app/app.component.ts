import { Component } from '@angular/core';
import { hello } from '../scripts/custom.js';
import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';
import { Thingbot } from '../thingbot/thingbot.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [CshbotService]
})
export class AppComponent  {
  name = 'Angular';
  sum: number = 0;

  sum2: number = 0;

  test1: number = 0;


  constructor(calc:CalcService) {
    this.sum = calc.barneyrubble(1,2,3,40);
   
  }


  ngOnInit()  {
      //hello()
  }
  
}

