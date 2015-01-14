(function() {
  $(function() {
    $(document).foundation();
  });

  $(document).ready(function() {
    $(".img_slider-1").slick({
      speed: 500,
      draggable: false
    });
    $(".img_slider-2").slick({
      slidesToShow: 3,
      speed: 500,
      draggable: false
    });
    $(".video_slider-1").slick({
      speed: 500,
      draggable: false
    });
    $(".video_slider-2").slick({
      slidesToShow: 3,
      speed: 500,
      draggable: false
    });
    return $(".vid_carousel").slick({
      slidesToShow: 4,
      speed: 500,
      draggable: false
    });
  });

}).call(this);
