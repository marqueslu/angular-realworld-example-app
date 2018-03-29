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
        }
    }
]);

@NgModule({
    imports: [
        profileRouting,
        SharedModule
    ], 
    declarations: [
        ProfileComponent
    ],

    providers: [
        ProfileResolver
    ]
})

export class ProfileModule {}