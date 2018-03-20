import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';


import {
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  UserService
} from './shared';
import { SettingsComponent } from './settings/settings.component';
import { SettingsModule } from './settings/settings.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    rootRouting,
    SharedModule,
    SettingsModule
  ],
  providers: [ApiService, AuthGuard, JwtService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
