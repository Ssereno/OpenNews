# Design: News Web App Architecture

## Architecture
- **Framework**: Angular 17 (Standalone Components)
- **State Management**: Local component state + Services (Signals preferred if applicable in Angular 17 context)
- **Persistence**: `localStorage` for API Key and user preferences.
- **Styling**: Bootstrap 5 for layout, Angular Material for interactive components (Spinner, Buttons, Inputs).

## Components
- **AppComponent**: Main layout shell.
- **NewsFeed**: Smart component that facilitates data fetching and infinite scroll logic.
- **NewsCard**: Dumb component, takes a `Article` input and displays image, title, description, and source.
- **SettingsDialog/Panel**: For inputting the NewsAPI key.

## Data Flow
1. App initializes, checks `localStorage` for API Key.
2. If no key, show message to user to set the API key in the settings page.
3. If key exists, `NewsFeedComponent` requests data via `NewsApiService`.
4. Service calls `https://newsapi.org/v2/everything` with HTTP Client.
5. Response mapped to `Article` interface and displayed.
