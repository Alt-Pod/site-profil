(function() {
  var openPopup, _base;

  window.xys || (window.xys = {});

  (_base = window.xys).comment_xys || (_base.comment_xys = {});

  window.xys.comment_xys.load_links = function() {
    return $(".comment_xys_content").ready(function() {
      $(".comment_xys_content .left_content ul li").click(function() {
        $(".comment_xys_content .left_content ul li").removeClass("active");
        $(this).addClass("active");
        $(".comment_xys_content #search_state").val($(this).data("state"));
        return $("#form_search").submit();
      });
      return $(".comment_xys_content .left_content ul li:first").addClass("active");
    });
  };

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 500;
    height = 370;
    top = 50;
    id = "comment";
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.comment_xys.openPopup = openPopup;

}).call(this);
