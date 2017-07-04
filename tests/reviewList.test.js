let mocha = require('mocha');
let assert = require('assert');

describe('test the functions of the reviewList class', function() {
    it('setup the reviewList', function () {
        let reviewList = require('../src/reviewList');
        let reviews = new reviewList.reviewList('../data/reviews.json');
        //assert some things I am aware of from looking at the json data.
        assert.equal(Array.isArray(reviews.data), true);
        assert.equal(Array.isArray(reviews.travelWithValues),true);
        //assert some things I am aware of from looking at the json data.
        assert.equal(reviews.data.length, 200);
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

        assert.deepEqual(reviews.travelWithReviewAverage(), {"FAMILY": 8.334328358208955,"FRIENDS": 8.866666666666665,"OTHER": 8.745454545454546,"COUPLE": 8.416666666666664,"SINGLE": 8});
    });


});