(function() {
  $(document).ready(function() {
    return $('.multiple_frame ul li').click(function(e) {
      e.preventDefault();
      $('.multiple_frame ul li').removeClass('current');
      $(this).addClass('current');
      $(this).parents('.multiple_frame').siblings('.content').removeClass('current');
      return $(this).parents('.multiple_frame').siblings('.content').eq($(this).index()).addClass('current');
    });
  });

}).call(this);
