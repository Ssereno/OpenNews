# Add Search Box to News Feed

## Summary
Add a search box to the right side of the filter bar in the news feed. This allows users to filter news articles by keyword using the NewsAPI `q` parameter.

## Motivation
Users need a way to find specific news topics beyond general categories and languages. The NewsAPI already supports this via the `q` parameter.

## Scope
- New UI component: Search Box with search button and help tooltip.
- Integration: Update News Feed to utilize the search query.
- API: Ensure `q` parameter is passed correctly (already supported by service).
