(function() {
  $(document).ready(function() {
    var tab;
    tab = $('.tab_widget');
    tab.each(function() {
      return tab.children('.content').each(function() {
        if (!($(this).hasClass("tab1"))) {
          return $(this).css("display", "none");
        }
      });
    });
    $('.tab_widget').children('.tabs').children('ul').children('li').click(function(e) {
      var ref;
      e.preventDefault();
      ref = $(this).index() + 1;
      $(this).parents('.tabs').siblings('.content').css("display", "none");
      return $(this).parents('.tabs').siblings(".content.tab" + ref).css("display", "block");
    });
    $.getJSON('/data.json', function(data) {
      var testhandlebar;
      testhandlebar = HandlebarsTemplates['main/tab1'](data);
      return tab.find('.content.tab1').html(testhandlebar);
    });
    $.getJSON('/data.json', function(data) {
      var testhandlebar;
      testhandlebar = HandlebarsTemplates['main/tab2'](data);
      return tab.find('.content.tab2').html(testhandlebar);
    });
    return $.getJSON('/data.json', function(data) {
      var testhandlebar;
      testhandlebar = HandlebarsTemplates['main/tab3'](data);
      return tab.find('.content.tab3').html(testhandlebar);
    });
  });

}).call(this);
