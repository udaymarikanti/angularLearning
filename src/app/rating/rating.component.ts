import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: Rating = new Rating(0, '');
  @Output() ratingChange = new EventEmitter<Rating>();

  onRatingChange() {
    this.ratingChange.emit(this.rating);
  }


}