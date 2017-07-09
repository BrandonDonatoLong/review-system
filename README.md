# review-system

This is a project for a review system with a backend of node/express and a frontend using react.

# Companion Project
This project is designed to work with a companion project that is a frontend webapp. 
The frontend displays the data that is served up by this project using React. As with most backends, the frontend is not required but makes for a useful example of how to use the data.

The frontend project can be found here: [rating system ui](https://github.com/BrandonDonatoLong/rating-system-ui)

# Tech Stack
The overall Javascript is ES6 (ECMA2015) but without babel. So only the ES6 implementation that exists on Node 6.10.2. For information on what features of ES6 exist natively on node.js see the table [here](http://node.green/). 

I am also using Express to handle all the URL routing and get requests.

This project was developed and tested using JetBrains Webstorm IDE and Node version 6.10.2 and npm version 3.10.10

# Instructions to install

1. Clone this repo
2. Run `npm install` from the git root
3. Run `npm run start` from the git root to start up the webserver
4. The npm script should open up a browser and go to localhost:3000 this will point to The Hoxton Hotel page. If you can open up a browser and go to localhost:3000 to load the page.
