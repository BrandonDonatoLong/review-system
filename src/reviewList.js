/**
 * Created by Brandon on 7/3/2017.
 */
let calculator = require('./calculations');

// This is a class that pulls in the data from a file and then does some operations on it. Such as sorting and
// filtering the list.
class reviewList {
    //initialize the data.
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
    // Function to sort the working copy of the data by travel date
    sortByTravelDate(){
        this.filteredData.sort(function (a, b) {
            a = new Date(a.travelDate);
            b = new Date(b.travelDate);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        return this.filteredData;
    }
    // Function to sort the working copy of the data by entry date
    sortByContributionDate(){
        this.filteredData.sort(function (a, b) {
            a = new Date(a.entryDate);
            b = new Date(b.entryDate);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        return this.filteredData;
    }
    // Function to gather the weighted average of all the reviews "General" rating field
    generalReviewAverage(){
        let generalRatingsArray = this.baseData.map(function(review){
            return {reviewDate: review.entryDate, reviewValue: review.ratings.general.general};
        });
        return calculator.weightedAverage(generalRatingsArray);
    }
    // Function to gather the weighted average of all the reviews aspects field with each aspect field needing their
    // own weighted average calculation
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
    // Similar to the above but done with the filtered data and not the base set of data.
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

        //this is needed to restore the filtered list because "this.getDataByTravledWith" Changes the filtered list to the last one that was sent.
        this.getData();
        return arrayMapList;
    }
    // Function to filter the data set by who the reviewer traveled with.
    getDataByTraveledWith(traveledWith){
        //sort by traveled with
        this.filteredData = this.baseData.filter(function(review){
            return review.traveledWith === traveledWith;
        }).slice(0);
        return this.filteredData;
    };
    // Function to restore the working copy of the data to the base copy of the data. (like selecting "All" on a filter option.
    getData(){
        this.filteredData = this.baseData.slice(0);
        return this.filteredData;
    }
}

module.exports = reviewList;