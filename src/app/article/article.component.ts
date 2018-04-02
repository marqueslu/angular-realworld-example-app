import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  Article,
  ArticlesService,
  Comment,
  CommentService,
  User,
  UserService
} from '../shared';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'article-page',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  article: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentService: CommentService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
        this.populateComments();
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

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }



  populateComments() {
    this.commentService.getAll(this.article.slug)
      .subscribe(comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    let commentBody = this.commentControl.value;
    this.commentService
      .add(this.article.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
        }
      )
  }

  onDeleteComment(comment){
    this.commentService.destroy(comment.id, this.article.slug)
    .subscribe(
      success => {
        this.comments = this.comments.filter((item) => item !== comment);
      }
    );
  }

}
