import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  allStars = new Array(5);
  @Input() reviews: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
