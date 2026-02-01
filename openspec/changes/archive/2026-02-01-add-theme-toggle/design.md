# Design: Theme Toggle

## Architecture
- **State Management**: `ThemeService` (Singleton).
  - Holds `activeTheme` behavior subject.
  - Handles persistence to `localStorage`.
  - Applies `.dark-theme` class to `document.body` or `html` element.

## Data Model
```typescript
type Theme = 'light' | 'dark';
```

## Styling Strategy
- **CSS Variables**: Define semantic variables (e.g., `--app-bg`, `--app-text`, `--header-bg`) in `styles.scss`.
- **Material UI**: Overrides will be applied via `.dark-theme` selector targeting material classes if necessary, or by swapping/overriding global material variables if using MDC-based components.
- **Icons**: Use Material Icons (`wb_sunny`, `brightness_3` or `bedtime`).

## UI/UX
- **Location**: Top bar of News Feed, to the left of the "Settings" button.
- **Widget**: A specialized toggle button.
  - **Left**: Sun Icon.
  - **Center**: Toggle Switch.
  - **Right**: Moon Icon.
- **Interaction**: Clicking toggles immediately and saves preference.
