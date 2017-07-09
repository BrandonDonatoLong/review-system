let mocha = require('mocha');
let assert = require('assert');

describe('test the functions of the calculator classes', function(){
    it('setup the calculator', function(){
        let calculator = require('../src/calculations');


        assert.equal(typeof calculator.weightedAverage ==='function', true);
        assert.equal(typeof calculator.dumbAverage ==='function', true);
    });
    it('run a weighted Average Review', function () {
        let calculator = require('../src/calculations');
        let testData = [
            { reviewDate: new Date(2009,1,1,1,1), reviewValue:10 },
            { reviewDate: new Date(2012,1,1,1,1), reviewValue:9 },
            { reviewDate: new Date(2013,1,1,1,1), reviewValue:8 },
            { reviewDate: new Date(2014,1,1,1,1), reviewValue:7 },
            { reviewDate: new Date(2015,1,1,1,1), reviewValue:6 },
            { reviewDate: new Date(2016,1,1,1,1), reviewValue:5 },
            { reviewDate: new Date(2017,1,1,1,1), reviewValue:4 }
        ];

        let calculatedWeightedAverage = calculator.weightedAverage(testData);

        let controlWeightedSum = (10*0.5) + (9 * (1 - (2017-2012)*0.1)) + 8 * (1 - (2017-2013)* 0.1) + 7 * (1 - (2017-2014)* 0.1)+ 6 * (1 - (2017-2015)* 0.1) + 5 * (1 - (2017-2016)* 0.1) + + 4 * (1 - (2017-2017)* 0.1);
        let controlWeightsSum = 0.5 + 0.5 + (1 - (2017-2013)* 0.1)+ (1 - (2017-2014)* 0.1)+ (1 - (2017-2015)* 0.1)+ (1 - (2017-2016)* 0.1)+ (1 - (2017-2017)* 0.1);
        let controlWeightedAverage = controlWeightedSum / controlWeightsSum;

        assert.equal(controlWeightedAverage, calculatedWeightedAverage);
    });

    it('run a dumb average review', function () {
        let calculator = require('../src/calculations');
        let testData = [
            { reviewDate: new Date(2009,1,1,1,1), reviewValue:10 },
            { reviewDate: new Date(2012,1,1,1,1), reviewValue:9 },
            { reviewDate: new Date(2013,1,1,1,1), reviewValue:8 },
            { reviewDate: new Date(2014,1,1,1,1), reviewValue:7 },
            { reviewDate: new Date(2015,1,1,1,1), reviewValue:6 },
            { reviewDate: new Date(2016,1,1,1,1), reviewValue:5 },
            { reviewDate: new Date(2017,1,1,1,1), reviewValue:4 }
        ];

        let calculatedDumbAverage = calculator.dumbAverage(testData);

        let sum = 10+9+8+7+6+5+4;
        let controlDumbAverage = sum/testData.length;

        assert.equal(calculatedDumbAverage, controlDumbAverage);

    });
});

