(function() {
  var openPopup, _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).multimedias || (_base.multimedias = {});

  (_base1 = window.xys.multimedias).attachments || (_base1.attachments = {});

  window.xys.multimedias.attachments.load_links = function() {
    return $(".multimedias_xys_attachments_content").ready(function() {
      $(".multimedias_xys_attachments_content .left_content ul li").click(function() {
        $(".multimedias_xys_attachments_content .left_content ul li").removeClass("active");
        $(this).addClass("active");
        $(".multimedias_xys_attachments_content #search_state").val($(this).data("state"));
        return $("#form_search").submit();
      });
      return $(".multimedias_xys_attachments_content .left_content ul li:first").addClass("active");
    });
  };

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 450;
    height = 310;
    top = 50;
    id = "attachment";
    if (action === "choice") {
      width = 710;
      height = 490;
      top = 50;
      id = "choice_attachment";
    }
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.multimedias.attachments.openPopup = openPopup;

}).call(this);
