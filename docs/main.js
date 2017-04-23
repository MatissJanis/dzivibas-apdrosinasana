$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = $('input[name="salary"]').val();

    const customer_1 = require("./js/classes/customer");
    const engine_1 = require("./js/engine");
    const engine = new engine_1.Engine(new customer_1.Customer(grossSalary));
    engine.run();
  });
}());
