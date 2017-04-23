export class Customer {

  constructor(
    public grosMonthlySalary: number,
  ) {
  }

  public maxMonthlyInvestment(): number {
    return this.grosMonthlySalary / 100;
  }

  public maxYearlyInvestment(): number {
    return this.maxMonthlyInvestment() * 12;
  }

}
