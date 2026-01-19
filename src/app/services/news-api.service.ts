import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/article.model';

@Injectable({
    providedIn: 'root'
})
export class NewsApiService {
    private apiUrl = 'https://newsapi.org/v2/everything';

    constructor(private http: HttpClient) { }

    getArticles(page: number = 1, pageSize: number = 20, q: string = 'general', apiKey: string): Observable<NewsResponse> {
        const params = new HttpParams()
            .set('q', q)
            .set('page', page.toString())
            .set('pageSize', pageSize.toString())
            .set('apiKey', apiKey)
            .set('language', 'en')
            .set('sortBy', 'publishedAt');

        return this.http.get<NewsResponse>(this.apiUrl, { params });
        console.log(this.apiUrl, { params });
    }
}
