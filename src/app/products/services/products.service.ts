import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productInfo$ = new BehaviorSubject<any>({})

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = environment.apiURL + "/products/"
    return this.http.get<any>(url).pipe()
  }

  getProductsInfo(id: number): Observable<any> {
    const url = environment.apiURL + `/reviews/${id}`
    return this.http.get<any>(url).pipe()
  }
  postInfo(id: number, data:any): Observable<any> {
    const url = environment.apiURL + `/reviews/${id}`
    return this.http.post<any>(url, data).pipe()
  }


  // http://smktesting.herokuapp.com/api/reviews/2
}
