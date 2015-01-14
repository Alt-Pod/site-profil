(function() {
  $(document).ready(function() {
    var block, block_vid;
    block = $('.latest');
    block.children('.content').find('.preview').children('a').click(function(e) {
      e.preventDefault();
      $(this).parents('.content').find('.preview').children('a').removeClass('current');
      $(this).addClass('current');
      $(this).parents('.content').find('.main').children('img').remove();
      return $(this).children('img').clone().appendTo($(this).parents('.content').find('.main'));
    });
    block_vid = $('.latest-video');
    return block_vid.children('.content').find('.preview').children('a').click(function(e) {
      var link, parts, url;
      e.preventDefault();
      link = $(this).children('img').attr('src');
      parts = link.split("vi/");
      url = parts[1].split("/0");
      $(this).parents('.content').find('.preview').children('a').removeClass('current');
      $(this).addClass('current');
      $(this).parents('.content').find('.main').children('iframe').remove();
      return $(this).parents('.content').find('.main').append('<iframe width="100%" height="366" src="//www.youtube.com/embed/' + url[0] + '" frameborder="0" allowfullscreen></iframe>');
    });
  });

}).call(this);
