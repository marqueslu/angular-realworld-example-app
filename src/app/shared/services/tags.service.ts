import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TagsService{
    constructor(
        private apiService: ApiService
    ){}

    getAll(): Observable<[string]>{
        return this.apiService.get('/tags')
        .map(data => data.tags);
    }
}