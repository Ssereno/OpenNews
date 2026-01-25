# Design: Search Box Integration

## UI Design
- **Location:** Right side of the existing `.filter-container` in `NewsFeedComponent`.
- **Components:**
    - Input field (text).
    - Search Button (magnifying glass or "Search" text).
    - Help Tooltip (icon with hover text).

## Tooltip Content
The tooltip will display the following help text as requested:
> Surround phrases with quotes (") for exact match.
> Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
> Prepend words that must not appear with a - symbol. Eg: -bitcoin
> You can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.

## Interaction
- **Trigger:**
    - Clicking the Search button.
    - Pressing `Enter` key inside the input.
- **Action:**
    - Updates the `q` parameter in `NewsApiService.getArticles`.
    - Resets `page` to 1.
    - Clears current articles list and reloads.

## Component Structure
We will create a new standalone component `SearchBoxComponent` to encapsulate the input, button, and tooltip logic.

### SearchBoxComponent
- **Outputs:** `search` (event with query string).
- **Inputs:** None (initially).
