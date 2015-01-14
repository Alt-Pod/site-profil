(function() {
  $(document).ready(function() {
    var chevron_down, chevron_up, content, hide_img, length_three_remainder, print_to_top, ticker, ticker_wrapper;
    ticker = $('.ticker_product');
    ticker_wrapper = $('.ticker-wrapper');
    content = ticker_wrapper.children('.content');
    chevron_up = ticker_wrapper.children('a.arrow').eq(0);
    chevron_down = ticker_wrapper.children('a.arrow').eq(1);
    length_three_remainder = function(obj) {
      var mod, padding, _ref;
      if (obj.children('a').length === 0) {
        return 0;
      } else if ((0 < (_ref = obj.children('a').length) && _ref < 4)) {
        padding = chevron_up.css('height');
        chevron_up.css('display', 'none');
        chevron_down.css('display', 'none');
        content.css('padding', padding);
        return 0;
      } else if (obj.children('a').length % 3 !== 0 && obj.children('a').length % 3 < 0) {
        return mod = -obj.children('a').length % 3;
      } else {
        return mod = obj.children('a').length % 3;
      }
    };
    hide_img = function(obj, remainder) {
      var cpt, nb_el, nb_loop, _results;
      nb_el = obj.children('a').length;
      nb_loop = nb_el - 3;
      if (nb_loop < 4) {

      } else {
        cpt = 0;
        _results = [];
        while (cpt < nb_loop) {
          obj.children('a').eq(3 + cpt).addClass('unseen');
          _results.push(cpt = cpt + 1);
        }
        return _results;
      }
    };
    print_to_top = function(obj) {
      var pos;
      pos = obj.children('a').not('.unseen').index() + 3;
      obj.children('a').addClass('unseen');
      if (pos + 1 < obj.children('a').length) {
        return obj.children('a').eq(pos).removeClass('unseen');
      } else {
        obj.children('a').eq(0).removeClass('unseen');
        obj.children('a').eq(1).removeClass('unseen');
        obj.children('a').eq(2).removeClass('unseen');
        if ((pos + 2) < obj.children('a').length) {
          return obj.children('a').eq(pos + 1).removeClass('unseen');
        } else {
          obj.children('a').eq(0).removeClass('unseen');
          obj.children('a').eq(1).removeClass('unseen');
          if ((pos + 3) < obj.children('a').length) {
            return obj.children('a').eq(pos + 2).removeClass('unseen');
          } else {
            return obj.children('a').eq(0).removeClass('unseen');
          }
        }
      }
    };
    hide_img(content, length_three_remainder(content));
    chevron_up.click(function(e) {
      return print_to_top(content);
    });
    return chevron_down.click(function(e) {});
  });

}).call(this);
