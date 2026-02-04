# Application Blueprint

## Overview

A simple, framework-less web application that demonstrates modern web development practices. This application displays weather information and includes a comment board.

## Implemented Features

### Weather Display
*   Fetches weather data from an API for a given city.
*   Displays the weather in a card format.
*   Includes a dark mode theme toggle.
*   Shows an analog and digital clock for the current time in Seoul.

### Comment Board
*   A custom web component (`<comment-board>`).
*   A form to allow users to submit their name and a comment.
*   A list that displays all submitted comments.

## Current State

The application is a functional single-page application.

## Plan for Comment Board (Completed)

1.  **HTML:** Add a `<comment-board>` custom element to `index.html`.
2.  **JavaScript:** Implement the `CommentBoard` web component in `main.js`.
    *   It has a form to submit new comments (name and message).
    *   It displays a list of comments.
3.  **CSS:** Add styles for the comment board in `style.css` for a clean and modern look.