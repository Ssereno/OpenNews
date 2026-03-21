## Why

Users currently have no way to save or bookmark interesting news articles for later reading. Once a story scrolls out of view or the page refreshes, it is lost. Adding a favorites/bookmarking system lets users persistently mark stories they care about and quickly filter their feed to see only saved items—without requiring any backend or authentication.

## What Changes

- **New star icon on news cards**: Add a clickable star icon (filled/outlined) to the top-right corner of each `news-card` component to toggle favorite status.
- **Favorites service**: Create a new `FavoritesService` that manages favorite article IDs and metadata using `localStorage`, exposing reactive state via RxJS.
- **Filter bar enhancement**: Add a "Show Favorites" toggle to the existing `filter-container` in the `news-feed` component, filtering the visible article list to show only bookmarked items.
- **Smooth icon transitions**: The star icon must have CSS transition animations on hover and click, with no border or background styling.
- **Reactive UI updates**: Toggling favorites and the filter must update the view reactively without page reloads.

## Capabilities

### New Capabilities
- `favorites-bookmarking`: Covers the star icon toggle on cards, the favorites persistence service (localStorage), and the "Show Favorites" filter in the news feed.

### Modified Capabilities
_(none — no existing spec-level behavior changes)_

## Impact

- **Components modified**: `news-card` (add star icon + toggle logic), `news-feed` (add favorites filter toggle, filtered article list)
- **New service**: `FavoritesService` in `src/app/services/`
- **Dependencies**: Angular Material `MatIconModule` (already available), `MatCheckboxModule` or `MatSlideToggleModule` for the filter toggle
- **Storage**: `localStorage` key for persisted favorite IDs — no sensitive data stored
- **No breaking changes** — this is purely additive
