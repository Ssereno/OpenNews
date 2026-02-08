# Tasks

1.  **Update NewsApiService**
    -   [x] Add logic to check and reset counter based on date.
    -   [x] Increment counter on each `getArticles` call.
    -   [x] Expose counter via a method or property.

2.  **Update SettingsComponent**
    -   [x] Add a read-only field to display the request count.
    -   [x] Retrieve the count from `NewsApiService` or `localStorage` on init.

3.  **Verification**
    -   [x] Verify counter increments on search.
    -   [x] Verify counter resets on new day (simulate by changing date or local storage).
    -   [x] Verify UI displays correct count.
