# Ideabox Group Project

### Group Project by Kathryn Jackson, Taylor Johnson, and Ashley McDonald

Turing's 2006 FE week 5 Group Project

Project Manager: Casey

## Links  

Github Pages: https://aemcdonald.github.io/ideabox-boilerplate/
Our Project Repository: https://github.com/aemcdonald/ideabox-boilerplate
Original Project Repository: https://github.com/turingschool-examples/ideabox-boilerplate
DTR Document: https://docs.google.com/document/d/1miHx5OQM_BdMtzkC8PTN8bepBLC5apaYLPOKUaRwWNc/edit?usp=sharing

## Project Overview

This project was designed to show our ability to create a fluid and responsive interface that can be used to create, store, filter, and delete user input. We used CSS and HTML to build on the given code in order to create an application that is visually identical to a given static comp. Then, we created functions using JavaScript that allow the user to create and store their ideas on the application. The user can also search for, favorite, and delete their ideas, which are each stored on a separate virtual card.

Here are the learning goals for this project:

* Continue to improve on building responsive client-side applications with good user feedback
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP

## Technologies Used

**Application Building:** HTML, JavaScript, CSS
**Communication:** Zoom, Screen, Google Meets, Slack
**Storage and Deployment:** Github
**Documentation:** Google Docs, Invision App

## Challenges

* Learning and using the Git/GitHub workflow properly
* Refactoring dry code
* Matching the given static comp
* Learning to implement data storage

## Wins

* Using differences in coding abilities as teaching and learning opportunities
* Open communication
* Planning and scheduling
* Recognizing when a mental break is needed
* Better understanding of JavaScript
* Better understanding of HTML
* Implementing localStorage knowledge concepts

## Screenshots

We were provided with a comp to mimic, as well as specific colors and some code to get us started.
(insert desktop and mobile view image. I have no idea if the images below will work so let's all find out together i guess)
![Mobile Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg)
![Mobile Layout with Dropdown](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg)
![Desktop Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)

Before creating our application, we planned out the page design using a wireframe.
(insert screenshot(s) of wireframe)

Here is a view of our **desktop layout** upon deployment. The save button remains disabled until text is added to both input fields, and the cursor changes, in order to show the user that the option is not available when the text fields are empty. During this phase, **we applied feedback from a mentor** in order to make the layout more accurate according to the given comp. This details of this feedback can be seen in branch `# 17 kj-mentor-code-review`.
(insert screenshot of desktop view-with disabled save button-no text input)

Here is the view of the **mobile layout** upon deployment.
(insert screenshot of mobile view)

We also used an online application to visually plan out our **data model**. This came in handy whenever discussing and implementing changes.
(insert screenshot(s) of Taylor's data model drawing)

The user can type text into the title and body, and select the save button to make their idea into a visible card. When the page is **refreshed**, the data will still be stored, so the created cards will remain on the page.
(insert screenshot of text in input boxes)
(insert that card after saving)

Idea cards can be permanently deleted by selecting the **x** on each card.
(insert screenshot of created cards in desktop view)
(insert screenshot of same cards, but with one card deleted)

The star on each card allows the user to **Favorite** ideas of their choice by showing a hollow or filled star depending on each idea's **Favorite** status. When the page is refreshed, the data will still be stored, so the chosen idea cards will maintain their Favorite status.
(insert screenshot of created cards in desktop view)
(insert screenshot of same cards, but with one card marked as a favorite)

When the **Show Starred Ideas** button is selected, only the cards that the user has marked as a favorite will show. The user can select the **Show All Ideas** button to show all of their saved idea cards.
(insert screenshot of created cards in desktop view with a few cards favorited)
(insert screenshot of created cards in desktop view with Show Starred Ideas button selected)

This can also be done in mobile view by selecting the menu symbol, which reveals the **Show Starred Ideas** or **Show All Ideas** button.
(insert screenshot of created cards in mobile view with a few cards favorited)
(insert screenshot of created cards in mobile view with Show Starred Ideas button selected)

The **search bar** allows users to filter their idea cards based on certain characters or words.
(insert screenshot of created cards in desktop view)
(insert screenshot of created cards in the desktop view, words typed in search bar so only some cards or maybe even just one is showing)

## View Each Group Member's Github Here:
@kathrynljackson
@taylorjohnson141
@aemcdonald
