(function() {
  $(document).ready(function() {
    var link_to_close;
    link_to_close = $('.ask_rdv .head a .icon');
    return link_to_close.click(function(e) {
      e.preventDefault;
      $('.hide-background').css('display', 'none');
      return $('.ask_rdv ').css('display', 'none');
    });
  });

}).call(this);
