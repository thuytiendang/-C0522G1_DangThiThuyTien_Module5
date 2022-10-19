import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  receiveData: string;

  @Output()
  eventEmitter = new EventEmitter();

  a: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  sendToParent(): void {
    this.eventEmitter.emit(this.a);
  }
}
