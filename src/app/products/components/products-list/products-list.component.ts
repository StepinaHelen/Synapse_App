import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ProductI } from '../../types/products.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'text', 'actions'];
  dataSource: ProductI[];
  destroy$ = new Subject<void>();

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductI[]) => {
      this.dataSource = data
    })
  }

  clickHandler(product: ProductI): void {
    this.router.navigate([`/products/${product.id}`]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
