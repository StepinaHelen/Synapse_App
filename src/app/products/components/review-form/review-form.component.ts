import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductReviewI } from '../../types/products.interface';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  @Output() reviewItem = new EventEmitter<any>();
  allStars = new Array(5);
  hoverStars = 0;
  selectedStars = 0;
  review = ''
  rate = 0;
  constructor() { }

  ngOnInit(): void {}

  onSelected(stars: number): void {
    if (this.selectedStars === stars) {
      this.selectedStars = 0
      this.hoverStars = 0;
    }
    else {
      this.selectedStars = stars;
    }
    this.rate = this.selectedStars
  }

  onMouseenter(i: number): void {
    this.hoverStars = i + 1;
  }

  onClearHover(): void {
    this.hoverStars = 0;
  }

  getDataReview(): ProductReviewI {
    return {
      created_by: {
        email: "user@user.com",
        id: 1,
        last_name: "",
        username: localStorage.getItem('userName') ||"user"
      },
      rate: this.rate,
      text: this.review,
      created_at: new Date().toString()
    }
  }

  clearDataReview(): void {
    this.review = '';
    this.rate = 0;
    this.selectedStars = 0
    this.hoverStars = 0;
  }

  onSubmit(): void {
    const data = this.getDataReview();
    this.reviewItem.emit(data);
    this.clearDataReview()
  }
}
