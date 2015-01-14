(function() {
  $(document).ready(function() {
    var cpt, obj, obj_list;
    obj_list = [$('.block_featured'), $('.card'), $('.core_profil'), $('.targeting-js'), $('.prev_comments .block'), $('.core_content_3 .block')];
    cpt = 0;
    while (obj_list[cpt]) {
      obj = obj_list[cpt];
      obj.each(function() {
        var half, half_star, label, nb_full_stars, rating, split_strg, star, value, _ref, _ref1;
        obj = $(this);
        rating = obj.find('.ratings');
        label = rating.find('label');
        star = rating.find('.icon');
        half_star = rating.find('.icon-half');
        split_strg = label.text().split(' : ');
        if (!split_strg[1]) {
          split_strg = split_strg[0].split('note :');
        }
        value = parseFloat(split_strg[1]);
        nb_full_stars = parseInt(value);
        if ((0.75 > (_ref = value - nb_full_stars) && _ref > 0.25)) {
          half = true;
        } else if ((1 > (_ref1 = value - nb_full_stars) && _ref1 >= 0.75)) {
          nb_full_stars = nb_full_stars + 1;
          half = false;
        } else {
          half = false;
        }
        while (nb_full_stars > 0) {
          star.clone().appendTo(rating);
          nb_full_stars = nb_full_stars - 1;
        }
        if (half === true) {
          half_star.clone().appendTo(rating);
        } else {
          half_star.remove();
        }
        star.eq(0).remove();
        half_star.eq(0).remove();
        return rating.children('div').removeClass('hidden');
      });
      cpt = cpt + 1;
    }
    return $('.tab.review').removeClass('current');
  });

}).call(this);
