import { ShowAuthedDirective } from './show-authed.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './list-errors.component';
import { FollowButtonComponent, FavoriteButtonComponent } from './buttons';
import { ArticleMetaComponent } from './article-helpers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [ArticleMetaComponent, ListErrorsComponent, ShowAuthedDirective, FollowButtonComponent, FavoriteButtonComponent],
  exports: [
    CommonModule,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule, 
    ShowAuthedDirective,
    ArticleMetaComponent,
    FavoriteButtonComponent
  ]
})
export class SharedModule {}
