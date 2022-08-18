import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { AsideModule } from '../shared/modules/aside/aside.module';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { FooterModule } from '../shared/modules/footer/footer.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { InProgressPageComponent } from '../shared/modules/inprogress-page/inprogress-page.component';

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
      {
        path: 'inprogress',
        component: InProgressPageComponent
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
    MatIconModule,
    FormsModule,
    FooterModule
  ]
})
export class ProductsModule { }
