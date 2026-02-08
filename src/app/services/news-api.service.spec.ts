import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
    let service: NewsApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [NewsApiService]
        });
        service = TestBed.inject(NewsApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
        localStorage.clear();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize request count to 0', () => {
        expect(service.getDailyRequestCount()).toBe(0);
    });

    it('should increment request count on getArticles', () => {
        service.getArticles(1, 20, 'test', 'api-key').subscribe();

        const req = httpMock.expectOne(req => req.url === 'https://newsapi.org/v2/everything');
        req.flush({});

        expect(service.getDailyRequestCount()).toBe(1);
    });

    it('should persist count to localStorage', () => {
        service.getArticles(1, 20, 'test', 'api-key').subscribe();

        const req = httpMock.expectOne(req => req.url === 'https://newsapi.org/v2/everything');
        req.flush({});

        expect(localStorage.getItem('newsApiRequestCount')).toBe('1');
    });

    it('should reset count on new day', () => {
        // Simulate yesterday
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        localStorage.setItem('newsApiRequestDate', yesterday.toISOString().split('T')[0]);
        localStorage.setItem('newsApiRequestCount', '10');

        // Re-create service to trigger constructor check
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [NewsApiService]
        });
        service = TestBed.inject(NewsApiService);

        expect(service.getDailyRequestCount()).toBe(0);
        const today = new Date().toISOString().split('T')[0];
        expect(localStorage.getItem('newsApiRequestDate')).toBe(today);
    });
});
