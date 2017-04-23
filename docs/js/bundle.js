System.register("classes/commission", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Commission, ContractCommission, InvestmentCommission, MonthlyCommission;
    return {
        setters: [],
        execute: function () {
            Commission = class Commission {
                constructor(logic) {
                    this.logic = logic;
                }
            };
            ContractCommission = class ContractCommission extends Commission {
            };
            exports_1("ContractCommission", ContractCommission);
            InvestmentCommission = class InvestmentCommission extends Commission {
            };
            exports_1("InvestmentCommission", InvestmentCommission);
            MonthlyCommission = class MonthlyCommission extends Commission {
            };
            exports_1("MonthlyCommission", MonthlyCommission);
        }
    };
});
System.register("classes/offering", ["classes/commission"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var commission_1, Offering;
    return {
        setters: [
            function (commission_1_1) {
                commission_1 = commission_1_1;
            }
        ],
        execute: function () {
            Offering = class Offering {
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
            };
            exports_2("Offering", Offering);
        }
    };
});
System.register("offerings", ["classes/commission", "classes/offering"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var commission_2, offering_1, swedbankConservative, swedbankRealValue, swedbankBalanced, swedbankGrowth, swedbankActiveGrowth, sebGuarantted, sebFonds, ergo, offerings;
    return {
        setters: [
            function (commission_2_1) {
                commission_2 = commission_2_1;
            },
            function (offering_1_1) {
                offering_1 = offering_1_1;
            }
        ],
        execute: function () {
            exports_3("swedbankConservative", swedbankConservative = new offering_1.Offering('Swedbank: konservatīvā stratēģija', {
                interest: 0.4,
                withdrawalPenalty: 0.5,
                minimumMonthlyPayment: 4000,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.015),
                new commission_2.MonthlyCommission((savings) => savings * 0.0075 > 213 ? savings * 0.0075 : 213),
            ]));
            exports_3("swedbankRealValue", swedbankRealValue = new offering_1.Offering('Swedbank: reālās vērtības stratēģija', {
                interest: 3.8,
                withdrawalPenalty: 0.5,
                minimumMonthlyPayment: 4000,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.015),
                new commission_2.MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
            ]));
            exports_3("swedbankBalanced", swedbankBalanced = new offering_1.Offering('Swedbank: sabalansētā stratēģija', {
                interest: 5.7,
                withdrawalPenalty: 0.5,
                minimumMonthlyPayment: 4000,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.015),
                new commission_2.MonthlyCommission((savings) => savings * 0.01 > 213 ? savings * 0.01 : 213),
            ]));
            exports_3("swedbankGrowth", swedbankGrowth = new offering_1.Offering('Swedbank: pieauguma stratēģija', {
                interest: 7.1,
                withdrawalPenalty: 0.5,
                minimumMonthlyPayment: 4000,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.015),
                new commission_2.MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
            ]));
            exports_3("swedbankActiveGrowth", swedbankActiveGrowth = new offering_1.Offering('Swedbank: aktīvā pieauguma stratēģija', {
                interest: 7.4,
                withdrawalPenalty: 0.5,
                minimumMonthlyPayment: 4000,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.015),
                new commission_2.MonthlyCommission((savings) => savings * 0.0125 > 213 ? savings * 0.0125 : 213),
            ]));
            exports_3("sebGuarantted", sebGuarantted = new offering_1.Offering('SEB: garantētais pieaugums', {
                interest: 0.6,
                withdrawalPenalty: 0,
                minimumMonthlyPayment: 2500,
            }, [
                new commission_2.ContractCommission(() => 2134),
                new commission_2.InvestmentCommission((investment) => investment * 0.03),
                new commission_2.MonthlyCommission((savings) => savings * 0.0095),
            ]));
            exports_3("sebFonds", sebFonds = new offering_1.Offering('SEB: ieguldījums fondos', {
                interest: 3.9,
                withdrawalPenalty: 0,
                minimumMonthlyPayment: 2500,
            }, [
                new commission_2.ContractCommission(() => 2134),
                new commission_2.InvestmentCommission((investment) => investment * 0.03),
                new commission_2.MonthlyCommission((savings) => savings * 0.0075),
            ]));
            exports_3("ergo", ergo = new offering_1.Offering('ERGO', {
                interest: 0,
                withdrawalPenalty: 0,
                minimumMonthlyPayment: 1500,
            }, [
                new commission_2.InvestmentCommission((investment) => investment * 0.03),
                new commission_2.MonthlyCommission((savings) => savings * 0.024 + 2),
            ]));
            exports_3("offerings", offerings = [
                swedbankConservative,
                swedbankRealValue,
                swedbankBalanced,
                swedbankGrowth,
                swedbankActiveGrowth,
                sebGuarantted,
                sebFonds,
                ergo,
            ]);
        }
    };
});
System.register("classes/customer", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Customer;
    return {
        setters: [],
        execute: function () {
            Customer = class Customer {
                constructor(grosMonthlySalary) {
                    this.grosMonthlySalary = grosMonthlySalary;
                }
                maxMonthlyInvestment() {
                    return this.grosMonthlySalary / 10;
                }
                maxYearlyInvestment() {
                    return this.maxMonthlyInvestment() * 12;
                }
            };
            exports_4("Customer", Customer);
        }
    };
});
System.register("classes/strategy", ["classes/commission"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var commission_3, Strategy, InvestRegularlyAndBigAtYearEndStrategy, InvestBigAtYearEndStrategy, InvestBigAtYearStartStrategy, InvestEvenlyStrategy, InvestBigAtPeriodEndStrategy, InvestBigAtPeriodStartStrategy;
    return {
        setters: [
            function (commission_3_1) {
                commission_3 = commission_3_1;
            }
        ],
        execute: function () {
            Strategy = class Strategy {
                constructor(customer, offering) {
                    this.customer = customer;
                    this.offering = offering;
                }
                getContractCommission() {
                    return this.offering.calcTotalCommissionByType(0, commission_3.ContractCommission);
                }
            };
            InvestRegularlyAndBigAtYearEndStrategy = class InvestRegularlyAndBigAtYearEndStrategy extends Strategy {
                getIncome() {
                    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
                    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
                    let savings = -this.getContractCommission();
                    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, commission_3.InvestmentCommission);
                    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, commission_3.InvestmentCommission);
                    for (let i = 1; i <= 60; ++i) {
                        savings += (i % 12 === 0 ? bigPayment : monthlyPayment);
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if (i % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestRegularlyAndBigAtYearEndStrategy", InvestRegularlyAndBigAtYearEndStrategy);
            InvestBigAtYearEndStrategy = class InvestBigAtYearEndStrategy extends Strategy {
                getIncome() {
                    let bigPayment = this.customer.maxYearlyInvestment();
                    let savings = -this.getContractCommission();
                    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, commission_3.InvestmentCommission);
                    for (let i = 12; i <= 60; ++i) {
                        savings += (i % 12 === 0 ? bigPayment : 0);
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if (i % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestBigAtYearEndStrategy", InvestBigAtYearEndStrategy);
            InvestBigAtYearStartStrategy = class InvestBigAtYearStartStrategy extends Strategy {
                getIncome() {
                    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
                    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
                    let savings = -this.getContractCommission();
                    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, commission_3.InvestmentCommission);
                    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, commission_3.InvestmentCommission);
                    for (let i = 0; i < 60; ++i) {
                        savings += (i % 12 === 0 ? bigPayment : monthlyPayment);
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if ((i + 1) % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestBigAtYearStartStrategy", InvestBigAtYearStartStrategy);
            InvestEvenlyStrategy = class InvestEvenlyStrategy extends Strategy {
                getIncome() {
                    let monthlyPayment = this.customer.maxMonthlyInvestment();
                    let savings = -this.getContractCommission();
                    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, commission_3.InvestmentCommission);
                    for (let i = 1; i <= 60; ++i) {
                        savings += monthlyPayment;
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if (i % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestEvenlyStrategy", InvestEvenlyStrategy);
            InvestBigAtPeriodEndStrategy = class InvestBigAtPeriodEndStrategy extends Strategy {
                getIncome() {
                    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
                    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
                    let savings = -this.getContractCommission();
                    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, commission_3.InvestmentCommission);
                    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, commission_3.InvestmentCommission);
                    for (let i = 1; i <= 60; ++i) {
                        savings += (i === 60 ? bigPayment : monthlyPayment);
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if (i % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestBigAtPeriodEndStrategy", InvestBigAtPeriodEndStrategy);
            InvestBigAtPeriodStartStrategy = class InvestBigAtPeriodStartStrategy extends Strategy {
                getIncome() {
                    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
                    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
                    let savings = -this.getContractCommission();
                    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, commission_3.InvestmentCommission);
                    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, commission_3.InvestmentCommission);
                    for (let i = 1; i <= 60; ++i) {
                        savings += (i === 1 ? bigPayment : monthlyPayment);
                        savings -= this.offering.calcTotalCommissionByType(savings, commission_3.MonthlyCommission);
                        if (i % 12 === 0) {
                            savings += savings * this.offering.options.interest / 100;
                        }
                    }
                    return savings;
                }
            };
            exports_5("InvestBigAtPeriodStartStrategy", InvestBigAtPeriodStartStrategy);
        }
    };
});
System.register("engine", ["offerings", "classes/strategy"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var offerings_1, strategy_1, Engine;
    return {
        setters: [
            function (offerings_1_1) {
                offerings_1 = offerings_1_1;
            },
            function (strategy_1_1) {
                strategy_1 = strategy_1_1;
            }
        ],
        execute: function () {
            Engine = class Engine {
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
            };
            exports_6("Engine", Engine);
        }
    };
});
System.register("index", ["classes/customer", "engine"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var customer_1, engine_1, grossSalary, engine;
    return {
        setters: [
            function (customer_1_1) {
                customer_1 = customer_1_1;
            },
            function (engine_1_1) {
                engine_1 = engine_1_1;
            }
        ],
        execute: function () {
            grossSalary = 200000;
            engine = new engine_1.Engine(new customer_1.Customer(grossSalary));
            engine.run();
        }
    };
});
