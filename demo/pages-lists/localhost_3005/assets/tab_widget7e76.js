(function() {
  $(document).ready(function() {
    var tab;
    tab = $('.script_tab_widget');
    tab.each(function() {
      return tab.children('.content').each(function() {
        if (!($(this).hasClass("tab1"))) {
          $(this).css("display", "none");
          return $(this).siblings('.filters').css("display", "none");
        }
      });
    });
    return $('.script_tab_widget').children('.tabs').children('ul').children('li').click(function(e) {
      var ref;
      e.preventDefault();
      $(this).siblings('li').children('.each').children('a').removeClass('current');
      $(this).children('.each').children('a').addClass('current');
      ref = $(this).index() + 1;
      $(this).parents('.tabs').siblings('.content').css("display", "none");
      $(this).parents('.tabs').siblings(".content.tab" + ref).css("display", "block");
      if ($(this).index() === 5) {
        $(this).parents('.tabs').siblings('.filters').css("display", "block");
      } else {
        $(this).parents('.tabs').siblings('.filters').css("display", "none");
      }
      if ($(this).index() === 3) {
        return $(this).parents('.tabs').siblings('.content').children('.video_slider-1').children('button.slick-next').trigger('click');
      }
    });
  });

}).call(this);
