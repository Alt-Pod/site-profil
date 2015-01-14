(function() {
  var multi_grid, reset_default;

  reset_default = function(ul, menu, obj) {
    ul.removeClass('small-block-grid-3');
    ul.removeClass('small-block-grid-2');
    obj.removeClass('small_mod_product');
    obj.removeClass('medium_mod_product');
    obj.removeClass('thin_mod_product');
    obj.removeClass('mod_product');
    obj.removeClass('thinner_mod_product');
    obj.children('.row').children('.columns').css('display', 'block');
    obj.children('.row').children('.columns.pic').addClass('small-2');
    obj.children('.row').children('.columns.info-1').addClass('small-3');
    obj.children('.row').children('.columns.info-2').addClass('small-2');
    obj.children('.row').children('.columns.info-3').addClass('small-2');
    return obj.children('.row').children('.columns.coord').addClass('small-3');
  };

  multi_grid = function(ul, menu, obj) {
    menu.children('ul').children('li').eq(0).click(function(e) {
      e.preventDefault();
      reset_default(ul, menu, obj);
      ul.addClass('small-block-grid-3');
      obj.addClass('small_mod_product');
      obj.children('.row').children('.columns').removeClass('small-2');
      obj.children('.row').children('.columns').removeClass('small-3');
      obj.children('.row').children('.columns').css('display', 'none');
      obj.children('.row').children('.columns.pic').css('display', 'block');
      return obj.children('.row').children('.columns.info-1').css('display', 'block');
    });
    menu.children('ul').children('li').eq(1).click(function(e) {
      e.preventDefault();
      reset_default(ul, menu, obj);
      ul.addClass('small-block-grid-2');
      obj.addClass('medium_mod_product');
      obj.children('.row').children('.columns').removeClass('small-2');
      obj.children('.row').children('.columns').removeClass('small-3');
      obj.children('.row').children('.columns').css('display', 'none');
      obj.children('.row').children('.columns.pic').css('display', 'block');
      obj.children('.row').children('.columns.info-1').css('display', 'block');
      return obj.children('.row').children('.columns.info-2').css('display', 'block');
    });
    menu.children('ul').children('li').eq(2).click(function(e) {
      e.preventDefault();
      reset_default(ul, menu, obj);
      return obj.addClass('mod_product');
    });
    menu.children('ul').children('li').eq(3).click(function(e) {
      e.preventDefault();
      reset_default(ul, menu, obj);
      return obj.addClass('thin_mod_product');
    });
    return menu.children('ul').children('li').eq(4).click(function(e) {
      e.preventDefault();
      reset_default(ul, menu, obj);
      return obj.addClass('thinner_mod_product');
    });
  };

  $(document).ready(function() {
    return multi_grid($('.list-product'), $('.control_block_product'), $('.mod_product'));
  });

}).call(this);
