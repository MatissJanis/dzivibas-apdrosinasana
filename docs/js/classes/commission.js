"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Commission {
    constructor(logic) {
        this.logic = logic;
    }
}
class ContractCommission extends Commission {
}
exports.ContractCommission = ContractCommission;
class InvestmentCommission extends Commission {
}
exports.InvestmentCommission = InvestmentCommission;
class MonthlyCommission extends Commission {
}
exports.MonthlyCommission = MonthlyCommission;
