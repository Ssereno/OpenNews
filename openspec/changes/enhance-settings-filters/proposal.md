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
- **Automated**:
    - Validate settings persistence.
    - Validate default filter selection on news feed load.
    - Validate news fetching carries the correct parameters.
- **Manual**:
    - Visual check of the new settings layout.
    - Interaction test with dropdowns.
