/**
 * Created by Brandon on 7/3/2017.
 */
let Calculations = require('./calculations');
let calculator = new Calculations.calculations();
class reviewList {
    constructor(pathToData){
        //import the data
        this.baseData = require(pathToData);
        //helper setup to get the TraveledWith values for data I don't know.
        this.filteredData = this.baseData.slice(0);
        this.travelWithValues = [];
        this.baseData.forEach(function(review){
            if (this.travelWithValues.indexOf(review.traveledWith) < 0){
                this.travelWithValues.push(review.traveledWith);
            }
        }, this);
    };

    sortByTravelDate(){
        this.filteredData.sort(function (a, b) {
            a = new Date(a.travelDate);
            b = new Date(b.travelDate);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        return this.filteredData;
    }

    sortByContributionDate(){
        this.filteredData.sort(function (a, b) {
            a = new Date(a.entryDate);
            b = new Date(b.entryDate);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        return this.filteredData;
    }

    generalReviewAverage(){
        let generalRatingsArray = this.baseData.map(function(review){
            return {reviewDate: review.entryDate, reviewValue: review.ratings.general.general};
        });
        //return this.weightedGeneralAverage = calculator.GeneralReviewAverage(generalRatingsArray);
        return calculator.weightedAverage(generalRatingsArray);
    }
    aspectReviewAverage(){
        let arrayMapList = {};
        let aspectKeys = Object.keys(this.baseData[0].ratings.aspects);
        aspectKeys.forEach(function(key){
            arrayMapList[key] = {};
            let map = this.baseData.map(function(review){
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

            Object.keys(this.filteredData[0].ratings.aspects).forEach(function(aspectKey){
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
        this.filteredData = this.baseData.filter(function(review){
            return review.traveledWith === traveledWith;
        }).slice(0);
        return this.filteredData;
    };

    // By the fields I am assuming that this data was taken from a DB. I could reinsert the data into a new Mongoose DB but I would be worried it would then change some of the items.
    // So I will integrate some calls that could be easily replaced with a DB call.
    getReviewById(id){
        return this.baseData.filter(function(review){
            return review.id === id;
        })
    }

    getData(){
        this.filteredData = this.baseData.slice(0);
        return this.filteredData;
    }
}

module.exports.reviewList = reviewList;