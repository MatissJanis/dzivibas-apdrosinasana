import { ContractCommission, InvestmentCommission, MonthlyCommission, } from './classes/commission';
import { Offering } from './classes/offering';
export const swedbankConservative = new Offering('Swedbank: konservatīvā stratēģija', {
    interest: 0.4,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new InvestmentCommission((investment) => investment * 0.015),
    new MonthlyCommission((savings) => savings * 0.0075 > 213 ? savings * 0.0075 : 213),
]);
export const swedbankRealValue = new Offering('Swedbank: reālās vērtības stratēģija', {
    interest: 3.8,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new InvestmentCommission((investment) => investment * 0.015),
    new MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
]);
export const swedbankBalanced = new Offering('Swedbank: sabalansētā stratēģija', {
    interest: 5.7,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new InvestmentCommission((investment) => investment * 0.015),
    new MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
]);
export const swedbankGrowth = new Offering('Swedbank: pieauguma stratēģija', {
    interest: 7.1,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new InvestmentCommission((investment) => investment * 0.015),
    new MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
]);
export const swedbankActiveGrowth = new Offering('Swedbank: aktīvā pieauguma stratēģija', {
    interest: 7.4,
    withdrawalPenalty: 0.5,
    minimumMonthlyPayment: 4000,
}, [
    new InvestmentCommission((investment) => investment * 0.015),
    new MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
]);
export const sebGuarantted = new Offering('SEB: garantētais pieaugums', {
    interest: 0.6,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 2500,
}, [
    new ContractCommission(() => 2134),
    new InvestmentCommission((investment) => investment * 0.03),
    new MonthlyCommission((savings) => savings * 0.0095),
]);
export const sebFonds = new Offering('SEB: ieguldījums fondos', {
    interest: 3.9,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 2500,
}, [
    new ContractCommission(() => 2134),
    new InvestmentCommission((investment) => investment * 0.03),
    new MonthlyCommission((savings) => savings * 0.0075),
]);
export const ergo = new Offering('ERGO', {
    interest: 0,
    withdrawalPenalty: 0,
    minimumMonthlyPayment: 1500,
}, [
    new InvestmentCommission((investment) => investment * 0.03),
    new MonthlyCommission((savings) => savings * 0.024 + 2),
]);
export const offerings = [
    swedbankConservative,
    swedbankRealValue,
    swedbankBalanced,
    swedbankGrowth,
    swedbankActiveGrowth,
    sebGuarantted,
    sebFonds,
    ergo,
];
