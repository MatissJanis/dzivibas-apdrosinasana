import { Customer } from './classes/customer';
import { Engine } from './engine';

// Gross and net monthly salary in CENTS
const grossSalary = 200000; // 2k EUR

const engine = new Engine(new Customer(grossSalary));

engine.run();
