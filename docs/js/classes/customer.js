export class Customer {
    constructor(grosMonthlySalary) {
        this.grosMonthlySalary = grosMonthlySalary;
    }
    maxMonthlyInvestment() {
        return this.grosMonthlySalary / 10;
    }
    maxYearlyInvestment() {
        return this.maxMonthlyInvestment() * 12;
    }
}
