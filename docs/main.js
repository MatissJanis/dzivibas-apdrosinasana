import { Customer } from './js/classes/customer';
import { Engine } from './js/engine';

$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = $('input[name="salary"]').val();

    const grossSalary = 200000;
    const engine = new Engine(new Customer(grossSalary));
    engine.run();
  });
}());
