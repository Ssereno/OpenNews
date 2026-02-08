import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  apiKey: string = '';
  selectedLanguage: string = 'en';
  dailyRequests: number = 0;

  constructor(private router: Router, private newsService: NewsApiService) {
    this.apiKey = localStorage.getItem('newsApiKey') || '';
    this.selectedLanguage = localStorage.getItem('newsLanguage') || 'en';
    this.dailyRequests = this.newsService.getDailyRequestCount();
  }

  save() {
    if (this.apiKey) {
      localStorage.setItem('newsApiKey', this.apiKey);
      localStorage.setItem('newsLanguage', this.selectedLanguage);
      alert('Settings saved!');
      this.router.navigate(['/']);
    }
  }
}
