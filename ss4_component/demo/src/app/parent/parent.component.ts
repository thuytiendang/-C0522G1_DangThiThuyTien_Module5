import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataSendChild = 'Hello moon cute!';
  valueA: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFromChild(value: any) {
    this.valueA = value;
  }
}
