(function() {
  $(document).ready(function() {
    var el;
    el = $('.block_pic');
    return el.find('ul.index li').click(function(e) {
      e.preventDefault();
      el.find('ul.index li').removeClass('current');
      el.find('ul.index li').removeClass('current');
      $(this).addClass('current');
      el.find('ul.pic').children('li').removeClass('current');
      return el.find('ul.pic').children('li').eq($(this).index()).addClass('current');
    });
  });

}).call(this);
