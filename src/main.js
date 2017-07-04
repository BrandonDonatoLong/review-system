/**
 * Created by Brandon on 7/3/2017.
 */
// BASE SETUP
// =============================================================================

const express = require('express');        // call express
const cors = require('cors');
let app = express();                 // define our app using express
//var bodyParser = require('body-parser');

let ReviewList = require('./reviewList')

let reviews = new ReviewList.reviewList('../data/reviews.json');

// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    //route to test that the express server is running.
    res.json({"result":true});
});

router.get('/getReviews', function(req, res){
    res.json(reviews.getData());
});

router.get('/generalReviewAverage', function (req, res) {
    let weightedAverage = reviews.generalReviewAverage();
    res.json({"result":weightedAverage});
});

router.get('/aspectReviewAverage', function(req, res){
    let aspectReviewAverage = reviews.aspectReviewAverage();
    res.json({"result":aspectReviewAverage});
});

router.get('/traveledWithAverage', function(req, res){
    let traveledWithAverage = reviews.travelWithReviewAverage();
    res.json({'result':traveledWithAverage});
});

router.get('/getAverageByTraveledWith', function(req, res){

    let filteredReviews = reviews.getDataByTraveledWith(res.query.traveledWith.toUpperCase());
    console.log("total number of filtered reviews", filteredReviews.length);
    res.json(filteredReviews);
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
//Here create a REST Api to use.