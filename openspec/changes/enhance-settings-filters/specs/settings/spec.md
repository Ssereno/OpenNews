# Settings Page Enhancements

## ADDED Requirements
### Requirement: Settings Layout
- SHALL have two distinct sections: "API Configuration" and "Preferences"
- "API Configuration" SHALL contain the API Key input
- "Preferences" SHALL contain selectors for Language, Country, and Default Category

#### Scenario: Settings Layout
- **Given** the user is on the settings page
- **Then** they should see two distinct sections: "API Configuration" and "Preferences"
- **And** "API Configuration" contains the API Key input
- **And** "Preferences" contains selectors for Language, Country, and Default Category

### Requirement: Single Selection
- SHALL only allow one option to be selected at a time (radio button or single-select dropdown)

#### Scenario: Single Selection
- **Given** the user is selecting a Language, Country, or Category in settings
- **When** they make a selection
- **Then** only one option can be selected at a time (radio button or single-select dropdown)

### Requirement: Persistence
- SHALL remember the user's selected Language, Country, and Category when they reload the application

#### Scenario: Persistence
- **Given** the user saves their settings
- **When** they reload the application
- **Then** their selected Language, Country, and Category are remembered
