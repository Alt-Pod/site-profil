(function() {
  $(document).ready(function() {
    var actualize_index, hide_all_upper_li, put_current, show_upper_current_li, slide_for_lower, toggle_lock_animation;
    hide_all_upper_li = function() {
      return $(".slider_core .upper-side ul li").hide();
    };
    show_upper_current_li = function() {
      return $(".slider_core .upper-side ul .current").show("slow");
    };
    toggle_lock_animation = function() {
      return $(".slider_core .lower-side ul li:first").toggleClass("animated");
    };
    put_current = function(elmt, pos_li) {
      elmt.removeClass("current");
      return $(elmt.get(pos_li)).addClass("current");
    };
    slide_for_lower = function(li_clicked) {
      var gap, li_margin_right, margin, setup, standart_size;
      toggle_lock_animation();
      setup = parseFloat($(".slider_core .lower-side ul li:first").css("margin-left").replace('px', ''));
      standart_size = parseFloat($(".slider_core .lower-side ul li").css("width").replace('px', ''));
      gap = parseFloat(li_clicked.index() - $(".slider_core .lower-side ul li.current").index());
      li_margin_right = parseFloat(standart_size) / 10;
      margin = -((li_margin_right + standart_size) * gap) + setup;
      return $(".slider_core .lower-side ul li:first").animate({
        marginLeft: margin
      }, {
        queue: true,
        duration: 400,
        complete: function() {
          return toggle_lock_animation();
        }
      });
    };
    actualize_index = function() {
      return $(".slider_core .lower-side .index ul li:first").append($(".slider_core .lower-side ul li.current").index() + 1);
    };
    hide_all_upper_li();
    show_upper_current_li();
    actualize_index();
    $(".slider_core .upper-side a").click(function(e) {
      var current_li, pos, slider_li;
      e.preventDefault;
      if ($(".slider_core .lower-side ul li:first").hasClass("animated")) {
        return false;
      }
      slider_li = $(".slider_core .upper-side li");
      current_li = $(".slider_core .upper-side .current");
      if ($(this).hasClass("right")) {
        if ($(".slider_core .upper-side li:last-child").hasClass("current")) {
          pos = 0;
        } else {
          pos = current_li.index() + 1;
        }
      } else {
        pos = current_li.index() - 1;
      }
      hide_all_upper_li();
      slider_li.removeClass("current");
      if ((pos - 1) === slider_li.last().index()) {
        pos = 0;
      }
      $(slider_li.get(pos)).addClass("current");
      slide_for_lower($(slider_li.get(pos)));
      show_upper_current_li();
      return put_current($(".slider_core .lower-side ul li"), pos);
    });
    return $(".slider_core .lower-side ul li").click(function(e) {
      var lower_li, upper_li;
      e.preventDefault;
      if ($(".slider_core .lower-side ul li:first").hasClass("animated")) {
        return false;
      }
      upper_li = $(".slider_core .upper-side li");
      lower_li = $(".slider_core .lower-side ul li");
      hide_all_upper_li();
      put_current(upper_li, $(this).index());
      slide_for_lower($(this));
      put_current(lower_li, $(this).index());
      return show_upper_current_li();
    });
  });

}).call(this);
