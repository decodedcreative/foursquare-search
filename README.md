# foursquare-search
A Web app which integrates with the FourSquare API to return recommended venues based on location

## Installation Process
- Open a Terminal window, '**cd**' into this directory and run '**npm install**'. This will create a node_modules directory in the root project folder and download gulp and its supporting plugins that have been used during the development of this project.

- Once the previous command has stopped running, in the Terminal run '**gulp**'. This will run the Gulp task runner and its associated tasks as outlined in the gulpfile.js file found in the root project folder.

- One of these tasks - Browsersync - will cause a browser to open up on your machine displaying the project.

## Development Approach & Summary

The solution uses the Gulp task runner to provide the following functionality during development:

- CSS - minification by CSS Nano plugin
- SCSS - compilation by Gulp Ruby Sass plugin
- Additional browser prefixes are added to CSS properties by Gulp Autoprefixer
- Built-in Web Server by BrowserSync
- Source maps for both CSS and JavaScript by Gulp Sourcemaps
- Browserify - used to bundle JavaScript files together 
- Babel - Used to transpile ES6 syntax JavaScript back into ES5 as native browser support for ES6 is still not very good.


ES6 JavaScript was chosen to provide the required scripting to retrieve the data from Foursquare's API and provide additional HTML markup based on the result of the user's search. ES6 was chosen ahead of Angular JS or React as the project was quite small. Using an MV* framework for a small project like this would be excessive and add unnecessary page weight to the solution. ES6 also allows for the creation of modules so that JavaScript functionality can be split into different files and offer a true separation of concerns.

The solution consists of 3 main JavaScript files:

**venue-search.js** - This file is loaded in by the project's HTML file - index.html. It is the central JavaScript file for the application, handles the user's search query and error handling. The configuration object for communication with FourSquare's API is defined here. This file also imports 2 further JavaScript files which provide further functionality.

**Foursquare.js** - This file handles any communication between the Foursquare API and the application. For the functionality required by the brief, this file only consists of a single method - getVenuesNear. However should this project be extended then any further calls to the API would be made from this file through further methods. GetVenuesNear returns an array of venue data. The decision was made to return the results as an array rather than HTML as it makes the application more flexible for future development. 

**results-list.js** - This file handles how the results received in foursquare.js are rendered to the screen. In this case they are returned as an Unordered list. If this project was extended, similar modules to results-list.js could be created to display the same data in different ways, perhaps for use on different pages of the site.



