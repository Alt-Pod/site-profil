(function() {
  $(document).ready(function() {
    var obj, test, timer;
    obj = $('.timer');
    test = function(object, day, hour, min, sec) {
      if (hour === 0 && sec === 0) {
        return setTimeout(function() {
          return timer(object, day - 1, 23, 59, 59);
        }, 1000);
      } else if (min === 0 && sec === 0) {
        return setTimeout(function() {
          return timer(object, day, hour - 1, 59, 59);
        }, 1000);
      } else if (sec === 0) {
        return setTimeout(function() {
          return timer(object, day, hour, min - 1, 59);
        }, 1000);
      } else if (day !== 0) {
        return setTimeout(function() {
          return timer(object, day, hour, min, sec - 1);
        }, 1000);
      }
    };
    timer = function(object, day, hour, min, sec) {
      object.children('.days').html(day);
      object.children('.hours').html(hour);
      object.children('.min').html(min);
      object.children('.sec').html(sec);
      return test(object, day, hour, min, sec);
    };
    return timer(obj, 78, 0, 0, 7);
  });

}).call(this);
