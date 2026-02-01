# Spec: Theming

## ADDED Requirements

### Requirement: Theme State Management
The application MUST maintain the active theme state (Light or Dark) and persist it across sessions.

#### Scenario: Default Theme
- GIVEN a user visits the site for the first time
- THEN the theme SHOULD default to Light.

#### Scenario: Persistence
- GIVEN a user switches to Dark mode
- WHEN they reload the page
- THEN the application SHOULD remain in Dark mode.

### Requirement: Theme Toggle UI
A control to switch themes MUST be visible on the main navigation bar.

#### Scenario: Location
- GIVEN the News Feed header
- THEN the toggle SHOULD be positioned to the left of the Settings button.

#### Scenario: Visual Indicators
- GIVEN the toggle component
- THEN it SHOULD display a Sun icon on the left (light mode indicator) and a Moon icon on the right (dark mode indicator).

### Requirement: Visual Adaptation
The application appearance MUST adapt based on the selected theme.

#### Scenario: Dark Mode Colors
- GIVEN Dark mode is active
- THEN the background SHOULD be dark (e.g., `#121212`)
- AND the text SHOULD be light (e.g., `#e0e0e0`).

#### Scenario: Light Mode Colors
- GIVEN Light mode is active
- THEN the background SHOULD be light (e.g., `#ffffff`)
- AND the text SHOULD be dark (e.g., `#333333`).
