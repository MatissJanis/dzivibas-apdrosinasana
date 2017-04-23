"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./classes/customer");
const engine_1 = require("./engine");
const grossSalary = 200000;
const engine = new engine_1.Engine(new customer_1.Customer(grossSalary));
engine.run();
