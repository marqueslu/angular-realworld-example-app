import { Profile } from './profile.model';

export class Article {
    slug: string;
    title: string = '';
    description: string = '';
    body: string = '';
    tagList: Array<string> = [];
    createdAt: string;
    updateAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
}