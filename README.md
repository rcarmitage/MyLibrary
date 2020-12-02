# MyLibrary

### A full-stack app for searching the Google Books API and adding books to a shelf to be viewed later

Please view the live app on Netlify: https://mylibrary-google-books-api.netlify.app/

This is a personal project I have used to consolidate my knowledge of **React** and gain futher understanding of displaying data from a third-party API, implementing UI design choices from scratch, and deploying an app to a live platform.

## Brief

### MVP:

A user should be able to…

- Search the Google Books API using terms for title or author
- View a book in more detail and click through to the Google Books entry
- View a collection of up to 10 saved books on a shelf, able to add and delete

Technologies used:

- **React.js**
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Netlify**
- **Heroku**

## Running the App After Pulling from GitHub

### Installation

To interact with the app on your local machine, clone the repo and run the following commands.

_In server directory:_

`npm install`

`npm run server`

The server will run and connect to the MongoDB Atlas database.

_In client directory:_

`npm install`

`npm start`

The app will run on port 3000.

## App Details

The following functionality is currently in the process of being implemented and is mostly complete - see the status notes and My Learning (below) for more details. Further information and screenshots will be added once the app is fully functional:

- The user is able to use the Search component to access the Google Books API, with the search terms displaying up to 10 matches for _all fields_, _title_ or _author_. The result for each item returns the ID, title, author(s), date published, description and the URL to retrieve the cover image (as smallThumbnail) from the retrieved JSON object. The search result for each item displays the title, author(s)and date published.

- The user is able to select one of these books by clicking the View Details button, which stores the above search data in state as deskBook. The Desk component renders the title, author(s), date published, description and cover image from deskBook. If the book is not already on the Shelf (i.e. an item in the shelfBooks array) an "Add to shelf" button is displayed. This calls the addBook() function which sends this data as an object to the shelfBooks array, stored in a MongoDB Atlas database. If the book is already on the Shelf, this button instead displays "Remove from shelf" and calls the deleteBook() function which removes it from the database. Clicking the "View this title on Google Books" button opens a new window and redirects to the Google Books entry for this ID.

- On the Shelf component the user is able to view the titles stored in the shelfBooks array. The shelfBooks array can contain up to 10 items, which are displayed in two rows of 5 each showing the cover image and title. The user can click on the cover image to set as deskBook, which is then rendered on the Desk. The user can click the "Remove" button to delete the title from the shelfBooks array, and will be able to click the "Clear shelf" button (_WIP_) to delete all titles.

Status of the app and plans for further development as of 2nd December 2020:

- The app is deployed and can be viewed and interacted with [here](https://mylibrary-google-books-api.netlify.app/) - the front-end is hosted on Netlify, the back-end on Heroku.
- The Search component functionality is complete.
  - I will make minor tweaks to the UI.
- The Desk component is mostly complete.
  - To notify the user there is a limit of 10 books on the Shelf, I will create an alert and fade out the "Add to shelf" button when shelfBooks.length = 10.
  - I attempted to access a larger cover image to display on the Desk since the smallThumbnail image is low resolution, however not all Google Books API entries have a cover image larger than the smallThumbnail, and I'm considering leaving this as smallThumbnail to minimise potential issues with presentation.
  - I will make minor tweaks to the UI.
- The Shelf component is mostly complete. The shelfBooks titles render as expected.
  - I will create a clearShelf() function and call it from a button which I will add to the top-right corner of the Shelf.
  - I will make minor tweaks to the UI.
- UI: Having completed most of the positioning and colours of the UI, I will add a loading icon and some CSS transitions to make the user experience more visually pleasing. I will also refactor App.css to remove any repeated code.
- I will add unit and integration tests.
- I will work further on responsive design for smaller screens.
- Extension task: I plan to add a toggle for information boxes which will display as the user interacts with the various components, explaining the behind-the-scenes functionality.

## My learning

I did not do extensive planning before beginning this project for two reasons:

1. My focus was to create a project to access a third-party API and render the data in a visually pleasing and intuitive way for the user. I did not have a clear idea of what it would take to achieve this, and decided to access the data first and built the functionality around that.
2. I hadn't thought about the need for a back-end, only planning to use **React** with a view to settling on other technologies as necessary once I had a simple version of the front-end.

Therefore I began without a detailed plan of what I would be required to learn and I expected to zone in on what would be useful as I worked out what I needed.

- I began with create-react-app to set up the **React** front-end (with hooks and the Context API), using basic colours and layout to set out how I wanted the data to be displayed.
- Once I had settled on how I wanted the books on the Shelf to render, I realised it would be beneficial to have a Desk component to view a book in more detail, and from there be able to add to and remove from the shelf and click away to the Google Books entry for further information.
- Rather than working first on Shelf, then Desk, then Search - as I expected would be the most effective order - I found that completing the Search first would mean I would work through data access and presentation issues as I went, rather than using dummy data which could end up being innacurate. Once I had completed Search, the Desk and Shelf components became much more intuitive to develop.
- For the back-end, I initially thought that using **json-server's** "fake" API (with a db.json storage file stored with the front-end files) would be acceptable, especially since the shelfBooks array would have a maximum of 10 items. Encountering some issues with my first attempt at the addBook() function, I decided to implement a more robust back-end which could be deployed on a platform (**Heroku**) in a way that I understood. I decided on using **Node.js** and **Express.js** for the back-end, connecting to a **MongoDB Atlas** database.
- Once I had connected the front-end and back-end, I finished the basic rendering of the data on the Shelf, Desk and Search to see how the app looked when integrated.
- From here, I paused my work on the basic functionality and decided to focus on the UI so the app - when deployed - would at least look and feel like the intended design. This would allow me to have a work-in-progress version available for people to see and use while I would continue to work on the functionality.
- In working through the errors produced for some search terms, I found that some of the returned json objects did not contain the fields I was requesting. The errors would be produced when processing the data to render in the Search results or on the Desk or Shelf. For example, when adding commas between author names, an error would be produced when attempting to map through the non-existant array of _authors_ if there was no _authors_ field.
  - I added checks within the searchBooks function in LibraryState (after experimenting with doing this in the searchItem and Desk components) to add a key:value pair for each missing field.
  - The key:value pair contains text noting that the specified information is not available; this is caught in the above checks and prevents errors. This then becomes part of the state for the searchResults array and is saved to the shelfBooks array when adding to the Shelf.
  - For a missing cover image (smallThumbnail, which would normally be a URL), the Shelf and Desk components check for the "No cover image available" string and render a NO COVER AVAILABLE image from src/assets when true.
- Going through this convoluted process of beginning with a basic app idea and a single initial component on the front-end (Shelf), only to switch to implementing different components first (Search, then Desk), then implementing a robust back-end when considering future usability, has given me a deeper understanding of the clarity of thought needed at the beginning of a project. Additionally, I have become more adept at switching my focus when I've realised where my efforts would be more useful, and will take this into future projects.
- I took some time understanding how to deploy the app so it can be used by others. After some experimentation I deployed the front-end/client-side on **Netlify** and the back-end/server-side on **Heroku**, and updated the API URL in LibraryState.js so the front-end now accesses the live hosted back-end, which links to the live hosted database. The data (books added to the Shelf) now persists and can be manipulated.
- The core functionality is complete. From here there are some additions to be made to enhance the user experience, and I have yet to write tests (which I will use to further understand that process, something I would like to become very proficient at), however I am very pleased with my progress on this project. Once the remaining core functionality and last few tweaks to the UI are completed, I will step away from this project and not implement any of the further ideas I'd had early on - such as using a second API to provide "fiction" and "non-fiction" data for each item in shelfBooks to then be sorted onto "fiction" and "non-fiction" shelves. There are many other languages, technologies and concepts that I would like to spend my time learning, and I could easily spend a significant amount of time making only incremental gains on this project.
