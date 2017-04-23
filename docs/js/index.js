import { Customer } from './classes/customer';
import { Engine } from './engine';
const grossSalary = 200000;
const engine = new Engine(new Customer(grossSalary));
engine.run();
