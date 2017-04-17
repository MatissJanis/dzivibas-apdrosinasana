import {
  ICommission,
  InvestmentCommission,
  MonthlyCommission,
} from './commission';

export interface IOfferingOptions {
  interest: number;
  withdrawalPenalty: number;
  minimumMonthlyPayment: number;
}

export class Offering {

  constructor(
    public name: string,
    public options: IOfferingOptions,
    protected comissions: ICommission[],
  ) {
  }

  public getIncome(cycles: number = 1, monthlyPayment: number = this.options.minimumMonthlyPayment): number {
    let savings = 0;

    monthlyPayment -= this.calcTotalCommissionByType(monthlyPayment, InvestmentCommission);

    for (var i = 0; i < cycles; ++i) {
      savings += monthlyPayment;
      savings -= this.calcTotalCommissionByType(savings, MonthlyCommission);
      savings += savings * this.options.interest / 100;
    }

    return savings;
  }

  public calcTotalCommissionByType(amount: number, commissionType): number {
    let total = 0;

    this.comissions.forEach((commission) => {
      if (commission instanceof commissionType) {
        total += commission.logic(amount);
      }
    });

    return total;
  }

}
