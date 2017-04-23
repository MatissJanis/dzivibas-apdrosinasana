"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commission_1 = require("./commission");
class Offering {
    constructor(name, options, comissions) {
        this.name = name;
        this.options = options;
        this.comissions = comissions;
    }
    getIncome(cycles = 1, monthlyPayment = this.options.minimumMonthlyPayment) {
        let savings = 0;
        monthlyPayment -= this.calcTotalCommissionByType(monthlyPayment, commission_1.InvestmentCommission);
        for (let i = 0; i < cycles; ++i) {
            savings += monthlyPayment;
            savings -= this.calcTotalCommissionByType(savings, commission_1.MonthlyCommission);
            savings += savings * this.options.interest / 100;
        }
        return savings;
    }
    calcTotalCommissionByType(amount, commissionType) {
        let total = 0;
        this.comissions.forEach((commission) => {
            if (commission instanceof commissionType) {
                total += commission.logic(amount);
            }
        });
        return total;
    }
}
exports.Offering = Offering;
