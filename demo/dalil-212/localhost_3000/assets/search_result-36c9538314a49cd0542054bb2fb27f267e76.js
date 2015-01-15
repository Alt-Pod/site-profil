(function() {
  $(document).ready(function() {
    return $('.search_result header .display_filters').click(function(e) {
      e.preventDefault;
      $(this).css('pointer-events', 'none');
      $(this).toggleClass('upside-down');
      $(this).siblings('.filters').toggleClass('displayed');
      $('.search_result header .order_block').remove();
      if ($('.search_result .core .order').css('height') === "0px") {
        return $('.search_result .core .order').animate({
          height: '68px'
        }, 500, "linear", function() {
          return $('.search_result header .display_filters').css('pointer-events', 'initial');
        });
      } else {
        return $('.search_result .core .order').animate({
          height: '0'
        }, 500, "linear", function() {
          $('.search_result .core .order').clone().appendTo("header");
          $('.search_result header .order').addClass('order_block');
          $('.search_result header .order_block').removeClass('order');
          $('.search_result header .order_block').css('height', '195px');
          return $('.search_result header .display_filters').css('pointer-events', 'initial');
        });
      }
    });
  });

}).call(this);
