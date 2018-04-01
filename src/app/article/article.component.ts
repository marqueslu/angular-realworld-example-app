import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  Article,
  ArticlesService,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'article-page',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  article: Article;
  currentUser: User;
  canModify: boolean;
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean){
    this.article.author.following = following;
  }

  deleteArticle(){
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
    .subscribe(
      success => {
        this.router.navigateByUrl('/');
      }
    );
  }





}
