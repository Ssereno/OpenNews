# request-tracking Specification

## Purpose
TBD - created by archiving change track-daily-requests. Update Purpose after archive.

## Requirements
### Requirement: Track Daily API Calls
The system MUST count every request made to the NewsAPI and persist this count for the current day.

#### Scenario: First request of the day
- GIVEN no requests have been made today
- WHEN a request is triggered
- THEN the counter should be initialized/reset to 0 and then incremented to 1
- AND the current date should be stored

#### Scenario: Subsequent requests
- GIVEN the counter is at N
- WHEN a request is triggered
- THEN the counter should increment to N+1

#### Scenario: Date change
- GIVEN the stored date is yesterday
- WHEN a request is triggered today
- THEN the counter should reset to 1 (counting the current request)
- AND the stored date should update to today

### Requirement: Display Request Count
The system MUST display the current day's request count on the Settings page.

#### Scenario: View Settings
- GIVEN I am on the Settings page
- THEN I should see a "Requests Today" field
- AND the field should show the current count from local storage
- AND the field should be read-only

