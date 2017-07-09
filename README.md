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

# Unit Testing
There are some basic unit testing to test the calculations class and some functionality of the rating system.
To run these tests, you can Run `npm run test` to run it using mocha.
##Additional install 
Mocha must be installed however it is not in the production dependencies. To install the version of mocha I tested with run `npm install --dev` to install the dev dependencies.

# REST API doc

## Get reviewsByTravelDate

Path: /api/reviewsByTravelDate

Query string: None

Result:
`{
      "reviews": [
          {
              "parents": [
                  {
                      "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                  }
              ],
              "id": "a8f5843e-2229-42b6-ae27-32a49ef539ca",
              "traveledWith": "FAMILY",
              "entryDate": 1472717951673,
              "travelDate": 1470009600000,
              "ratings": {
                  "general": {
                      "general": 8
                  },
                  "aspects": {
                      "location": 9,
                      "service": 0,
                      "priceQuality": 8,
                      "food": 0,
                      "room": 0,
                      "childFriendly": 9,
                      "interior": 0,
                      "size": 0,
                      "activities": 0,
                      "restaurants": 0,
                      "sanitaryState": 0,
                      "accessibility": 0,
                      "nightlife": 0,
                      "culture": 0,
                      "surrounding": 0,
                      "atmosphere": 0,
                      "noviceSkiArea": 0,
                      "advancedSkiArea": 0,
                      "apresSki": 0,
                      "beach": 0,
                      "entertainment": 0,
                      "environmental": 0,
                      "pool": 6,
                      "terrace": 0
                  }
              },
              "titles": {
                  "en": "Accommodation fabulous, loads space, few cars"
              },
              "texts": {
                  "en": "Pool a bit disappointing for my 10 and 12 year olds. Slides slow and land in very shallow water\nI think for younger the pools would be fabulous"
              },
              "user": "rachel abbott",
              "locale": "en"
          },
          ...
          ]
 }`
## Get reviewsByContributionDate

Path: /api/reviewsByContributionDate

Query string: None

Result:
`{
     "reviews": [
         {
             "parents": [
                 {
                     "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                 }
             ],
             "id": "a8f5843e-2229-42b6-ae27-32a49ef539ca",
             "traveledWith": "FAMILY",
             "entryDate": 1472717951673,
             "travelDate": 1470009600000,
             "ratings": {
                 "general": {
                     "general": 8
                 },
                 "aspects": {
                     "location": 9,
                     "service": 0,
                     "priceQuality": 8,
                     "food": 0,
                     "room": 0,
                     "childFriendly": 9,
                     "interior": 0,
                     "size": 0,
                     "activities": 0,
                     "restaurants": 0,
                     "sanitaryState": 0,
                     "accessibility": 0,
                     "nightlife": 0,
                     "culture": 0,
                     "surrounding": 0,
                     "atmosphere": 0,
                     "noviceSkiArea": 0,
                     "advancedSkiArea": 0,
                     "apresSki": 0,
                     "beach": 0,
                     "entertainment": 0,
                     "environmental": 0,
                     "pool": 6,
                     "terrace": 0
                 }
             },
             "titles": {
                 "en": "Accommodation fabulous, loads space, few cars"
             },
             "texts": {
                 "en": "Pool a bit disappointing for my 10 and 12 year olds. Slides slow and land in very shallow water\nI think for younger the pools would be fabulous"
             },
             "user": "rachel abbott",
             "locale": "en"
         },
         ...
         ]
    }`
    
## Get reviewsByTraveledWith

Path: /api/reviewsByTraveledWith

Query string: 
    Required: traveledWith=<TraveledWithValue>
    Optional: sortBy=<SortByValue>
    
Sort By Value should be either "EntryDate" or "TravelDate" no other sorts supported at this time.

Result:
`{
     "reviews": [
         {
             "parents": [
                 {
                     "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                 }
             ],
             "id": "a8f5843e-2229-42b6-ae27-32a49ef539ca",
             "traveledWith": "FAMILY",
             "entryDate": 1472717951673,
             "travelDate": 1470009600000,
             "ratings": {
                 "general": {
                     "general": 8
                 },
                 "aspects": {
                     "location": 9,
                     "service": 0,
                     "priceQuality": 8,
                     "food": 0,
                     "room": 0,
                     "childFriendly": 9,
                     "interior": 0,
                     "size": 0,
                     "activities": 0,
                     "restaurants": 0,
                     "sanitaryState": 0,
                     "accessibility": 0,
                     "nightlife": 0,
                     "culture": 0,
                     "surrounding": 0,
                     "atmosphere": 0,
                     "noviceSkiArea": 0,
                     "advancedSkiArea": 0,
                     "apresSki": 0,
                     "beach": 0,
                     "entertainment": 0,
                     "environmental": 0,
                     "pool": 6,
                     "terrace": 0
                 }
             },
             "titles": {
                 "en": "Accommodation fabulous, loads space, few cars"
             },
             "texts": {
                 "en": "Pool a bit disappointing for my 10 and 12 year olds. Slides slow and land in very shallow water\nI think for younger the pools would be fabulous"
             },
             "user": "rachel abbott",
             "locale": "en"
         },
         ...
         ]
    }`
    
## Get getReviews

Path: /api/getReviews

Query string: 
    Optional: sortBy=<SortByValue>
    
Sort By Value should be either "EntryDate" or "TravelDate" no other sorts supported at this time.

Result:
`{
     "reviews": [
         {
             "parents": [
                 {
                     "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                 }
             ],
             "id": "a8f5843e-2229-42b6-ae27-32a49ef539ca",
             "traveledWith": "FAMILY",
             "entryDate": 1472717951673,
             "travelDate": 1470009600000,
             "ratings": {
                 "general": {
                     "general": 8
                 },
                 "aspects": {
                     "location": 9,
                     "service": 0,
                     "priceQuality": 8,
                     "food": 0,
                     "room": 0,
                     "childFriendly": 9,
                     "interior": 0,
                     "size": 0,
                     "activities": 0,
                     "restaurants": 0,
                     "sanitaryState": 0,
                     "accessibility": 0,
                     "nightlife": 0,
                     "culture": 0,
                     "surrounding": 0,
                     "atmosphere": 0,
                     "noviceSkiArea": 0,
                     "advancedSkiArea": 0,
                     "apresSki": 0,
                     "beach": 0,
                     "entertainment": 0,
                     "environmental": 0,
                     "pool": 6,
                     "terrace": 0
                 }
             },
             "titles": {
                 "en": "Accommodation fabulous, loads space, few cars"
             },
             "texts": {
                 "en": "Pool a bit disappointing for my 10 and 12 year olds. Slides slow and land in very shallow water\nI think for younger the pools would be fabulous"
             },
             "user": "rachel abbott",
             "locale": "en"
         },
         ...
         ]
    }`
    
## Get reviewAverage

Path: /api/reviewAverage

Query string: None

Result:
```{
     "aspects": {
         "location": "7.9",
         "service": "0.0",
         "priceQuality": "7.8",
         "food": "0.0",
         "room": "0.0",
         "childFriendly": "7.7",
         "interior": "0.0",
         "size": "0.0",
         "activities": "0.0",
         "restaurants": "5.6",
         "sanitaryState": "3.1",
         "accessibility": "0.0",
         "nightlife": "0.0",
         "culture": "0.0",
         "surrounding": "0.0",
         "atmosphere": "0.0",
         "noviceSkiArea": "0.0",
         "advancedSkiArea": "0.0",
         "apresSki": "0.0",
         "beach": "0.0",
         "entertainment": "0.0",
         "environmental": "0.0",
         "pool": "1.2",
         "terrace": "0.0"
     },
     "general": {
         "general": "8.5"
     }
 }```

## Get traveledWithAverage

Path: /api/traveledWithAverage

Query string: None

Result:
```{
     "result": {
         "FAMILY": {
             "aspects": {
                 "location": "7.8",
                 "service": "0.0",
                 "priceQuality": "7.7",
                 "food": "0.0",
                 "room": "0.0",
                 "childFriendly": "8.6",
                 "interior": "0.0",
                 "size": "0.0",
                 "activities": "0.0",
                 "restaurants": "7.5",
                 "sanitaryState": "4.2",
                 "accessibility": "0.0",
                 "nightlife": "0.0",
                 "culture": "0.0",
                 "surrounding": "0.0",
                 "atmosphere": "0.0",
                 "noviceSkiArea": "0.0",
                 "advancedSkiArea": "0.0",
                 "apresSki": "0.0",
                 "beach": "0.0",
                 "entertainment": "0.0",
                 "environmental": "0.0",
                 "pool": "1.4",
                 "terrace": "0.0"
             },
             "general": {
                 "general": "8.3"
             }
         },
         "FRIENDS": {
             "aspects": {
                 "location": "8.7",
                 "service": "0.0",
                 "priceQuality": "7.7",
                 "food": "0.0",
                 "room": "0.0",
                 "childFriendly": "7.9",
                 "interior": "0.0",
                 "size": "0.0",
                 "activities": "0.0",
                 "restaurants": "2.2",
                 "sanitaryState": "0.82",
                 "accessibility": "0.0",
                 "nightlife": "0.0",
                 "culture": "0.0",
                 "surrounding": "0.0",
                 "atmosphere": "0.0",
                 "noviceSkiArea": "0.0",
                 "advancedSkiArea": "0.0",
                 "apresSki": "0.0",
                 "beach": "0.0",
                 "entertainment": "0.0",
                 "environmental": "0.0",
                 "pool": "2.5",
                 "terrace": "0.0"
             },
             "general": {
                 "general": "8.9"
             }
         },
         "OTHER": {
             "aspects": {
                 "location": "7.9",
                 "service": "0.0",
                 "priceQuality": "8.2",
                 "food": "0.0",
                 "room": "0.0",
                 "childFriendly": "5.8",
                 "interior": "0.0",
                 "size": "0.0",
                 "activities": "0.0",
                 "restaurants": "1.8",
                 "sanitaryState": "0.0",
                 "accessibility": "0.0",
                 "nightlife": "0.0",
                 "culture": "0.0",
                 "surrounding": "0.0",
                 "atmosphere": "0.0",
                 "noviceSkiArea": "0.0",
                 "advancedSkiArea": "0.0",
                 "apresSki": "0.0",
                 "beach": "0.0",
                 "entertainment": "0.0",
                 "environmental": "0.0",
                 "pool": "0.0",
                 "terrace": "0.0"
             },
             "general": {
                 "general": "8.7"
             }
         },
         "COUPLE": {
             "aspects": {
                 "location": "8.3",
                 "service": "0.0",
                 "priceQuality": "8.0",
                 "food": "0.0",
                 "room": "0.0",
                 "childFriendly": "7.2",
                 "interior": "0.0",
                 "size": "0.0",
                 "activities": "0.0",
                 "restaurants": "5.2",
                 "sanitaryState": "5.1",
                 "accessibility": "0.0",
                 "nightlife": "0.0",
                 "culture": "0.0",
                 "surrounding": "0.0",
                 "atmosphere": "0.0",
                 "noviceSkiArea": "0.0",
                 "advancedSkiArea": "0.0",
                 "apresSki": "0.0",
                 "beach": "0.0",
                 "entertainment": "0.0",
                 "environmental": "0.0",
                 "pool": "2.7",
                 "terrace": "0.0"
             },
             "general": {
                 "general": "8.4"
             }
         },
         "SINGLE": {
             "aspects": {
                 "location": "5.0",
                 "service": "0.0",
                 "priceQuality": "6.0",
                 "food": "0.0",
                 "room": "0.0",
                 "childFriendly": "8.0",
                 "interior": "0.0",
                 "size": "0.0",
                 "activities": "0.0",
                 "restaurants": "8.0",
                 "sanitaryState": "10",
                 "accessibility": "0.0",
                 "nightlife": "0.0",
                 "culture": "0.0",
                 "surrounding": "0.0",
                 "atmosphere": "0.0",
                 "noviceSkiArea": "0.0",
                 "advancedSkiArea": "0.0",
                 "apresSki": "0.0",
                 "beach": "0.0",
                 "entertainment": "0.0",
                 "environmental": "0.0",
                 "pool": "0.0",
                 "terrace": "0.0"
             },
             "general": {
                 "general": "8.0"
             }
         }
     }
 }```

