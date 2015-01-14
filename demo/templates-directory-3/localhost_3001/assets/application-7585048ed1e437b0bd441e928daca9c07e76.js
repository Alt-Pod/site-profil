(function() {
  $(document).foundation();

  $(function() {
    $(document).foundation();
  });

  $(document).ready(function() {
    return $(".slider_slick").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      dots: true
    });
  });

}).call(this);
