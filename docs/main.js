$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = $('input[name="salary"]').val();

    SystemJS.import(["classes/customer", "engine"]).then(function (Customer, Engine) {
      var engine = new Engine(new Customer(grossSalary));
      engine.run();
    });
  });
}());
