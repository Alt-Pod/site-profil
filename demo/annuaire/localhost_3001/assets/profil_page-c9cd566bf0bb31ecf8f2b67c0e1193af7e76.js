(function() {
  $(document).ready(function() {
    return $('.profil_page header a.display_filters').click(function(e) {
      e.preventDefault;
      $(this).css('pointer-events', 'none');
      $(this).toggleClass('upside-down');
      $(this).siblings('.filters').toggleClass('displayed');
      return $(this).css('pointer-events', 'initial');
    });
  });

}).call(this);
