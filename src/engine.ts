import { offerings } from './offerings';
import {
  InvestBigAtPeriodEndStrategy,
  InvestBigAtPeriodStartStrategy,
  InvestBigAtYearEndStrategy,
  InvestBigAtYearStartStrategy,
  InvestEvenlyStrategy,
  InvestRegularlyAndBigAtYearEndStrategy,
} from './classes/strategy';

import { Customer } from './classes/customer';

export class Engine {

  constructor(
    protected customer: Customer
  ) {
  }

  run() {
    console.log('Yearly investment:', (this.customer.maxYearlyInvestment() / 100).toFixed(2), 'EUR');
    console.log('-------------');

    console.log('Information below:');
    console.log('[balance at end of 5 year period]: [strategy name]');
    console.log('-------------');

    for (var i = offerings.length - 1; i >= 0; i--) {
      const offering = offerings[i];
      const strategies = [
        new InvestEvenlyStrategy(this.customer, offering),
        new InvestRegularlyAndBigAtYearEndStrategy(this.customer, offering),
        new InvestBigAtYearEndStrategy(this.customer, offering),
        new InvestBigAtYearStartStrategy(this.customer, offering),
        new InvestBigAtPeriodEndStrategy(this.customer, offering),
        new InvestBigAtPeriodStartStrategy(this.customer, offering),
      ];

      console.log(offering.name);

      for (var j = strategies.length - 1; j >= 0; j--) {
        const strategy = strategies[j];
        const result = strategy.getIncome() / 100;
        console.log(result.toFixed(2), 'EUR:', strategy.constructor.name);
      }

      console.log('-------------');
    }
  }
}
