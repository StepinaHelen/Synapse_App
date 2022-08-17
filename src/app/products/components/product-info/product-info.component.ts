import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, filter, forkJoin, map, mergeMap, Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  infoProduct: any;
  id: string;
  reviews: any[]

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params?.id || null;
    this.getFullInFo(this.id).subscribe(data => {
      this.infoProduct = data.product
      this.reviews = data.productReview
    })
    // this.postInfo()
  }
  getProducts(id): Observable<any> {
    return this.productsService.getProducts().pipe(map((el) => el.filter(el => el.id == id)))
  }
  getProductsInfo(id: any): Observable<any> {
    return this.productsService.getProductsInfo(id);
  }


  postInfo() {
    const data = {
      "id": 10,
      "product": 1,
      "created_by": {
        'email': "user@user.com",
        "id": 1,
        "last_name": "",
        "username": "user"
      },
      "rate": 0,
      "text": "helen st"
    }
    this.productsService.postInfo(1, data).subscribe(data => console.log(data))
  }

  getFullInFo(id: any): Observable<any> {
    return combineLatest([
      this.getProducts(id),
      this.getProductsInfo(id),
    ]).pipe(
      map(([products, productReview]) => {
        const product = products[0]
        return { product, productReview }
      })
    );
  }

}
