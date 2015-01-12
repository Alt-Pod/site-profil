(function() {
  $(document).ready(function() {
    $(".pages-menu.edit .off-canvas-wrap .inner-wrap .page-content").on("click", "a.fa-chevron-down", function(e) {
      e.preventDefault;
      $(this).toggleClass("fa-rotate-180").siblings('div').slideToggle("slow", function() {});
      if ($(this).hasClass("fa-rotate-180")) {
        $(this).find('span').remove();
      } else {
        $(this).append("<span>" + $(this).siblings('.row').first().find('.columns .input input').first().val() + "</span>");
      }
    });
    return $(".pages-menu.edit .off-canvas-wrap .inner-wrap .page-content a.fa-chevron-down").trigger("click", function() {});
  });

}).call(this);
