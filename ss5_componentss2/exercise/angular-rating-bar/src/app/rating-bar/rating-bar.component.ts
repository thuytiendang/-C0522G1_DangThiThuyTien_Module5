import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../i-rating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input() max = 10;
  @Input() ratingValue = 5;
  @Input() showRatingValue = true;

  constructor() { }



  ngOnInit(): void {
  }



}
