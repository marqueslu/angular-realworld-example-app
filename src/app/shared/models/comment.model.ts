import { Profile } from './profile.model';

export class Comment {
    id: string;
    body: string;
    createdAt: string;
    author: Profile;
}