$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = $('input[name="salary"]').val();

    SystemJS.import("classes/customer").then(function (Customer) {
      SystemJS.import("engine").then(function (Engine) {
        console.log(Engine, Customer);
        var engine = new Engine(new Customer(grossSalary));
        engine.run();
      });
    });
  });
}());
