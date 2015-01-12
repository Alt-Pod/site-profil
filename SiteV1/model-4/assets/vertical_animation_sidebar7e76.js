(function() {
  $(document).ready(function() {
    var first_to_last, index_last, list_element, margin_top, vertical_move;
    list_element = $(".ticker_sidebar li");
    margin_top = "-90px";
    index_last = list_element.last().index();
    first_to_last = function() {
      var element;
      element = $(".ticker_sidebar li:eq(0)").detach();
      return element.appendTo(".ticker_sidebar");
    };
    vertical_move = function(sec) {
      return $(".ticker_sidebar li:eq(0)").animate({
        marginTop: margin_top
      }, {
        queue: true,
        duration: sec * 1000,
        complete: function() {
          first_to_last();
          $(".ticker_sidebar li:eq(" + index_last + ")").css("margin-top", "0px");
          return vertical_move(5);
        }
      });
    };
    if (list_element.length > 3) {
      vertical_move(5);
    }
    $(".ticker_sidebar").mouseover(function() {
      return $(".ticker_sidebar li").stop();
    });
    return $(".ticker_sidebar").mouseout(function() {
      if (list_element.length > 3) {
        return vertical_move(1);
      }
    });
  });

}).call(this);
