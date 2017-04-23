"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerings_1 = require("./offerings");
const strategy_1 = require("./classes/strategy");
class Engine {
    constructor(customer) {
        this.customer = customer;
    }
    run() {
        console.log('Yearly investment:', (this.customer.maxYearlyInvestment() / 100).toFixed(2), 'EUR');
        console.log('-------------');
        console.log('Information below:');
        console.log('[balance at end of 5 year period]: [strategy name]');
        console.log('-------------');
        for (let i = offerings_1.offerings.length - 1; i >= 0; i--) {
            const offering = offerings_1.offerings[i];
            const strategies = [
                new strategy_1.InvestEvenlyStrategy(this.customer, offering),
                new strategy_1.InvestRegularlyAndBigAtYearEndStrategy(this.customer, offering),
                new strategy_1.InvestBigAtYearEndStrategy(this.customer, offering),
                new strategy_1.InvestBigAtYearStartStrategy(this.customer, offering),
                new strategy_1.InvestBigAtPeriodEndStrategy(this.customer, offering),
                new strategy_1.InvestBigAtPeriodStartStrategy(this.customer, offering),
            ];
            console.log(offering.name);
            for (let j = strategies.length - 1; j >= 0; j--) {
                const strategy = strategies[j];
                const result = strategy.getIncome() / 100;
                console.log(result.toFixed(2), 'EUR:', strategy.constructor.name);
            }
            console.log('-------------');
        }
    }
}
exports.Engine = Engine;
