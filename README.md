# Burger's Digest

[![Maintained Badge](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/emijoha)

## Description

A 'Bob's Burgers' inspired app that lets users input the names of burgers they'd like to eat, or click for a random burger from the show. Burger names are then displayed on a 'Burgers Served' or 'Burgers Digested' chalkboard-style menu depending on whether they've been 'eaten/digested' by the user. Burgers can also be deleted.   

### Technologies Used

This is a Node application that follows the MVC design stucture and uses a self-created ORM file.
The following NPM packages were used:

* express
* express-handlebars
* mysql

MySQL Workbench was used to create the database, and the data for the 'bobs_burgers' table (containing 340 burgers names from season 1 to 10 of the show) was copy-pasted and typed out by me after researching and gathering all that infomation.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Installation

Installation is not required. Simply visit the deployed site to see which burgers are being served and digested, to add your own input, or to help clean up the menu boards with use of the 'Throw Away' or 'Flush' delete buttons. Visit at: https://sleepy-bayou-54054.herokuapp.com/

If you'd like to have the app locally, then:

1. Clone this repo and open it locally
2. Open terminal in the main directory
3. Run `npm install` to install all dependencies
4. Use the schema and seeds files in the 'db' folder to create the 'burgers_db' database and 'burgers' and 'bobs_burgers' tables in MySQL Workbench.
5. Run `node server.js` to start the server on the app
6. In the console, click on the local host url link to open the app in the browser.


## Usage

Discover all your favorite 'Bob's Burgers' puns all over again, or add your own show-worthy burger names to the chalkboard menus! 

1. Visit https://sleepy-bayou-54054.herokuapp.com/ 
2. If you have a Bob-worthy burger name, type the name of your burger in the 'Create a burger...' input field. 
3. Click the 'ADD BURGER' button to submit your burger, and it will be displayed  as the last item on the 'Burgers Served' chalkboard menu. 
4. Can't think of a burger? Click 'RANDOM BOB'S BURGER' to serve up a random burger from seasons 1 to 10. 
5. Created or randomized burgers are displayed in the 'Burger's Served' chalkboard menu, with options to 'Digest' or 'Throw Away'. 
6. Click the 'Digest' button 'eat' the burger and see it displayed on the 'Burgers Digested' chalkboard. 
7. Click 'Throw Away' to delete that burger. 
8. On the 'Burger's Digested' chalkboard, you can click 'Order Again' to serve that burger again, or 'Flush' to delete. 

## License

MIT License
Copyright 2020 Emilia Josefina Hartline.

## Questions

Feel free to contact us with any questions regarding this project!

![Image of Emilia Josefina Hartline](https://avatars0.githubusercontent.com/u/60240293?v=4)

[![Followers Badge](https://img.shields.io/badge/Followers-2-yellow)](https://github.com/emijoha)

Email Emilia Josefina Hartline at ejhartline@gmail.com 
