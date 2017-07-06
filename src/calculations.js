/**
 * Created by Brandon on 7/3/2017.
 */

class calculations{
    weightedAverage(reviewArray){
        let weightedTotal = reviewArray.reduce(function(weightObject, reviewInfo){
            let reviewDate = new Date(reviewInfo.reviewDate);
            let deltaYear = new Date().getFullYear()-reviewDate.getFullYear();
            let weightValue = 0;
            if (deltaYear > 5)
            {
                weightValue = 0.5;
            }
            else{
                weightValue = 1 - deltaYear*0.1
            }

            weightObject.totalValue += reviewInfo.reviewValue * weightValue;
            weightObject.totalWeight += weightValue;
            return weightObject;
        }, {totalValue:0, totalWeight:0});

        return (weightedTotal.totalValue/weightedTotal.totalWeight).toPrecision(3);
    };

    //This is a dumb average (sum/totalNumber) that I put in there to check the sanity of my weighted averages.
    dumbAverage(generalReviewArray){
        let total = generalReviewArray.reduce(function(total, reviewInfo){
            return total + reviewInfo.reviewValue;
        }, 0);
        return total/generalReviewArray.length;
    }
}

module.exports.calculations = calculations;