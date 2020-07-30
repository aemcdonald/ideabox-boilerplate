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
* Adding images to README.md

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
![Mobile Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg)
![Mobile Layout with Dropdown](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg)
![Desktop Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)

Before creating our application, we planned out the page design using a wireframe.
<img width="1080" alt="screen_shot_2020-07-29_at_8 56 06_pm" src="https://user-images.githubusercontent.com/65988644/88877139-139b9980-d1e2-11ea-86d3-29259d2ed2c4.png">
<img width="1080" alt="screen_shot_2020-07-29_at_8 56 36_pm" src="https://user-images.githubusercontent.com/65988644/88877150-16968a00-d1e2-11ea-8d19-bc8e371b43a8.png">

Here is a view of our **desktop layout** upon deployment. The save button remains disabled until text is added to both input fields, and the cursor changes, in order to show the user that the option is not available when the text fields are empty. During this phase, **we applied feedback from a mentor** in order to make the layout more accurate according to the given comp. This details of this feedback can be seen in branch `# 17 kj-mentor-code-review`.
<img width="1024" alt="Screen Shot 2020-07-29 at 8 26 51 PM" src="https://user-images.githubusercontent.com/65988644/88875476-90c50f80-d1de-11ea-8850-d8d4b562631e.png">


Here is the view of the **mobile layout** upon deployment.
![Screen Shot 2020-07-29 at 9 29 47 PM](https://user-images.githubusercontent.com/65988644/88877413-a1778480-d1e2-11ea-8f75-47018191b048.png)

We also used an online application to visually plan out our **data model**. This came in handy whenever discussing and implementing changes.

<img width="1080" alt="data-model" src="https://user-images.githubusercontent.com/65988644/88877128-0e3e4f00-d1e2-11ea-9e91-2107767dda6b.png">

The user can type text into the title and body, and select the save button to make their idea into a visible card. When the page is **refreshed**, the data will still be stored, so the created cards will remain on the page.
![Screen Shot 2020-07-29 at 9 11 08 PM](https://user-images.githubusercontent.com/65988644/88876217-07164180-d1e0-11ea-82a6-363ee1f57d99.png)

![Screen Shot 2020-07-29 at 9 11 30 PM](https://user-images.githubusercontent.com/65988644/88876242-14cbc700-d1e0-11ea-83e8-94ef353f5e12.png)

Idea cards can be permanently deleted by selecting the **x** on each card.
![Screen Shot 2020-07-29 at 9 13 41 PM](https://user-images.githubusercontent.com/65988644/88876374-63796100-d1e0-11ea-9a95-2ba0c34f5afe.png)

![Screen Shot 2020-07-29 at 9 14 05 PM](https://user-images.githubusercontent.com/65988644/88876399-712ee680-d1e0-11ea-9a35-bfb7d2d389d5.png)

The star on each card allows the user to **Favorite** ideas of their choice by showing a hollow or filled star depending on each idea's **Favorite** status. When the page is refreshed, the data will still be stored, so the chosen idea cards will maintain their Favorite status.

![Screen Shot 2020-07-29 at 9 14 05 PM](https://user-images.githubusercontent.com/65988644/88876399-712ee680-d1e0-11ea-9a35-bfb7d2d389d5.png)

![Screen Shot 2020-07-29 at 9 15 26 PM](https://user-images.githubusercontent.com/65988644/88876495-a0455800-d1e0-11ea-8e35-71ed741aac08.png)

When the **Show Starred Ideas** button is selected, only the cards that the user has marked as a favorite will show. The user can select the **Show All Ideas** button to show all of their saved idea cards.
![Screen Shot 2020-07-29 at 9 16 16 PM](https://user-images.githubusercontent.com/65988644/88876556-bf43ea00-d1e0-11ea-92dd-4480cdfd4532.png)

![Screen Shot 2020-07-29 at 9 16 43 PM](https://user-images.githubusercontent.com/65988644/88876579-cec33300-d1e0-11ea-801c-92490374f3b8.png)

This can also be done in mobile view by selecting the menu symbol, which reveals the **Show Starred Ideas** or **Show All Ideas** button.

![Screen Shot 2020-07-29 at 9 17 57 PM](https://user-images.githubusercontent.com/65988644/88876647-fadeb400-d1e0-11ea-9559-1c57b0481433.png)

![Screen Shot 2020-07-29 at 9 18 25 PM](https://user-images.githubusercontent.com/65988644/88876670-0af69380-d1e1-11ea-9050-18b3b52bda92.png)

![Screen Shot 2020-07-29 at 9 18 42 PM](https://user-images.githubusercontent.com/65988644/88876696-16e25580-d1e1-11ea-9799-d2ea45e18329.png)

![Screen Shot 2020-07-29 at 9 19 02 PM](https://user-images.githubusercontent.com/65988644/88876725-219cea80-d1e1-11ea-9693-402f96fb2dff.png)

The **search bar** allows users to filter their idea cards based on certain characters or words.
![Screen Shot 2020-07-29 at 9 20 46 PM](https://user-images.githubusercontent.com/65988644/88876833-5f9a0e80-d1e1-11ea-9431-36a9f4489921.png)

![Screen Shot 2020-07-29 at 9 21 16 PM](https://user-images.githubusercontent.com/65988644/88876860-717bb180-d1e1-11ea-817a-a3c82750bdd9.png)


## View Each Group Member's Github Here:

@kathrynljackson

@taylorjohnson141

@aemcdonald

