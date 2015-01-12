(function() {
  var openPopup, _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).coordinate || (_base.coordinate = {});

  (_base1 = window.xys.coordinate).coordinate_instances || (_base1.coordinate_instances = {});

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 780;
    height = 500;
    top = 40;
    id = "coordinate_instance";
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.coordinate.coordinate_instances.openPopup = openPopup;

  window.xys.coordinate.coordinate_instances.sortable = function(localisable_id) {
    return $(function() {
      $("#list_coordinate_instances_" + localisable_id).sortable({
        axis: "y",
        update: function() {
          return $.post($(this).data("update-url"), $(this).sortable("serialize"));
        }
      });
      return $("#list_coordinate_instances_" + localisable_id).disableSelection();
    });
  };

}).call(this);
