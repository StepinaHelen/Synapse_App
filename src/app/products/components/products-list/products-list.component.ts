import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'text', 'actions'];
  dataSource: any[];
  destroy$ = new Subject<void>();

  constructor(private productsService: ProductsService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.dataSource = data
    })
  }

  clickHandler(element: any): void {
    this.router.navigate([`/products/${element.id}`]).then();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
