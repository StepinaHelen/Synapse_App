import { Component, Input, OnInit } from '@angular/core';
import { ProductReviewI } from '../../types/products.interface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  allStars = new Array(5);
  @Input() reviews: ProductReviewI[] = [];
  constructor() { }

  ngOnInit(): void {}

}
