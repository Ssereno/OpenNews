# filters Specification

## Purpose
TBD - created by archiving change enhance-settings-filters. Update Purpose after archive.

## Requirements
### Requirement: Filter Selection
It SHALL be possible to select Language and clear the selection.
Languages SHALL be restricted to: `en`, `pt`, `es`.
The Filter MUST be applied to the news feed when the user Applies the filter.
The Default value SHALL be the value stored in settings. If no value is stored, it SHALL default to `en`.
The Filter bar MUST be always visible on the news feed and be sticky to the header bar.
The Filter MUST be aligned to the left.

#### Scenario: Filter UI
Given the user is on the news feed
Then they should see a filter for Language (options: en, pt, es)
And the filter bar is sticky to the header bar

#### Scenario: Default Values
Given the user has configured preferences in settings
When the news feed loads
Then the Language filter is pre-selected with the user's default value

#### Scenario: Fetching News
Given filter is applied
When news is fetched from the API
Then the request should include the `language` parameter matching the selected filter

