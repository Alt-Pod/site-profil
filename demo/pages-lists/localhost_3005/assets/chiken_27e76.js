(function() {
  $(document).ready(function() {
    var list_el;
    list_el = $('.vid_carousel');
    return list_el.find('.each').click(function(e) {
      var link, parts, url;
      e.preventDefault();
      link = $(this).children('img').attr('src');
      parts = link.split("vi/");
      url = parts[1].split("/0");
      $(this).parents('.slider_container').siblings('.vid').children('iframe').remove();
      $(this).parents('.slider_container').siblings('.vid').append('<iframe width="100%" height="366" src="//www.youtube.com/embed/' + url[0] + '" frameborder="0" allowfullscreen></iframe>');
      $(this).siblings('.each').removeClass('current');
      $(this).addClass('current');
      $(this).parents('.content').find('.main').children('img').remove();
      return $(this).children('img').clone().appendTo($(this).parents('.content').find('.main'));
    });
  });

}).call(this);
