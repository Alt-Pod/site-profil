(function() {
  var set_full_body;

  set_full_body = function(page) {
    page.parents('body').css('width', '100%');
    return page.parents('body').css('min-width', '800px');
  };

  set_full_body($('.search_result'));

}).call(this);
