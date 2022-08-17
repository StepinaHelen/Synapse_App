import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/sevices/auth-interceptor.service';
import { PersistanceService } from './shared/sevices/persistance.service';
import { ProductsModule } from './products/products.module';
import { AuthService } from './auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [PersistanceService,
  AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
