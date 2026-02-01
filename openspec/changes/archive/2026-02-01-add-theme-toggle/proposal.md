# Add Theme Toggle

## Context
The application currently uses a static light theme (Angular Material Indigo-Pink). Users have requested a way to switch between light and dark modes to improve usability in different lighting conditions.

## Goals
- Add a theme toggle button to the top bar (News Feed header).
- Support Light and Dark modes.
- Persist user preference.
- Update visual styles (colors, text) dynamically.

## Non-Goals
- Fully custom Angular Material Palette generation (will use CSS variable overrides for simplicity unless required).
- System preference auto-detection sync (will default to Light or saved preference).

## Proposed Solution
- Implement a `ThemeService` to manage state.
- Use CSS Custom Properties (Variables) for theming.
- Add a toggle UI in `NewsFeedComponent`.
