(function() {
  $(document).ready(function() {
    var bottom, form_ask_faq, slide;
    form_ask_faq = $("#ask_faq");
    bottom = form_ask_faq.css("bottom");
    slide = function() {
      if (bottom === "-306px") {
        bottom = 0;
      } else {
        bottom = "-306px";
      }
      return form_ask_faq.animate({
        bottom: bottom,
        duration: 400
      });
    };
    return form_ask_faq.find("header").click(function(e) {
      slide();
      return $(this).find(".fa-chevron-down").toggleClass("fa-rotate-180");
    });
  });

}).call(this);
