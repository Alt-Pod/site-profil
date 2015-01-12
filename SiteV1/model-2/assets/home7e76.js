(function() {
  jQuery(function() {
    jQuery('.svgmenu.expertise').click(function() {
      return window.location = 'metiers/expertise';
    });
    jQuery('.svgmenu.consulting').click(function() {
      return window.location = '/metiers/consulting';
    });
    jQuery('.svgmenu.support').click(function() {
      return window.location = 'metiers/support';
    });
    jQuery('.svgmenu.devloppment').click(function() {
      return window.location = 'metiers/integration';
    });
    return jQuery('.svgmenu.solutions').click(function() {
      return window.location = 'metiers/solution';
    });
  });

}).call(this);
