(function() {
  $(document).ready(function() {
    var interest, max_mens, max_nb_mens, max_sum, min_empr, min_mens, start;
    max_sum = 50000;
    max_nb_mens = 24;
    min_empr = 500;
    min_mens = 3;
    interest = 0.05;
    start = min_empr / min_mens + min_empr / min_mens * interest;
    max_mens = max_sum + max_sum * interest;
    $("#slider").slider({
      value: start,
      min: 500,
      max: max_sum,
      step: 500,
      slide: function(event, ui) {
        $("#amount").val(ui.value + " $");
        $("#amount2").val((ui.value / 10 + ui.value / 10 * interest) + " $");
        $("#slider2 span").css('left', (ui.value / 10 + ui.value / 10 * interest) / max_mens * 100 + "%");
        $("#amount1").val(10);
        $("#slider1 span").css('left', 10 / max_nb_mens * 100 + "%");
      }
    });
    $("#amount").val($("#slider").slider("value") + " $");
    $("#slider1").slider({
      value: 1,
      min: min_mens,
      max: max_nb_mens,
      step: 1,
      slide: function(event, ui) {
        $("#amount1").val(ui.value + " mois");
        $("#slider2 span").css('left', (parseInt($("#amount").val().replace(" $", "")) + parseInt($("#amount").val().replace(" $", "")) * interest) / ui.value / max_mens * 100 + "%");
        $("#amount2").val((parseInt($("#amount").val().replace(" $", "")) + parseInt($("#amount").val().replace(" $", "")) * interest) / ui.value + " $");
      }
    });
    $("#amount1").val($("#slider1").slider("value") + " mois");
    $("#slider2").slider({
      value: start,
      min: 50,
      max: max_mens / 3,
      step: 1,
      slide: function(event, ui) {
        $("#amount2").val(ui.value + " $");
        $("#slider1 span").css('left', (parseInt($("#amount").val().replace(" $", ""))) / ui.value * 100 + "%");
        $("#amount1").val((parseInt($("#amount").val().replace(" $", ""))) / ui.value + " mois");
      }
    });
    return $("#amount2").val($("#slider2").slider("value") + " $");
  });

}).call(this);
