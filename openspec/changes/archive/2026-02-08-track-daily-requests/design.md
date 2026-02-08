# Design: Request Tracking

## Components
- **NewsApiService**: Intercepts HTTP calls.
  - `localStorage` key: `newsApiRequestCount` (number)
  - `localStorage` key: `newsApiRequestDate` (string, ISO date YYYY-MM-DD)

## Logic
1.  **Initialization/Before Request**:
    -   Read `newsApiRequestDate`.
    -   Get current date (YYYY-MM-DD).
    -   If stored date != current date:
        -   Reset `newsApiRequestCount` to 0.
        -   Update `newsApiRequestDate` to current.
2.  **On Request**:
    -   Increment `newsApiRequestCount`.
    -   Save to `localStorage`.

## UI
- **Settings Page**:
    -   New section or field under "API Configuration" or "Preferences".
    -   Label: "Requests Today".
    -   Value: [Count] (Read-only).
