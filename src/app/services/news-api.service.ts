import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/article.model';

@Injectable({
    providedIn: 'root'
})
export class NewsApiService {
    private apiUrl = 'https://newsapi.org/v2/everything';

    private requestCountKey = 'newsApiRequestCount';
    private requestDateKey = 'newsApiRequestDate';

    constructor(private http: HttpClient) {
        this.checkAndResetCounter();
    }

    getArticles(page: number = 1, pageSize: number = 20, q: string = 'general', apiKey: string, language: string = 'en'): Observable<NewsResponse> {
        this.incrementRequestCount();

        const params = new HttpParams()
            .set('q', q)
            .set('page', page.toString())
            .set('pageSize', pageSize.toString())
            .set('apiKey', apiKey)
            .set('language', language)
            .set('sortBy', 'publishedAt');

        return this.http.get<NewsResponse>(this.apiUrl, { params });
    }

    getDailyRequestCount(): number {
        return parseInt(localStorage.getItem(this.requestCountKey) || '0', 10);
    }

    private incrementRequestCount() {
        this.checkAndResetCounter();
        const currentCount = this.getDailyRequestCount();
        const newCount = currentCount + 1;
        localStorage.setItem(this.requestCountKey, newCount.toString());
    }

    private checkAndResetCounter() {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = localStorage.getItem(this.requestDateKey);

        if (lastDate !== today) {
            localStorage.setItem(this.requestCountKey, '0');
            localStorage.setItem(this.requestDateKey, today);
        }
    }
}
