(function() {
  $(document).ready(function() {
    var has_chevron;
    has_chevron = $("header .quick_links ul li");
    return has_chevron.click(function(e) {
      e.preventDefault;
      return $(this).find(".fa-chevron-down").toggleClass("fa-rotate-180");
    });
  });

}).call(this);
