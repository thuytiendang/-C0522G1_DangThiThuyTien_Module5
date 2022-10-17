import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  result: any;

  constructor() { }

  ngOnInit(): void {
  }

  sum(): void {
    this.result = this.number1 + this.number2;
}

  minus(): void {
    this.result = this.number1 - this.number2;
  }

  multiply() {
    this.result = this.number1 * this.number2;
  }

  divide() {
    if (this.number2 === 0 ) {
      this.result = 'number 2 not equal 0';
    } else {
      this.result = this.number1 / this.number2;
    }
  }
}
