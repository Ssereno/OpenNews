## ADDED Requirements

### Requirement: Toggle favorite status on a news card
The system SHALL display a star icon in the top-right corner of each news card. Clicking the icon SHALL toggle the article's favorite status. A filled star (`star`) SHALL indicate the article is favorited. An outlined star (`star_border`) SHALL indicate the article is not favorited.

#### Scenario: User favorites an unfavorited article
- **GIVEN** an article that is not currently in the user's favorites
- **WHEN** the user clicks the star icon on that article's card
- **THEN** the icon changes to a filled star
- **AND** the article's URL and title are persisted in `localStorage`

#### Scenario: User unfavorites a favorited article
- **GIVEN** an article that is currently in the user's favorites
- **WHEN** the user clicks the filled star icon on that article's card
- **THEN** the icon changes to an outlined star
- **AND** the article's entry is removed from `localStorage`

#### Scenario: Star icon visual feedback
- **GIVEN** any news card is visible
- **WHEN** the user hovers over the star icon
- **THEN** the icon displays a smooth CSS transition (scale and color change)
- **AND** the icon has no border or background

### Requirement: Persist favorites in localStorage
The system SHALL store favorite articles in `localStorage` under the key `favorites` as a JSON array of objects containing `url`, `title`, and `savedAt` fields. The system SHALL NOT store sensitive user data in this storage.

#### Scenario: Favorites survive page reload
- **GIVEN** the user has favorited one or more articles
- **WHEN** the user reloads the page
- **THEN** previously favorited articles still display a filled star icon

#### Scenario: Favorites persist across sessions
- **GIVEN** the user has favorited articles in a previous browser session
- **WHEN** the user opens the application in a new session
- **THEN** all previously saved favorites are restored

### Requirement: Filter view to show only favorites
The system SHALL provide a "Show Favorites" toggle in the existing filter bar. When the toggle is active, only articles that are in the user's favorites SHALL be displayed. When the toggle is inactive, all articles SHALL be displayed as normal.

#### Scenario: Activating the favorites filter
- **GIVEN** the user has some articles favorited and the feed contains both favorited and unfavorited articles
- **WHEN** the user activates the "Show Favorites" toggle
- **THEN** only the favorited articles are displayed in the news grid
- **AND** the view updates reactively without a page reload

#### Scenario: Deactivating the favorites filter
- **GIVEN** the "Show Favorites" toggle is active
- **WHEN** the user deactivates the toggle
- **THEN** all articles (favorited and unfavorited) are displayed again

#### Scenario: No favorites while filter is active
- **GIVEN** the user has no favorited articles
- **WHEN** the user activates the "Show Favorites" toggle
- **THEN** an empty state or message is shown indicating no favorites are saved

### Requirement: Infinite scroll behavior with favorites filter
The system SHALL disable infinite scroll loading when the "Show Favorites" filter is active, since favorites are a finite client-side set.

#### Scenario: Scroll does not trigger load when filtering favorites
- **GIVEN** the "Show Favorites" toggle is active
- **WHEN** the user scrolls to the bottom of the page
- **THEN** no additional API request is made
