# Search Specification

## ADDED Requirements

### Requirement: Search Interface
The News Feed SHALL provide a text input field for searching news.
The Search Input SHALL be positioned in the filter bar, to the right of the Language Selector.
The Search Input SHALL include a button to trigger the search.
The Search Input SHALL support triggering search by pressing the `Enter` key.

#### Scenario: Search Box Visibility
Given the user is on the news feed
Then they should see a search input field to the right of the language selector
And a search button

#### Scenario: Trigger Search
Given the user has entered a keyword in the search box
When they click the search button
Then the news feed should be updated with articles matching the keyword
And the page should be reset to 1

#### Scenario: Trigger Search with Enter
Given the user has entered a keyword in the search box
When they press the Enter key
Then the news feed should be updated with articles matching the keyword

### Requirement: Search Help
The Search Interface SHALL provide a help tooltip explaining the search syntax.
The Tooltip SHALL appear when hovering over a help icon/element.
The Tooltip text MUST include instructions for quotes, `+`, `-`, and `AND/OR/NOT` operators.

#### Scenario: View Help
Given the user is on the news feed
When they hover over the search help icon
Then a tooltip should appear with the text:
"""
Surround phrases with quotes (") for exact match.
Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
Prepend words that must not appear with a - symbol. Eg: -bitcoin
You can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
"""

### Requirement: Search Persistence
The search query SHALL NOT be persisted to settings (unlike filters).
The search query SHALL be cleared when the application is reloaded.

#### Scenario: Reload clears search
Given the user has an active search query
When the page is reloaded
Then the search query should be empty
And the news feed should show default articles (general)
