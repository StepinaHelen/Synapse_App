import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  allStars = new Array(5);
  hoverStars = 0;
  selectedStars = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(stars: number): void {
    if (this.selectedStars === stars) {
      this.selectedStars = 0
      this.hoverStars = 0;
    }
    else {
      this.selectedStars = stars;
    }
  }

  onMouseenter(i: any): void {
    this.hoverStars = i + 1;
  }

  onClearHover(): void {
    this.hoverStars = 0;
  }
}
