(function() {
  $(document).ready(function() {
    $(".button_1, .button_2, .button_3").click(function() {
      var cpt, element_reminder;
      if ($(this).hasClass("current")) {

      } else {
        cpt = 0;
        element_reminder = 1000;
        while (cpt < 3) {
          $(".button_" + (cpt + 1)).removeClass("current");
          $(".slide" + (cpt + 1)).css("position", "absolute");
          if ($(this).hasClass("button_" + (cpt + 1))) {
            element_reminder = cpt + 1;
          }
          cpt = cpt + 1;
        }
        $(this).addClass("current");
        return $(".slide" + element_reminder).css("position", "relative");
      }
    });
    $(".next_slide_right, .next_slide_left").click(function() {
      var cpt, element_reminder;
      cpt = 0;
      element_reminder = 0;
      while (cpt < 3) {
        if ($(".button_" + (cpt + 1)).hasClass("current")) {
          element_reminder = cpt + 1;
        }
        $(".button_" + (cpt + 1)).removeClass("current");
        $(".slide" + (cpt + 1)).css("position", "absolute");
        cpt = cpt + 1;
      }
      if ($(this).hasClass("next_slide_right")) {
        if ((element_reminder + 1) > 3) {
          element_reminder = element_reminder - 3;
        }
        $(".button_" + (element_reminder + 1)).addClass("current");
        $(".slide" + (element_reminder + 1)).css("position", "relative");
      }
      if ($(this).hasClass("next_slide_left")) {
        if ((element_reminder - 1) < 1) {
          element_reminder = element_reminder + 3;
        }
        $(".button_" + (element_reminder - 1)).addClass("current");
        return $(".slide" + (element_reminder - 1)).css("position", "relative");
      }
    });
    setInterval((function() {
      var cpt, element_reminder;
      cpt = 0;
      element_reminder = 0;
      while (cpt < 3) {
        if ($(".button_" + (cpt + 1)).hasClass("current")) {
          element_reminder = cpt + 1;
        }
        $(".button_" + (cpt + 1)).removeClass("current");
        $(".slide" + (cpt + 1)).css("position", "absolute");
        cpt = cpt + 1;
      }
      if ((element_reminder + 1) > 3) {
        element_reminder = element_reminder - 3;
      }
      $(".button_" + (element_reminder + 1)).addClass("current");
      return $(".slide" + (element_reminder + 1)).css("position", "relative");
    }), 8000);
    $(".agriculture").hover((function() {
      return $(".main_menu_lvl2").css("display", "flex");
    }), function() {
      return $(".main_menu_lvl2").css("display", "none");
    });
    $(".redirection .main_menu li").click(function() {
      $(this).siblings().removeClass("current");
      return $(this).addClass("current");
    });
    return $('.slider_promo ul.menu li').click(function() {
      $(this).siblings().removeClass("current");
      return $(this).addClass("current");
    });
  });

}).call(this);
