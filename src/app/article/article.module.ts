import { ArticleCommentComponent } from './article-comment.component';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from './../shared';
import { ArticleComponent } from './article.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ArticleResolver } from './article-resolver.service';
import { RouterModule } from '@angular/router';
const articleRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'article/:slug',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    }
]);

@NgModule({
    imports: [
        articleRouting,
        SharedModule
    ],
    declarations: [
        ArticleComponent,
        MarkdownPipe,
        ArticleCommentComponent
    ],
    providers: [
        ArticleResolver
    ]
})

export class ArticleModule{}