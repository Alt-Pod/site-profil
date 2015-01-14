(function() {
  $(document).ready(function() {
    var cpt, initialize, nb_cards, print_card_rating_bar, _results;
    initialize = function(card) {
      var lati, longi, map, mapCanvas, mapOptions;
      card.find(".map_canvas").attr('id', 'current_map_to_display');
      mapCanvas = document.getElementById("current_map_to_display");
      lati = parseFloat(card.find(".map_canvas").children('span.lati').html());
      longi = parseFloat(card.find(".map_canvas").children('span.longi').html());
      mapOptions = {
        center: new google.maps.LatLng(lati, longi),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(mapCanvas, mapOptions);
      card.find(".map_canvas").attr('id', '');
    };
    google.maps.event.addDomListener(window, "load", initialize);
    if ($('body').children('div').hasClass('profil_page')) {
      initialize($('.detailed-card'));
    }
    $(document).on("click", ".search_result a.display-more", function() {
      var current_card;
      current_card = $(this).parents('.card');
      if ($(this).find('.icon').hasClass('fa-plus-circle')) {
        $(this).find('.icon').removeClass('fa-plus-circle');
        $(this).find('.icon').addClass('fa-minus-circle');
      } else {
        $(this).find('.icon').removeClass('fa-minus-circle');
        $(this).find('.icon').addClass('fa-plus-circle');
      }
      current_card = $(this).parents('.card');
      current_card.find('.sub-card').toggleClass('sub-card-displayed');
      current_card.find('.sub-sub-card').toggleClass('sub-card-displayed');
      print_card_rating_bar($('.card'));
      return initialize(current_card);
    });
    print_card_rating_bar = function(card) {
      var background_color, rate;
      rate = card.find('.rate').html().split("/");
      background_color = "rgba(" + (200 - parseInt(2 * rate[0] / rate[1] * 100)) + "," + parseInt(2 * rate[0] / rate[1] * 100) + ",0,1)";
      card.find('.rate-bar').children('.bar').css('width', rate[0] / rate[1] * 100 + "%");
      return card.find('.rate-bar').children('.bar').css('background', background_color);
    };
    $('.search_result header .display_filters').click(function(e) {
      e.preventDefault;
      $(this).css('pointer-events', 'none');
      $(this).toggleClass('upside-down');
      $(this).siblings('.filters').toggleClass('displayed');
      $('.search_result header .order_block').remove();
      if ($('.search_result .core .order').css('height') === "0px") {
        return $('.search_result .core .order').animate({
          height: '68px'
        }, 500, "linear", function() {
          return $('.search_result header .display_filters').css('pointer-events', 'initial');
        });
      } else {
        return $('.search_result .core .order').animate({
          height: '0'
        }, 500, "linear", function() {
          $('.search_result .core .order').clone().appendTo("header");
          $('.search_result header .order').addClass('order_block');
          $('.search_result header .order_block').removeClass('order');
          $('.search_result header .order_block').css('height', '195px');
          return $('.search_result header .display_filters').css('pointer-events', 'initial');
        });
      }
    });
    cpt = 0;
    nb_cards = $('.card_promo').length;
    if (nb_cards < $('.card').length) {
      nb_cards = $('.card').length;
    }
    _results = [];
    while (cpt < nb_cards) {
      if ($('.card_promo').eq(cpt).length !== 0) {
        print_card_rating_bar($('.card_promo').eq(cpt));
      }
      if ($('.card').eq(cpt).length !== 0) {
        print_card_rating_bar($('.card').eq(cpt));
      }
      if ($('.detailed-card').eq(cpt).length !== 0) {
        print_card_rating_bar($('.detailed-card').eq(cpt));
      }
      _results.push(cpt = cpt + 1);
    }
    return _results;
  });

}).call(this);
