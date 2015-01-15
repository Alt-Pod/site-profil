(function() {
  $(document).ready(function() {
    var animate_list, animated_clock, normalize_time, timer_time;
    animate_list = function(list, setup_timer) {
      list.children('li').css("display", "none");
      list.children('li.current').css("display", "inline-block");
      list.children('li.current').css("margin-left", "-" + (list.children('li.current').css('width')));
      return list.children('li.current').animate({
        marginLeft: parseFloat(list.css('width').replace('px', '')) + "px"
      }, setup_timer * 1000, "linear", function() {});
    };
    normalize_time = function(seconds) {
      var tmps;
      if (seconds < 10) {
        return "00:0" + seconds;
      }
      if ((9 < seconds && seconds < 60)) {
        return "00:" + seconds;
      }
      if ((59 < seconds && seconds < 3600)) {
        tmps = seconds;
        seconds = tmps % 60;
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        tmps = Math.floor(tmps / 60);
        if (tmps < 10) {
          tmps = "0" + tmps;
        }
        return tmps + ":" + seconds;
      } else {
        return "NULL";
      }
    };
    animated_clock = function(current_pos, max_clock, step) {
      return setTimeout(function() {
        $(".digital_print span").html(normalize_time(max_clock - current_pos));
        $(".spinner").css("transform", "rotate(" + current_pos * (360 / max_clock) + "deg)");
        if (current_pos === 0) {
          $(".mask").css("opacity", 1);
          $(".filler").css("opacity", 0);
        }
        if (current_pos === max_clock / 2) {
          $(".mask").css("opacity", 0);
          $(".filler").css("opacity", 1);
        }
        if (current_pos === max_clock) {
          current_pos = 0;
          setTimeout(function() {
            $(".mask").css("opacity", 1);
            return $(".filler").css("opacity", 0);
          }, step * 1000);
        }
        return animated_clock(current_pos + 1, max_clock, step);
      }, step * 1000);
    };
    timer_time = 30;
    animated_clock(0, timer_time, 1);
    animate_list($('ul.turning-items'), timer_time);
    return $('button.stop-timer').click(function(e) {
      var par;
      e.preventDefault;
      $('button.stop-timer').remove();
      $('.frozen_print').css('display', 'initial');
      $('.frozen_print span').html($(".digital_print span").html());
      par = $(".digital_print span").html().split(":");
      $('.frozen_print .percent label').html(Math.floor((timer_time - (parseInt(par[0]) * 60 + parseInt(par[1]))) / timer_time * 10000) / 100 + "%");
      return $('.frozen_print .percent .bar .progress').css('width', $(".frozen_print .percent label").html());
    });
  });

}).call(this);
