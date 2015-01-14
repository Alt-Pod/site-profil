(function() {
  $(document).ready(function() {
    var add_full_star, icon, link_wrapper, obj, rmv_full_star;
    obj = $('.ask_rate');
    icon = obj.find('.icon');
    link_wrapper = icon.parent('a');
    add_full_star = function() {
      var cpt, icon_pos, _results;
      if (!(obj.hasClass('secured'))) {
        $(this).removeClass('fa-star-o');
        $(this).addClass('fa-star');
        icon_pos = $(this).parents('a').index() + 1;
        cpt = 0;
        _results = [];
        while (icon_pos > cpt) {
          link_wrapper.eq(cpt).children('.icon').removeClass('fa-star-o');
          link_wrapper.eq(cpt).children('.icon').addClass('fa-star');
          _results.push(cpt = cpt + 1);
        }
        return _results;
      }
    };
    rmv_full_star = function() {
      if (!(obj.hasClass('secured'))) {
        icon.removeClass('fa-star');
        return icon.addClass('fa-star-o');
      }
    };
    icon.on("mouseenter", add_full_star);
    icon.on("mouseleave", rmv_full_star);
    return link_wrapper.click(function(e) {
      var cpt, icon_pos, _results;
      e.preventDefault();
      obj.toggleClass('secured');
      if (obj.hasClass('secured')) {
        icon_pos = $(this).index() + 1;
        cpt = 0;
        _results = [];
        while (icon_pos > cpt) {
          link_wrapper.eq(cpt).children('.icon').removeClass('fa-star-o');
          link_wrapper.eq(cpt).children('.icon').addClass('fa-star');
          link_wrapper.eq(cpt).children('.icon').addClass('secured');
          _results.push(cpt = cpt + 1);
        }
        return _results;
      } else {
        return rmv_full_star();
      }
    });
  });

}).call(this);
