(function() {
  $(function() {
    $('.on-off-button li').click(function() {
      $(this).parent().find('li').toggleClass("on");
    });
  });

}).call(this);
