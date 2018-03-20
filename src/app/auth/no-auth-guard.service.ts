import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../shared';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Injectable()
export class NoAuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private userService: UserService
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.userService.isAuthenticated.take(1).map(bool => !bool);
    }
}