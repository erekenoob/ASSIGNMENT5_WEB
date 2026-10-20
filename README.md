# ASSIGNMENT5_WEB
# Assignment 5: JavaScript Basics (DOM & Events)

**Student:** Yertore Omirtayev
**Group:** SE-2530
**Live Demo:** (https://erekenoob.github.io/ASSIGNMENT5_WEB/)

## About the Project
This repository contains my solution for Assignment #5. The main goal of this work was to practice basic JavaScript, learn how to manipulate HTML/CSS through the DOM, work with browser events, and build a simple To-Do list app.

All parts of the assignment are separated into 4 pages and connected with a navigation bar at the top.

## Tasks Overview

### Part 1: Introduction to JavaScript `index.html`
* **Task 0 (First Script):** Connected an external `script.js` file, printed my name and group to the browser console using `console.log()`, and added an `alert()` message.
* **Task 1 (Variables & Operators):** Created variables with different data types (`string`, `number`, `boolean`), tested basic math operations (`+`, `-`, `*`, `/`), and concatenated strings in the console.

### Part 2: DOM Manipulation `dom.html`
* **Task 2 (Changing Content):** Made a button that changes the text of a paragraph when clicked using `textContent`.
* **Task 3 (Changing Styles):** Added two buttons that dynamically change the background color and font size of a `<div>` block using `.style`.
* **Task 4 (Creating & Removing Elements):** Implemented "Add Item" and "Remove Item" buttons to add new `<li>` elements to a list (`createElement`, `appendChild`) and delete the last item (`remove()`).

### Part 3: Events `events.html`
* **Task 5 (Mouse Events):** Created a colored box that changes its background color when the mouse hovers over it (`mouseover`) and returns to the original color when the mouse leaves (`mouseout`).
* **Task 6 (Keyboard Events):** Added a text input that displays what the user is typing in real time using the `keyup` event.
* **Task 7 (Calculator):** Built a basic calculator with two number inputs and four buttons (`+`, `-`, `*`, `/`) that also checks for division by zero.

### Part 4: Mini Project — To-Do List `todo.html` & `todo.js`
* **Task 8 (To-Do App):** Created an interactive task manager where you can add a task with a title and description. Tasks are stored temporarily in a JavaScript array (`tasks = []`). You can click on a task title to cross it out (mark as completed) or click the `✕` button to delete it.

## How to Run
1. Click the **Live Demo** link above to open the published website.
2. Or clone this repository and open `index.html` in your browser.
3. To check **Task 0** and **Task 1**, open the browser Developer Tools (**F12** -> **Console** tab).
