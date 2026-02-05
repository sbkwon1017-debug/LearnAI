# Application Blueprint

## Overview

A simple, framework-less web application that demonstrates modern web development practices. This application primarily displays Major Korean News, with supplementary weather information and a comment board in a compact sidebar.

## Implemented Features

### Major Korean News
*   Now the main focus of the application.
*   Fetches the 5 latest news headlines from the Yonhap News RSS feed.
*   Displays the headlines as a prominent list of links that open in a new tab.

### Weather Display (Sidebar)
*   Reduced in visual prominence and moved to a sidebar.
*   Fetches weather data from an API for a given city.
*   Displays the weather in a card format.
*   Includes a dark mode theme toggle.
*   Shows an analog and digital clock for the current time in Seoul.

### Comment Board (Sidebar)
*   A custom web component (`<comment-board>`).
*   Moved to the weather sidebar.
*   A form to allow users to submit their name and a comment.
*   A list that displays all submitted comments.

## Current State

The application is a functional single-page application with a primary focus on news and a complementary weather/comment sidebar.