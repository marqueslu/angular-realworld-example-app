import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../shared";

@Injectable()
export class HomeAuthResolver implements Resolve<boolean>{
    constructor(
        private router: Router,
        private userService: UserService
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Observable<boolean>{
        return this.userService.isAuthenticated.take(1);
    }
}