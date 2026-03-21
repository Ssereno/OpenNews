import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Article } from '../../models/article.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() article!: Article;

  constructor(public favoritesService: FavoritesService) {}

  openArticle() {
    window.open(this.article.url, '_blank');
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.favoritesService.toggle(this.article);
  }
}
