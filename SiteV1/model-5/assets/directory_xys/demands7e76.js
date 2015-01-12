(function() {
  var openPopup, _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).directory_xys || (_base.directory_xys = {});

  (_base1 = window.xys.directory_xys).demands || (_base1.demands = {});

  window.xys.directory_xys.demands.load_links = function() {
    return $(".directory_xys_demands_content").ready(function() {
      $(".directory_xys_demands_content .left_content ul li").click(function() {
        $(".directory_xys_demands_content .left_content ul li").removeClass("active");
        $(this).addClass("active");
        $(".directory_xys_demands_content #search_state").val($(this).data("state"));
        return $("#form_search").submit();
      });
      return $(".directory_xys_demands_content .left_content ul li:first").addClass("active");
    });
  };

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 650;
    height = 500;
    top = 50;
    id = "demand";
    if (action === "validate") {
      width = 410;
      height = 300;
      top = 90;
    }
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.directory_xys.demands.openPopup = openPopup;

}).call(this);
