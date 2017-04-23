$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = $('input[name="salary"]').val();

    SystemJS.import("classes/customer").then(function (a) {
      SystemJS.import("engine").then(function (b) {
        console.log(b.Engine, a.Customer);
        var engine = new b.Engine(new a.Customer(grossSalary));
        engine.run();
      });
    });
  });
}());
