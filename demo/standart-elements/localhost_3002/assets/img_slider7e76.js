(function() {
  $(document).ready(function() {
    var first, second;
    first = $('.img_slider-1');
    second = $('.img_slider-2');
    first.on("click", "button.slick-prev", function() {
      second.children('button.slick-prev').trigger('click');
    });
    second.on("click", "button.slick-prev", function() {
      first.children('button.slick-prev').trigger('click');
    });
    first.on("click", "button.slick-next", function() {
      second.children('button.slick-next').trigger('click');
    });
    return second.on("click", "button.slick-next", function() {
      first.children('button.slick-next').trigger('click');
    });
  });

}).call(this);
