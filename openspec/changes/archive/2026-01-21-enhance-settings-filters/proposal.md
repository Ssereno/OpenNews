# Enhance Settings and Filters

## Goal
Improve user experience by refining the settings page structure and introducing dynamic filtering on the main news feed. Keep in mind that the  filters should be placed bellow the header of the news feed, and the header should be sticky.

## Changes
- **Settings Page**: 
    - Separate API Key configuration from preference settings.
    - Enforce single selection for Language, Country, and Category.
    - Persist these selections as user defaults.
- **News Feed**:
    - Add dropdown filters for Language, Country, and Category.
    - Default these filters to the values chosen in settings.

## Verification

#### Scenario: Settings Persistence
- **When** the user changes settings and reloads the application
- **Then** the settings should be persisted

#### Scenario: Default Filter Selection
- **Given** the user has configured preferences
- **When** the news feed loads
- **Then** the filters should default to the saved preferences

#### Scenario: News Fetching Parameters
- **When** the news feed fetches articles
- **Then** the API request should include the correct filter parameters

#### Scenario: Manual Visual Check
- **Then** the settings page layout should match the new design
- **And** the dropdowns should be interactive
