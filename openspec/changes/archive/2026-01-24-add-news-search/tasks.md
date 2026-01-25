# Tasks

- [x] Create `SearchBoxComponent`
    - [x] Generate component `ng g c components/search-box --standalone`
    - [x] Implement template (Input, Button, Tooltip)
    - [x] Add styles (Tooltip visibility, flex layout)
    - [x] Implement logic (Emit search event)
- [x] Integrate Search Box into News Feed
    - [x] Import `SearchBoxComponent` in `NewsFeedComponent`
    - [x] Add to template in `.filter-container`
    - [x] Implement `onSearch(query: string)` method
    - [x] Update `loadNews` to use dynamic `q` parameter
- [x] Verify
    - [x] Test search with simple keywords
    - [x] Test exact match quotes
    - [x] Test + and - operators
    - [x] Test boolean operators
    - [x] Check tooltip content
