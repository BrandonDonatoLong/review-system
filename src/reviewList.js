/**
 * Created by Brandon on 7/3/2017.
 */

class reviewList {
    constructor(pathToData){
        this.data = require(pathToData);
    };

    getDataByTraveledWith(traveledWith){
        //sort by traveled with
        return this.data.filter(function(review){
            return review.traveledWith === traveledWith;
        });
    };

    getData(){
        return this.data;
    }
}

module.exports.reviewList = reviewList;