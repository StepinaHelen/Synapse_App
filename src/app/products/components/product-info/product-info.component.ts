import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, Subject, } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { map, takeUntil } from 'rxjs/operators'
import { ProductI, ProductReviewI } from '../../types/products.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
  
export class ProductInfoComponent implements OnInit, OnDestroy {
  infoProduct: any;
  id: number;
  reviews: ProductReviewI[] = [];
  destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params?.id) || null;
    this.getFullInFo(this.id).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.infoProduct = data.product
      this.reviews = data.productsReview
    })
  }

  getProducts(id: number): Observable<ProductI> {
    return this.productsService.getProducts().pipe(map((el) => el.find(el => el.id === id)))
  }

  getProductsReviews(id: number): Observable<ProductReviewI[]> {
    return this.productsService.getProductsReviews(id);
  }

  getFullInFo(id: number): Observable<{ product: ProductI, productsReview: ProductReviewI[] }> {
    return combineLatest([
      this.getProducts(id),
      this.getProductsReviews(id),
    ]).pipe(
      map(([product, productsReview]) => {
        return { product, productsReview }
      })
    );
  }

  reviewsHandler(productReview: ProductReviewI): void {
    const dataReview = { ...productReview, product: this.id, id: this.id }
    this.reviews.unshift(dataReview)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
