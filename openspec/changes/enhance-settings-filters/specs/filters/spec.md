# News Feed Filters

## ADDED Requirements
### Requirement: Filter Selection
- SHALL be possible to select multiple categories, countries, or languages.
- SHALL be possible to clear all selections.
- SHALL be possible to Search for filter value.
- Filter MUST be applied to the news feed when the user Applies the filter (apply the three filters or clear all).

### Feed Filtering
#### Scenario: Filter UI
- **Given** the user is on the news feed
- **Then** they should see dropdown filters for Language, Country, and Category
- **And** there should be a "Filter" button to apply changes (optional, or auto-apply)

#### Scenario: Default Values
- **Given** the user has configured preferences in settings
- **When** the news feed loads
- **Then** the Language, Country, and Category filters are pre-selected with the user's default values

#### Scenario: Fetching News
- **Given** filters are applied
- **When** news is fetched from the API
- **Then** the request should include the `language`, `country`, and `category` parameters matching the selected filters
