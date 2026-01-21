import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Input() selectedLanguage = 'en';
  @Output() languageSelected = new EventEmitter<string>();

  languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Portuguese' },
    { code: 'es', label: 'Spanish' }
  ];

  selectLanguage(langCode: string) {
    if (this.selectedLanguage !== langCode) {
      this.selectedLanguage = langCode;
      this.languageSelected.emit(langCode);
    }
  }
}
