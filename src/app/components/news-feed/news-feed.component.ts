import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewsApiService } from '../../services/news-api.service';
import { Article } from '../../models/article.model';
import { NewsCardComponent } from '../news-card/news-card.component';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, CategorySelectorComponent, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  articles: Article[] = [];
  loading = false;
  error = '';
  page = 1;
  currentCategory = 'general';
  apiKey = '';

  constructor(private newsService: NewsApiService, private router: Router) { }

  ngOnInit() {
    this.apiKey = localStorage.getItem('newsApiKey') || '';
    if (!this.apiKey) {
      this.router.navigate(['/settings']);
      return;
    }
    this.loadNews();
  }

  loadNews() {
    if (this.loading) return;
    this.loading = true;
    this.newsService.getArticles(this.page, 20, this.currentCategory, this.apiKey).subscribe({
      next: (response) => {
        this.articles = [...this.articles, ...response.articles];
        this.loading = false;
        this.page++;
      },
      error: (err) => {
        this.error = 'Failed to load news. Check API Key or try again later.';
        this.loading = false;
        if (err.status === 401) {
          this.router.navigate(['/settings']);
        }
      }
    });
  }

  onCategoryParams(category: string) {
    this.currentCategory = category;
    this.articles = [];
    this.page = 1;
    this.loadNews();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.loadNews();
    }
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }
}
