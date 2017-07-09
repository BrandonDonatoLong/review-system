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

// todo implement sorts on the server: sort by travel date and review date (not optional)
// todo implement a Most recent (review date descending trimmed to 3-5 reviews), (3-5) Most Positive, (3-5)most negative (all of these are optional.

router.get('/reviewsByTravelDate', function (req, res) {
    let sortedReviews = reviews.sortByTravelDate();
    res.json({reviews:sortedReviews});
});

router.get('/reviewsByContributionDate', function (req, res) {
    let sortedReviews = reviews.sortByContributionDate();
    res.json({reviews:sortedReviews})
});

router.get('/reviewsByTraveledWith', function(req, res){
    let filteredReviews = reviews.getDataByTraveledWith(req.query.traveledWith.toUpperCase());
    res.json({reviews:filteredReviews});
});

router.get('/getReviews', function(req, res){
    res.json({reviews:reviews.getData()});
});

router.get('/reviewAverage', function(req, res){
    let aspectReviewAverage = reviews.aspectReviewAverage();
    let general = {general:reviews.generalReviewAverage()};
    res.json({"aspects":aspectReviewAverage, "general":general});
});

router.get('/traveledWithAverage', function(req, res){
    let traveledWithAverage = reviews.travelWithReviewAverage();
    res.json({'result':traveledWithAverage});
});

router.get('/getReviewByTraveledWith', function(req, res){
    let filteredReviews = reviews.getDataByTraveledWith(res.query.traveledWith.toUpperCase());
    res.json(filteredReviews);
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('port ' + port + ' is open for business');
//Here create a REST Api to use.