# Project Context

## Purpose
OpenNews is a web-base application that use as source of news the NewsAPI. The goal is to present a list of news items according to a set of categories that the user can select.

**Key Goals:**
- Provide a simple user-friendly interface to select news categories.
- Use the NewsAPI to fetch news items.
- Display the news items in a list. 

## Tech Stack

### Core Framework
- Angular 17    
- TypeScript
- Bootstrap

### UI & Styling
- Angular Material for UI.
- Use infinite scroll to load news items.
- Show a loading spinner while loading news items.
- Add profile page to store user preferences (api key, default language, default category, default country)

## Project Conventions

### Code Style
- Always Use Types
- Avoid use of any type 
- Use TypeScript for all code
- Use Angular for all UI code
- Use Angular Material for all UI components
- Use Bootstrap for all UI components
- **Folder structure:**
    - src/app/
        - components/
        - services/
        - models/
        - utils/
        - shared/
- **Naming conventions:**
    - kebab-case for file and folder names
    - PascalCase for class names and method names
    - camelCase for method parameters and local variables
    - PascalCase for constant names, both fields and local constants

### Architecture Patterns
- **Client-side only game logic** - No server state required

### Testing Strategy
-  E2E tests

### Git Workflow
- Main branch

## Domain Context
- By default show news from the US and the category is General
- By default show news from the last 24 hours
- By default load 20 news items ordered by date
- User can select multiple categories.
- User can select multiple countries.
- User can select multiple languages.
- User must specify a country in the settings page. If not specified, the default is all countries.
- User must specify a language in the settings page. If not specified, the default is all languages.
- User must specify a category in the settings page. If not specified, the default is all categories.


## Important Constraints
- **Browser-only** 
    - No backend required, all logic client-side
    - Localstorage to store user preferences
- **Responsive design** 
    - Must work on mobile and desktop

## External Dependencies
- **Authentication:**
    - https://newsapi.org/docs/authentication
- **NewsAPI:**
    - https://newsapi.org/docs
    - https://newsapi.org/docs/endpoints/everything
    - https://newsapi.org/docs/endpoints/top-headlines
    - https://newsapi.org/docs/endpoints/sources
- **Bootstrap:**
    - https://getbootstrap.com/docs/5.3/getting-started/introduction/
- **Angular Material:**
    - https://material.angular.io/guide/getting-started
