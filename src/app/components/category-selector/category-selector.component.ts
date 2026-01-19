import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories = [
    'General', 'Technology', 'Business', 'Entertainment', 'Health', 'Science', 'Sports'
  ];

  selectedCategory = 'General';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category.toLowerCase());
  }
}
