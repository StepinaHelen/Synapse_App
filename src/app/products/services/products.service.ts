import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductI, ProductReviewI } from '../types/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productInfo$ = new BehaviorSubject<any>({})

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductI[]> {
    const url = environment.apiURL + "/products/"
    return this.http.get<any>(url).pipe()
  }

  getProductsReviews(id: number): Observable<ProductReviewI[]> {
    const url = environment.apiURL + `/reviews/${id}`
    return this.http.get<any>(url).pipe()
  }

  postReview(id: number, data:any): Observable<ProductReviewI> {
    const url = environment.apiURL + `/reviews/${id}`
    return this.http.post<any>(url, data).pipe()
  }

}
