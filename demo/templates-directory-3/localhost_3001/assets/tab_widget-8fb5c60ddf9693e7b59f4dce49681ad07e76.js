(function() {
  $(document).ready(function() {
    var li, menu, obj, tab;
    obj = $('.tab_widget');
    menu = obj.find('ul.menu');
    li = menu.children('li');
    tab = $('.tab_widget').find('.tab');
    return li.click(function(e) {
      var pos;
      e.preventDefault;
      pos = $(this).index();
      tab.removeClass('current');
      li.removeClass('current');
      $(this).addClass('current');
      return tab.eq(pos).addClass('current');
    });
  });

}).call(this);
