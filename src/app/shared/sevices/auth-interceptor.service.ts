import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { PersistanceService } from "./persistance.service"
import {filter, tap} from 'rxjs/operators'
import { AuthService } from "src/app/auth/services/auth.service"

@Injectable({
	providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(private persistanceService: PersistanceService, private authService: AuthService) { }
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
	console.log('dfdfdf')
		const token = this.persistanceService.get("accessToken")
		console.log(token)
		req = req.clone({
			setHeaders: {
				Authorization: token ? `Token ${token}` : "",
			},
		})
		return next.handle(req)
	}
}