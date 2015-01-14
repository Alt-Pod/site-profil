(function() {
  $(document).ready(function() {
    var random_img;
    random_img = function() {
      var height, link, width;
      link = 'http://lorempixel.com/';
      width = Math.floor((Math.random() * 500) + 1);
      height = Math.floor((Math.random() * 500) + 1);
      link = link + width + '/' + height;
      $('.example-img-placeholder').find('img').attr("src", link);
      return setTimeout(function() {
        return random_img();
      }, 1000);
    };
    return random_img();
  });

}).call(this);
