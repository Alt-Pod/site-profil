(function() {
  var openPopup, _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).directory_xys || (_base.directory_xys = {});

  (_base1 = window.xys.directory_xys).directories || (_base1.directories = {});

  window.xys.directory_xys.directories.load_links = function() {
    return $(".directory_xys_directories_content").ready(function() {
      $(".directory_xys_directories_content .left_content ul li").click(function() {
        $(".directory_xys_directories_content .left_content ul li").removeClass("active");
        $(this).addClass("active");
        $(".directory_xys_directories_content #search_state").val($(this).data("state"));
        return $("#form_search").submit();
      });
      return $(".directory_xys_directories_content .left_content ul li:first").addClass("active");
    });
  };

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 900;
    height = 500;
    top = 40;
    id = "directories";
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.directory_xys.directories.openPopup = openPopup;

  window.xys.directory_xys.directories.observe_menu_form = function() {
    $(".directory_xys_directories_menu_form .menu .item div").hover((function() {
      return $(this).addClass("over");
    }), function() {
      return $(this).removeClass("over");
    });
    $(".directory_xys_directories_menu_form .menu .item div").each(function(i, item) {
      return $(item).click(function() {
        $(".directory_xys_directories_menu_form .detail").css("display", "none");
        $(".directory_xys_directories_menu_form .detail:eq(" + i + ")").css("display", "block");
        if ($(this).next().is("ul")) {
          return $(this).next().find(".item div").filter(":first").click();
        } else {
          $(".directory_xys_directories_menu_form .menu .sl").removeClass("sl");
          $(this).addClass("sl");
          if ($(this).parents(".items").length === 2) {
            return $($(this).parents(".item").get(1)).find("div:first").addClass("sl");
          }
        }
      });
    });
    return $(".directory_xys_directories_menu_form .menu .item div:first").addClass("sl");
  };

}).call(this);
