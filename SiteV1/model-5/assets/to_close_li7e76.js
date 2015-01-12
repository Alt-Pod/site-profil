(function() {
  $(document).ready(function() {
    return $(".pages-menu .off-canvas-wrap .inner-wrap .page-content li a").click(function(e) {
      e.preventDefault;
      $(this).children('.fa-chevron-down').toggleClass("fa-rotate-180");
      $(this).toggleClass("fa-rotate-180").siblings('ul').slideToggle("slow", function() {});
    });
  });

}).call(this);
