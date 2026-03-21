## Context

OpenNews is a browser-only Angular 17 news reader backed by NewsAPI. User preferences (API key, language) are already persisted in `localStorage`. The existing `news-card` component renders article data inside Material cards, and `news-feed` manages the article list with a sticky filter bar (language selector + search box) and infinite scroll.

Users have no way to mark articles as interesting or filter their feed to show only saved items. This design adds a lightweight, fully client-side favorites system that reuses the existing localStorage pattern and Angular Material components.

## Goals / Non-Goals

**Goals:**
- Let users toggle any article as a favorite via a star icon on each card.
- Persist favorite state across browser sessions using `localStorage`.
- Provide a reactive filter in the feed to show only favorited articles.
- Keep the implementation purely additive—no existing behavior should break.

**Non-Goals:**
- Exporting or sharing favorites.

## Decisions

### 1. Storage key strategy
**Decision**: Store an array of objects `{ url, title, savedAt }` under the key `favorites` in `localStorage`.

**Why**: Articles from NewsAPI lack a stable unique ID. The `url` field is the most reliable unique identifier. Storing minimal metadata (`title`, `savedAt`) allows the favorites list to remain useful even if the original article is no longer returned by the API.

**Alternatives considered**:
- *Hash of title+source*: Fragile if titles change between API calls.
- *Store full article objects*: Wastes storage; risks storing stale data.

### 2. Service architecture
**Decision**: Create a standalone `FavoritesService` with a `BehaviorSubject<Set<string>>` (keyed by URL) for reactive state.

**Why**: Angular components can subscribe to the set to reactively render star states. Using a `Set` gives O(1) lookups. The `BehaviorSubject` ensures new subscribers immediately receive the current state.

### 3. Star icon placement & styling
**Decision**: Position the star absolutely in the top-right of the card image area. Use Angular Material's `mat-icon` with `star` (filled) and `star_border` (outlined) icons. Apply CSS `transition` on `color` and `transform` for smooth hover/click effects—no border, no background.

**Why**: Top-right is a common pattern (social cards, e-commerce wishlists). Using `position: absolute` over the image means we don't reflow the card layout. CSS-only transitions are performant and don't require additional animation libraries.

### 4. Filter implementation
**Decision**: Add a `MatSlideToggle` labeled "Show Favorites" in the existing `filter-container`. When active, the component filters `articles` array through the `FavoritesService` set before rendering, keeping the original array intact for toggle-off restoration.

**Why**: `MatSlideToggle` is already used in the header (theme toggle), so it maintains visual consistency. Filtering in the component (not the service) keeps the service focused on storage only.

### 5. No changes to Article model
**Decision**: Do not add `isFavorite` to the `Article` interface.

**Why**: The model represents the API response contract. Favorite state is a client concern managed by the service. Mixing API shape with client state leads to confusion and potential serialization issues.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| `localStorage` quota (~5 MB) could fill if user favorites thousands of articles | Store minimal metadata; add a max-favorites guard (e.g. 500) with a warning toast |
| Articles reloaded via infinite scroll may lose star state if URL matching fails | Use exact URL string comparison; NewsAPI URLs are stable per article |
| Filtering favorites while infinite scroll is active may confuse pagination | Disable infinite scroll when "Show Favorites" filter is active |
| Clearing browser data removes all favorites | Acceptable per browser-only constraint; no mitigation needed |
