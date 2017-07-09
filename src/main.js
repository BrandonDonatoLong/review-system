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

let reviews = new ReviewList('../data/reviews.json');

app.use(cors());

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router
// Path to sort the list of reviews by travel date.
router.get('/reviewsByTravelDate', function (req, res) {
    let sortedReviews = reviews.sortByTravelDate();
    res.json({reviews:sortedReviews});
});

// Path to sort the list of reviews by contribution/entry date.
router.get('/reviewsByContributionDate', function (req, res) {
    let sortedReviews = reviews.sortByContributionDate();
    res.json({reviews:sortedReviews})
});

// Path to filter the data set by who the reviewer traveled with.
// Query string requirements:
// Required: traveledWith: value with a string of who the person traveled with
// Optional: sortBy: A string value of EntryDate or TravelDate to specify how the list is sorted. If no value provided
//      it will skip the sorting calls.
router.get('/reviewsByTraveledWith', function(req, res){
    let filteredReviews = reviews.getDataByTraveledWith(req.query.traveledWith.toUpperCase());
    if (req.query.sortBy){
        if (req.query.sortBy === 'TravelDate'){
            filteredReviews = reviews.sortByTravelDate();
        }
        else {
            filteredReviews = reviews.sortByContributionDate();
        }
    }
    res.json({reviews:filteredReviews});
});
// Path to get all reviews/remove any filters.
// Query string requirements:
// Optional: sortBy: A string value of EntryDate or TravelDate to specify how the list is sorted. If no value provided
//      it will skip the sorting calls.
router.get('/getReviews', function(req, res){
    let allReviews = reviews.getData();
    if (req.query.sortBy){
        if (req.query.sortBy === 'TravelDate'){
            allReviews = reviews.sortByTravelDate();
        }
        else {
            allReviews = reviews.sortByContributionDate();
        }
    }
    res.json({reviews:allReviews});
});
// Path to get all the review scores with no filter provided.
router.get('/reviewAverage', function(req, res){
    let aspectReviewAverage = reviews.aspectReviewAverage();
    let general = {general:reviews.generalReviewAverage()};
    res.json({"aspects":aspectReviewAverage, "general":general});
});
// Path to get all the review scores when filters are provided. This function returns all the traveledWith types so no
// additional specification of which filter to apply before calculating averages.
router.get('/traveledWithAverage', function(req, res){
    let traveledWithAverage = reviews.travelWithReviewAverage();
    res.json({'result':traveledWithAverage});
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('port ' + port + ' is open for business');
//Here create a REST Api to use.