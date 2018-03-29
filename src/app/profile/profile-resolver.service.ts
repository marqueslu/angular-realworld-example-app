import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Profile, ProfilesService } from '../shared';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProfileResolver implements Resolve<Profile> {
    constructor(
        private profilesService: ProfilesService,
        private router: Router
    ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>{
        return this.profilesService.get(route.params['username'])
        .catch((err) => this.router.navigateByUrl('/'));
    }
}