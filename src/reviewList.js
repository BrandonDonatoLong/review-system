/**
 * Created by Brandon on 7/3/2017.
 */
let Calculations = require('./calculations');
let calculator = new Calculations.calculations();
class reviewList {
    constructor(pathToData){
        //import the data
        this.data = require(pathToData);
        //helper setup to get the TraveledWith values for data I don't know.
        this.travelWithValues = [];
        this.data.forEach(function(review){
            if (this.travelWithValues.indexOf(review.traveledWith) < 0){
                this.travelWithValues.push(review.traveledWith);
            }
        }, this);
    };

    sortByTravelDate(){
        let reviews = this.data.slice(0);
        reviews.sort(function (left, right) {
            return right.travelDate - left.travelDate;
        });
        return reviews;
    }

    sortByContributionDate(){
        let reviews = this.data.slice(0);
        reviews.sort(function (left, right) {
            return right.entryDate - left.entryDate;
        });
        return reviews;
    }

    generalReviewAverage(){
        let generalRatingsArray = this.data.map(function(review){
            return {reviewDate: review.entryDate, reviewValue: review.ratings.general.general};
        });
        //return this.weightedGeneralAverage = calculator.GeneralReviewAverage(generalRatingsArray);
        return calculator.weightedAverage(generalRatingsArray);
    }
    aspectReviewAverage(){
        let arrayMapList = {};
        let aspectKeys = Object.keys(this.data[0].ratings.aspects);
        aspectKeys.forEach(function(key){
            arrayMapList[key] = {};
            let map = this.data.map(function(review){
                return {reviewDate: review.entryDate, reviewValue:review.ratings.aspects[key]};
            });
            arrayMapList[key] = calculator.weightedAverage(map);
        }, this);


        return arrayMapList;
    }

    travelWithReviewAverage(){
        let arrayMapList = {};
        this.travelWithValues.forEach(function(key){
            let tempData = this.getDataByTraveledWith(key);
            if (!arrayMapList[key]) {
                arrayMapList[key] = {aspects:{},
                    general:{}
                };
            }
            let map = tempData.map(function(review){
                return {reviewDate: review.entryDate, reviewValue:review.ratings.general.general};
            });
            arrayMapList[key].general.general = calculator.weightedAverage(map);

            Object.keys(this.data[0].ratings.aspects).forEach(function(aspectKey){
                arrayMapList[key].aspects[aspectKey] = {};
                let map = tempData.map(function(review){
                    return {reviewDate: review.entryDate, reviewValue:review.ratings.aspects[aspectKey]};
                });
                arrayMapList[key].aspects[aspectKey] = calculator.weightedAverage(map);
            }, this);
        }, this);


        return arrayMapList;
    }

    getDataByTraveledWith(traveledWith){
        //sort by traveled with
        return this.data.filter(function(review){
            return review.traveledWith === traveledWith;
        });
    };

    // By the fields I am assuming that this data was taken from a DB. I could reinsert the data into a new Mongoose DB but I would be worried it would then change some of the items.
    // So I will integrate some calls that could be easily replaced with a DB call.
    getReviewById(id){
        return this.data.filter(function(review){
            return review.id === id;
        })
    }

    getData(){
        return this.data;
    }
}

module.exports.reviewList = reviewList;