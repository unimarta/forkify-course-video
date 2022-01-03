# Forkify Project

Forkify project is a web application that allows us to search for recipes and display them on our user interface. It is based on [the Forkify API](https://forkify-api.herokuapp.com/v2) created by Jonas Schmedtmann.

This application was a final project of ["The Complete JavaScript Course 2022. From Zero to Expert."](https://www.udemy.com/course/the-complete-javascript-course/) - a Udemy Course also by **Jonas Schmedtmann**.

There is a **demo version** that can show you all the possibilities of this application without generating any API key or copying the code. [Click DEMO](https://forkify-v2.netlify.app/) to try out the application first and find your beloved recipe. I hope you will like it:) What else we can do here???? uploading???? bookmarking????

## This project uses:

- Vanilla JavaScript
- SASS
- NPM - NODE Package Manager
- Babel - converts ES6, ES7 and ES8 back to ES5
- Parcel
- Model View Controller Architecture (MVC).

  ![Flowchart] (forkify-flowchart-part-3.png)

## What did this project give to me?

- it summarized and grounded my knowledge and skills of Vanilla JavaScript, CSS and HTML;
- I had opportunity to work for the first time in my life with such a developer tools as NPM, Parcel, Babel and MVC;
- there were also a lot of refactoring and debugging code while creating next elements, views, or implementing more complicated functionalities that tought me that writing a clean code is maybe not the easiest way but it is obviously the best practice EVER even if it changes your code 180 degrees;
- I do really got familiar with terminal (and it's, not always friendly, blacky soul;), Git and gitHub. They all will be my friends from now on!

## Installation

```
git clone https://github.com/unimarta/forkify-course-video.git
npm install
npm run start
```

## Features:

1. **Search for recipies** - based on data from the Forkify API that allows us to choose from over 1 million different recipes from around the world. After choosing one of them we can see it's title, number of servings and detailed list of ingredients. For more information we can go directly to the original source of this recipe. We also see a list of results ordered in block of 10 recipes per page.
2. **Update the number of servings** - increase or decrease the number of servings by special functional buttons marked **+** or **-**. Each ingredient is automatically multiplied or divided by the number of servings we choose.
3. **Bookmark recipies** - choose your favorite recipies and mark them as bookmarked. They will be showed on a special bookmarks list (hidden in the main header panel) and uploaded every time on your site's reload. Anytime you can add or remove your bookmarks from/to the list.
4. **Create my own recipies and upload them to the API** - you can add your own recipies to this API and they will also be automatically bookmarked. Whenever you click the add recipe button on the menu bar, a popup with an editor list shows, and you can fill it with any suitable data (a title, an image and even 6 different ingredients) and submit. The recipe will be asynchronously added to the API and also to the bookmarks list cause your own recipes will be automatically marked as bookmarked.
5. **User can only see own recipes, not from others** - thanks to generating API key each developer who uploaded it's own recipe will be able to see it. Anyone can add as many recipes as he/she wants and they will be available while using this applicattion.

Thank you, **Jonas Schmedtmann**, for providing such a nice project to your course that tought me a lot and thanks to it I could practise my Vanilla JavaScript for over 8 hours long session - that for me was about 2 months of work;) But it was totally worth it!!!!
