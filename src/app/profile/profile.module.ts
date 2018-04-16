import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileArticlesComponent } from './profile-articles.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'profile/:username',
        component: ProfileComponent,
        resolve: {
            profile: ProfileResolver
        },
        children: [
            {
                path: '',
                component: ProfileArticlesComponent
            },
            {
                path: 'favorites',
                component: ProfileFavoritesComponent
            }
        ]
    }
]);

@NgModule({
    imports: [
        profileRouting,
        SharedModule
    ],
    declarations: [
        ProfileComponent,
        ProfileArticlesComponent,
        ProfileFavoritesComponent
    ],

    providers: [
        ProfileResolver
    ]
})

export class ProfileModule { }