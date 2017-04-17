import { Customer } from './customer';
import { Offering } from './offering';

import {
  ContractCommission,
  InvestmentCommission,
  MonthlyCommission,
} from './commission';

class Strategy {

  constructor(
    protected customer: Customer,
    protected offering: Offering,
  ) {
  }

  getIncome(): number {
    return 0;
  }

  protected getContractCommission() {
    return this.offering.calcTotalCommissionByType(0, ContractCommission);
  }

}

export class InvestRegularlyAndBigAtYearEndStrategy extends Strategy {

  getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (var i = 1; i <= 60; ++i) {
      savings += (i % 12 === 0 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestBigAtYearEndStrategy extends Strategy {

  getIncome(): number {
    let bigPayment = this.customer.maxYearlyInvestment();
    let savings = -this.getContractCommission();

    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (var i = 12; i <= 60; ++i) {
      savings += (i % 12 === 0 ? bigPayment : 0);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestBigAtYearStartStrategy extends Strategy {

  getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (var i = 0; i < 60; ++i) {
      savings += (i % 12 === 0 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if ((i+1) % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestEvenlyStrategy extends Strategy {

  getIncome(): number {
    let monthlyPayment = this.customer.maxMonthlyInvestment();
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);

    for (var i = 1; i <= 60; ++i) {
      savings += monthlyPayment;
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestBigAtPeriodEndStrategy extends Strategy {

  getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (var i = 1; i <= 60; ++i) {
      savings += (i === 60 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestBigAtPeriodStartStrategy extends Strategy {

  getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (var i = 1; i <= 60; ++i) {
      savings += (i === 1 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}
