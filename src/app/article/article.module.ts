import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from './../shared/shared.module';
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
        MarkdownPipe
    ],
    providers: [
        ArticleResolver
    ]
})

export class ArticleModule{}