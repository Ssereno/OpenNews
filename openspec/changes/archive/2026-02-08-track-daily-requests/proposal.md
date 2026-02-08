# Change: Track Daily Requests

## Summary
Add a mechanism to track and display the number of requests made to the NewsAPI per day. This helps users monitor their usage against NewsAPI limits.

## Why
NewsAPI has rate limits (free tier is limited). Users need awareness of their daily consumption to manage their usage effectively.

## Proposed Solution
- Implement a request counter in `NewsApiService` that increments on every API call.
- Store the counter and the current date in `localStorage`.
- Reset the counter when the date changes.
- Display the counter as a read-only field in the Settings page.

## Alternatives Considered
- Server-side proxy: Overkill for a client-side only app.
- Session storage: Doesn't persist across page reloads/sessions efficiently for daily limits.
