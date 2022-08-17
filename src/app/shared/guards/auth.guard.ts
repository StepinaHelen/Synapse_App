import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PersistanceService } from "../sevices/persistance.service";

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private router: Router, private persistanceService: PersistanceService) { }

	canActivate(): Observable<UrlTree> | boolean {
		return this.getPermissions();
	}

	canLoad(): Observable<UrlTree> | boolean {
		return this.getPermissions();
	}

	getPermissions(): Observable<UrlTree> | boolean {
		return this.persistanceService.get("accessToken") ? true : this.router.navigate(['/login']) && false
	}
}