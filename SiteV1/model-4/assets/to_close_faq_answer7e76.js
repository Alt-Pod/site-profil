(function() {
  $(document).ready(function() {
    var targeted_element;
    targeted_element = $(".faq .body dl.accordion dd a.question");
    return targeted_element.click(function(e) {
      e.preventDefault;
      return $(this).siblings(".fa-chevron-down").toggleClass("fa-rotate-180");
    });
  });

}).call(this);
