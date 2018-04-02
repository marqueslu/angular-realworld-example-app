import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService, Article, ArticlesService } from '../shared';

@Injectable()
export class ArticleResolver implements Resolve<Article> {
    constructor(
        private articlesService: ArticlesService,
        private router: Router,
        private userService: UserService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.articlesService.get(route.params['slug'])
            .catch((err) => this.router.navigateByUrl('/'));
    }
}