import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewsApiService } from '../../services/news-api.service';
import { Article } from '../../models/article.model';
import { NewsCardComponent } from '../news-card/news-card.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, MatProgressSpinnerModule, MatButtonModule, FormsModule, LanguageSelectorComponent, SearchBoxComponent, MatIconModule, MatSlideToggleModule],
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  articles: Article[] = [];
  loading = false;
  error = '';
  page = 1;
  currentLanguage = 'en';
  apiKey = '';
  currentSearchQuery = 'general';

  constructor(private newsService: NewsApiService, private router: Router, public themeService: ThemeService) { }

  ngOnInit() {
    this.apiKey = localStorage.getItem('newsApiKey') || '';
    if (!this.apiKey) {
      this.router.navigate(['/settings']);
      return;
    }
    this.currentLanguage = localStorage.getItem('newsLanguage') || 'en';
    this.loadNews();
  }

  loadNews() {
    if (this.loading) return;
    this.loading = true;
    this.newsService.getArticles(this.page, 20, this.currentSearchQuery, this.apiKey, this.currentLanguage).subscribe({
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

  onLanguageSelected(language: string) {
    this.currentLanguage = language;
    this.articles = [];
    this.page = 1;
    this.loadNews();
  }

  onSearch(query: string) {
    this.currentSearchQuery = query || 'general';
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
