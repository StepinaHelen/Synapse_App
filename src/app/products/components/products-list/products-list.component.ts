import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'text', 'actions'];
  dataSource : any[];

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

}
