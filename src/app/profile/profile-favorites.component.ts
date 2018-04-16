import { ArticleListConfig } from './../shared/models/article-list-config.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from '../shared';
@Component({
    selector: 'profile-favorites',
    templateUrl: './profile-favorites.component.html'
})

export class ProfileFavoritesComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    profile: Profile;
    favoritesConfig: ArticleListConfig = new ArticleListConfig();
    

    ngOnInit(){
        this.route.parent.data.subscribe(
            (data: {profile: Profile}) => {
                this.profile = data.profile;
                this.favoritesConfig.filters.author === this.profile.username;
            }
        )
    }
}