(function() {
  var ticker_animated;

  ticker_animated = function(obj, duration) {
    var height_container, height_el, margin;
    if (duration == null) {
      duration = 15000;
    }
    height_container = obj.height();
    height_el = obj.children('ul').height();
    if (height_container < height_el) {
      obj.children('ul').css('margin-top', height_container);
      margin = -height_el;
      return obj.children('ul').animate({
        marginTop: margin
      }, {
        queue: true,
        easing: 'linear',
        duration: duration,
        complete: function() {
          return ticker_animated(obj);
        }
      });
    }
  };

  $(document).ready(function() {
    return ticker_animated($('.ticker'));
  });

}).call(this);
