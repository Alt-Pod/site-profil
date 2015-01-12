(function() {
  $(document).ready(function() {
    $("body .widget header span.tools .close").click(function(e) {
      e.preventDefault;
      $(this).parents('.widget').hide(400);
    });
    return $("body .widget header span.tools .fade").click(function(e) {
      e.preventDefault;
      $(this).toggleClass("fa-rotate-180").parents("header").siblings(".body").slideToggle("slow", function() {});
    });
  });

}).call(this);
