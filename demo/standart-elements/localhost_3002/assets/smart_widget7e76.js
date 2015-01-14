(function() {
  $(document).ready(function() {
    var button;
    button = $('.smart_widget .head a');
    return button.click(function(e) {
      e.preventDefault();
      return $(this).parents('.head').siblings('.body').toggleClass('hidden');
    });
  });

}).call(this);
