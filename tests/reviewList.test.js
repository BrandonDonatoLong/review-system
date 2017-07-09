let mocha = require('mocha');
let assert = require('assert');

describe('test the functions of the reviewList class', function() {
    it('setup the reviewList', function () {
        let reviewList = require('../src/reviewList');
        let reviews = new reviewList.reviewList('../data/reviews.json');
        //assert some things I am aware of from looking at the json data.
        assert.equal(Array.isArray(reviews.baseData), true);
        assert.equal(Array.isArray(reviews.travelWithValues),true);
        //assert some things I am aware of from looking at the json data.
        assert.equal(reviews.baseData.length, 200);
        assert.equal(reviews.travelWithValues.length, 5);
        assert.equal(typeof reviews.generalReviewAverage === 'function', true);
        assert.equal(typeof reviews.aspectReviewAverage === 'function', true);
        assert.equal(typeof reviews.travelWithReviewAverage === 'function', true);
        assert.equal(typeof reviews.getDataByTraveledWith === 'function', true);
        assert.equal(typeof reviews.getData === 'function', true);
        assert.equal(typeof reviews.getReviewById === 'function', true);
    });

    it('getData', function(){
        let reviewList = require('../src/reviewList');
        let reviews = new reviewList.reviewList('../data/reviews.json');

        assert.equal(reviews.getData().length, 200);
    });
    it('getDataTravelWith', function(){
        let reviewList = require('../src/reviewList');
        let reviews = new reviewList.reviewList('../data/reviews.json');

        assert.equal(reviews.getDataByTraveledWith('SINGLE').length, 1);
        assert.equal(reviews.getDataByTraveledWith('COUPLE').length, 16);
        assert.equal(reviews.getDataByTraveledWith('FRIENDS').length, 10);
        assert.equal(reviews.getDataByTraveledWith('OTHER').length, 55);
        assert.equal(reviews.getDataByTraveledWith('FAMILY').length, 118);
    });

    it('travelWithReviewAverage', function(){
        let reviewList = require('../src/reviewList');
        let reviews = new reviewList.reviewList('../data/reviews.json');

        assert.deepEqual(reviews.travelWithReviewAverage(), {
            "COUPLE": {
                "aspects": {
                    "accessibility": "0.0",
                    "activities": "0.0",
                    "advancedSkiArea": "0.0",
                    "apresSki": "0.0",
                    "atmosphere": "0.0",
                    "beach": "0.0",
                    "childFriendly": "7.2",
                    "culture": "0.0",
                    "entertainment": "0.0",
                    "environmental": "0.0",
                    "food": "0.0",
                    "interior": "0.0",
                    "location": "8.3",
                    "nightlife": "0.0",
                    "noviceSkiArea": "0.0",
                    "pool": "2.7",
                    "priceQuality": "8.0",
                    "restaurants": "5.2",
                    "room": "0.0",
                    "sanitaryState": "5.1",
                    "service": "0.0",
                    "size": "0.0",
                    "surrounding": "0.0",
                    "terrace": "0.0"
                },
                "general": {
                    "general": "8.4"
                }
            },
            "FAMILY": {
                "aspects": {
                    "accessibility": "0.0",
                    "activities": "0.0",
                    "advancedSkiArea": "0.0",
                    "apresSki": "0.0",
                    "atmosphere": "0.0",
                    "beach": "0.0",
                    "childFriendly": "8.6",
                    "culture": "0.0",
                    "entertainment": "0.0",
                    "environmental": "0.0",
                    "food": "0.0",
                    "interior": "0.0",
                    "location": "7.8",
                    "nightlife": "0.0",
                    "noviceSkiArea": "0.0",
                    "pool": "1.4",
                    "priceQuality": "7.7",
                    "restaurants": "7.5",
                    "room": "0.0",
                    "sanitaryState": "4.2",
                    "service": "0.0",
                    "size": "0.0",
                    "surrounding": "0.0",
                    "terrace": "0.0"
                },
                "general": {
                    "general": "8.3"
                }
            },
            "FRIENDS": {
                "aspects": {
                    "accessibility": "0.0",
                    "activities": "0.0",
                    "advancedSkiArea": "0.0",
                    "apresSki": "0.0",
                    "atmosphere": "0.0",
                    "beach": "0.0",
                    "childFriendly": "7.9",
                    "culture": "0.0",
                    "entertainment": "0.0",
                    "environmental": "0.0",
                    "food": "0.0",
                    "interior": "0.0",
                    "location": "8.7",
                    "nightlife": "0.0",
                    "noviceSkiArea": "0.0",
                    "pool": "2.5",
                    "priceQuality": "7.7",
                    "restaurants": "2.2",
                    "room": "0.0",
                    "sanitaryState": "0.82",
                    "service": "0.0",
                    "size": "0.0",
                    "surrounding": "0.0",
                    "terrace": "0.0"
                },
                "general": {
                    "general": "8.9"
                }
            },
            "OTHER": {
                "aspects": {
                    "accessibility": "0.0",
                    "activities": "0.0",
                    "advancedSkiArea": "0.0",
                    "apresSki": "0.0",
                    "atmosphere": "0.0",
                    "beach": "0.0",
                    "childFriendly": "5.8",
                    "culture": "0.0",
                    "entertainment": "0.0",
                    "environmental": "0.0",
                    "food": "0.0",
                    "interior": "0.0",
                    "location": "7.9",
                    "nightlife": "0.0",
                    "noviceSkiArea": "0.0",
                    "pool": "0.0",
                    "priceQuality": "8.2",
                    "restaurants": "1.8",
                    "room": "0.0",
                    "sanitaryState": "0.0",
                    "service": "0.0",
                    "size": "0.0",
                    "surrounding": "0.0",
                    "terrace": "0.0"
                },
                "general": {
                    "general": "8.7"
                }
            },
            "SINGLE": {
                "aspects": {
                    "accessibility": "0.0",
                    "activities": "0.0",
                    "advancedSkiArea": "0.0",
                    "apresSki": "0.0",
                    "atmosphere": "0.0",
                    "beach": "0.0",
                    "childFriendly": "8.0",
                    "culture": "0.0",
                    "entertainment": "0.0",
                    "environmental": "0.0",
                    "food": "0.0",
                    "interior": "0.0",
                    "location": "5.0",
                    "nightlife": "0.0",
                    "noviceSkiArea": "0.0",
                    "pool": "0.0",
                    "priceQuality": "6.0",
                    "restaurants": "8.0",
                    "room": "0.0",
                    "sanitaryState": "10",
                    "service": "0.0",
                    "size": "0.0",
                    "surrounding": "0.0",
                    "terrace": "0.0"
                },
                "general": {
                    "general": "8.0"
                }
            }
        });
    });


});