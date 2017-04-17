export interface ICommission {
  logic: (amount: number) => number;
}

class Commission implements ICommission {

  constructor(public logic) {
  }

}

export class ContractCommission extends Commission {}
export class InvestmentCommission extends Commission {}
export class MonthlyCommission extends Commission {}

