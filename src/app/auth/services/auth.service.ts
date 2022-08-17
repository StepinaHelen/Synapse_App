import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersistanceService } from '../../shared/sevices/persistance.service';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private persistanceService: PersistanceService) { }
  
  register(data: any): Observable<any> {
    const url = environment.apiURL + "/register/"
    return this.http.post<any>(url, data).pipe(
      tap((res: any) => {
        this.persistanceService.set('accessToken', res.token)
      }),
    )
  }

  login(data: any): Observable<any> {
    const url = environment.apiURL + "/login/"
    return this.http
      .post<any>(url, data).pipe(
        tap((res: any) => {
        this.persistanceService.set('accessToken', res.token)
      }),
      )

  }
}
