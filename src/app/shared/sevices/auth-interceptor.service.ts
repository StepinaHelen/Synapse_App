import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { PersistanceService } from "./persistance.service"
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
		const token = this.persistanceService.get("accessToken")
	
		req = req.clone({
			setHeaders: {
				Authorization: token ? `Bearer ${token}` : "",
			},
		})

		return next.handle(req)
	}
}