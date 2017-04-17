import { Customer } from './customer';
import { Offering } from './offering';

import {
  ContractCommission,
  InvestmentCommission,
  MonthlyCommission,
} from './commission';

abstract class Strategy {

  constructor(
    protected customer: Customer,
    protected offering: Offering,
  ) {
  }

  public abstract getIncome(): number;

  protected getContractCommission() {
    return this.offering.calcTotalCommissionByType(0, ContractCommission);
  }

}

export class InvestRegularlyAndBigAtYearEndStrategy extends Strategy {

  public getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (let i = 1; i <= 60; ++i) {
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

  public getIncome(): number {
    let bigPayment = this.customer.maxYearlyInvestment();
    let savings = -this.getContractCommission();

    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (let i = 12; i <= 60; ++i) {
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

  public getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() - (monthlyPayment * 11);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (let i = 0; i < 60; ++i) {
      savings += (i % 12 === 0 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if ((i + 1) % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}

export class InvestEvenlyStrategy extends Strategy {

  public getIncome(): number {
    let monthlyPayment = this.customer.maxMonthlyInvestment();
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);

    for (let i = 1; i <= 60; ++i) {
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

  public getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (let i = 1; i <= 60; ++i) {
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

  public getIncome(): number {
    let monthlyPayment = this.offering.options.minimumMonthlyPayment;
    let bigPayment = this.customer.maxYearlyInvestment() * 5 - (monthlyPayment * 59);
    let savings = -this.getContractCommission();

    monthlyPayment -= this.offering.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);
    bigPayment -= this.offering.calcTotalCommissionByType(bigPayment, InvestmentCommission);

    for (let i = 1; i <= 60; ++i) {
      savings += (i === 1 ? bigPayment : monthlyPayment);
      savings -= this.offering.calcTotalCommissionByType(savings, MonthlyCommission);

      if (i % 12 === 0) {
        savings += savings * this.offering.options.interest / 100;
      }
    }

    return savings;
  }

}
