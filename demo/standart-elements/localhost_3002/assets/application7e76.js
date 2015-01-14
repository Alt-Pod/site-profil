(function() {
  $(function() {
    $(document).foundation();
  });

  $(document).ready(function() {
    $(".slider_slick").slick({
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      dots: true
    });
    $(".img_slider-1").slick({
      lazyLoad: 'ondemand',
      speed: 500,
      draggable: false
    });
    return $(".img_slider-2").slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      speed: 500,
      draggable: false
    });
  });

}).call(this);
