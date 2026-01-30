# Project Blueprint

## Overview

A web application that displays weather information for various cities around the world.

## Style, Design, and Features

### Initial Version
*   **Layout:** A simple layout with a header and a main content area.
*   **Styling:** Clean and modern design with a focus on readability.
*   **Components:**
    *   **Weather Card:** A reusable web component to display weather information for a single city.
*   **Functionality:**
    *   Fetches weather data from the Open-Meteo API.
    *   Displays weather for a default set of cities.
    *   Allows users to search for a city to get its weather.

## Current Plan

### Goal: Create a world weather information dashboard.

1.  **`blueprint.md`:** Create this file to document the project.
2.  **`index.html`:**
    *   Update the title to "World Weather".
    *   Add a header with the title.
    *   Add a search input and button.
    *   Add a container for the weather cards.
3.  **`style.css`:**
    *   Add styles for the header, search bar, and weather cards.
    *   Use CSS variables for colors.
    *   Make the layout responsive.
4.  **`main.js`:**
    *   Define a `WeatherCard` web component.
    *   Fetch weather data from the Open-Meteo API for a few cities.
    *   Render the weather cards.
    *   Implement the search functionality to fetch and display weather for the searched city.
