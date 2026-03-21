## 1. FavoritesService

- [x] 1.1 Create `src/app/services/favorites.service.ts` with `FavoritesService` class
- [x] 1.2 Implement `BehaviorSubject<Set<string>>` for reactive favorite URL tracking
- [x] 1.3 Implement `loadFromStorage()` to read and parse `favorites` key from `localStorage`
- [x] 1.4 Implement `toggle(url: string, title: string)` to add/remove articles and persist
- [x] 1.5 Implement `isFavorite(url: string): boolean` helper for synchronous checks
- [x] 1.6 Define `FavoriteEntry` interface with `url`, `title`, and `savedAt` fields

## 2. News Card Star Icon

- [x] 2.1 Inject `FavoritesService` into `NewsCardComponent`
- [x] 2.2 Add `mat-icon` star button to `news-card.component.html` positioned top-right over the card image
- [x] 2.3 Bind icon name to `star` (filled) or `star_border` (outlined) based on favorite state
- [x] 2.4 Add click handler calling `favoritesService.toggle(article.url, article.title)`
- [x] 2.5 Add SCSS for absolute positioning, no border/background, and smooth CSS transitions on hover/click

## 3. Favorites Filter in News Feed

- [x] 3.1 Inject `FavoritesService` into `NewsFeedComponent`
- [x] 3.2 Add `showFavoritesOnly: boolean` state property
- [x] 3.3 Add `MatSlideToggleModule` "Show Favorites" toggle to `filter-container` in template
- [x] 3.4 Create `get filteredArticles()` getter that filters `articles` array through `FavoritesService` when toggle is active
- [x] 3.5 Update `*ngFor` to iterate over `filteredArticles` instead of `articles`
- [x] 3.6 Disable infinite scroll (`onScroll`) when `showFavoritesOnly` is true
- [x] 3.7 Add empty state message when filter is active but no favorites exist

## 4. Verification

- [x] 4.1 Run `ng build` to verify compilation with no errors
- [x] 4.2 Manual browser test: toggle star on/off, verify `localStorage` updates
- [x] 4.3 Manual browser test: reload page, verify star states persist
- [x] 4.4 Manual browser test: activate favorites filter, verify only starred items show
- [x] 4.5 Manual browser test: verify star hover/click transitions are smooth, no border/background
