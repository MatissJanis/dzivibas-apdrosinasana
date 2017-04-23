$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var grossSalary = parseInt($('input[name="salary"]').val(), 10) * 100;

    SystemJS.import("classes/customer").then(function (a) {
      SystemJS.import("engine").then(function (b) {
        var engine = new b.Engine(new a.Customer(grossSalary));
        engine.run();
      });
    });
  });
}());
