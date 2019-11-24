import { Component, OnInit } from '@angular/core';
import { hello } from '../../scripts/custom.js';


function cshTest() {

console.log('cshTest!!!');
console.log(5*8);

var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);

document.getElementById("demo2").innerHTML =
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;

var x = 5;
document.getElementById("demo3").innerHTML = (x == 8);

var age, voteable;
  age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo4").innerHTML = voteable;
}



@Component({
  selector: 'app-cshbot',
  templateUrl: './cshbot.component.html',
  styleUrls: ['./cshbot.component.css']
})
export class CshbotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    cshTest();
   
  }

}