import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article.model';

export interface FavoriteEntry {
  article: Article;
  savedAt: string;
}

const STORAGE_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoriteUrls$ = new BehaviorSubject<Set<string>>(new Set());

  readonly favorites$ = this.favoriteUrls$.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  toggle(article: Article): void {
    const entries = this.getEntries();
    const index = entries.findIndex(e => e.article.url === article.url);

    if (index >= 0) {
      entries.splice(index, 1);
    } else {
      entries.push({ article, savedAt: new Date().toISOString() });
    }

    this.persist(entries);
    this.favoriteUrls$.next(new Set(entries.map(e => e.article.url)));
  }

  isFavorite(url: string): boolean {
    return this.favoriteUrls$.value.has(url);
  }
  
  getAllFavorites(): Article[] {
    return this.getEntries().map(e => e.article);
  }

  private loadFromStorage(): void {
    const entries = this.getEntries();
    this.favoriteUrls$.next(new Set(entries.map(e => e.article.url)));
  }

  private getEntries(): FavoriteEntry[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      // Map old format to new format just in case
      return parsed.map((e: any) => {
        if (e.url && !e.article) {
          return {
            article: { url: e.url, title: e.title, source: { id: null, name: 'Unknown' }, publishedAt: e.savedAt || new Date().toISOString(), description: null, content: null, urlToImage: null, author: null } as Article,
            savedAt: e.savedAt || new Date().toISOString()
          };
        }
        return e;
      });
    } catch {
      return [];
    }
  }

  private persist(entries: FavoriteEntry[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }
}
