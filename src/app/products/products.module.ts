import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { AsideModule } from '../shared/modules/aside/aside.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MatTableModule } from '@angular/material/table';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { MatIconModule } from '@angular/material/icon';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
        
      },
      {
        path: 'products',
        component: ProductsListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products/:id',
        component: ProductInfoComponent
      },
    ]
  },
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductInfoComponent,
    ReviewListComponent,
    ProductCardComponent,
    ReviewFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HeaderModule,
    AsideModule,
    MatIconModule

  ]
})
export class ProductsModule { }
