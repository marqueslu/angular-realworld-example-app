import { UserService, Comment, User } from '../shared';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'article-comment',
    templateUrl: 'article-comment.component.html'
})

export class ArticleCommentComponent implements OnInit{

    constructor(
        private userService: UserService
    ){}

    @Input() comment: Comment;
    @Output() deleteComment = new EventEmitter<boolean>();
    canModify: boolean;

    ngOnInit(){
        this.userService.currentUser.subscribe(
            (userData: User) => {
                this.canModify = ( userData.username === this.comment.author.username ); 
            }
        );
    }

    deleteClicked(){
        this.deleteComment.emit(true);
    }
    

}