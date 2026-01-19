import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  apiKey: string = '';

  constructor(private router: Router) {
    this.apiKey = localStorage.getItem('newsApiKey') || '';
  }

  save() {
    if (this.apiKey) {
      localStorage.setItem('newsApiKey', this.apiKey);
      alert('API Key saved!');
      this.router.navigate(['/']);
    }
  }
}
