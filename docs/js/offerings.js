"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commission_1 = require("./classes/commission");
const offering_1 = require("./classes/offering");
exports.swedbankConservative = new offering_1.Offering('Swedbank: konservatīvā stratēģija', {
    interest: 0.4,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.015),
    new commission_1.MonthlyCommission((savings) => savings * 0.0075 > 213 ? savings * 0.0075 : 213),
]);
exports.swedbankRealValue = new offering_1.Offering('Swedbank: reālās vērtības stratēģija', {
    interest: 3.8,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.015),
    new commission_1.MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
]);
exports.swedbankBalanced = new offering_1.Offering('Swedbank: sabalansētā stratēģija', {
    interest: 5.7,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.015),
    new commission_1.MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
]);
exports.swedbankGrowth = new offering_1.Offering('Swedbank: pieauguma stratēģija', {
    interest: 7.1,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.015),
    new commission_1.MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
]);
exports.swedbankActiveGrowth = new offering_1.Offering('Swedbank: aktīvā pieauguma stratēģija', {
    interest: 7.4,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.015),
    new commission_1.MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
]);
exports.sebGuarantted = new offering_1.Offering('SEB: garantētais pieaugums', {
    interest: 0.6,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 2500,
}, [
    new commission_1.ContractCommission(() => 2134),
    new commission_1.InvestmentCommission((investment) => investment * 0.03),
    new commission_1.MonthlyCommission((savings) => savings * 0.0095),
]);
exports.sebFonds = new offering_1.Offering('SEB: ieguldījums fondos', {
    interest: 3.9,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 2500,
}, [
    new commission_1.ContractCommission(() => 2134),
    new commission_1.InvestmentCommission((investment) => investment * 0.03),
    new commission_1.MonthlyCommission((savings) => savings * 0.0075),
]);
exports.ergo = new offering_1.Offering('ERGO', {
    interest: 0,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 1500,
}, [
    new commission_1.InvestmentCommission((investment) => investment * 0.03),
    new commission_1.MonthlyCommission((savings) => savings * 0.024 + 2),
]);
exports.offerings = [
    exports.swedbankConservative,
    exports.swedbankRealValue,
    exports.swedbankBalanced,
    exports.swedbankGrowth,
    exports.swedbankActiveGrowth,
    exports.sebGuarantted,
    exports.sebFonds,
    exports.ergo,
];
