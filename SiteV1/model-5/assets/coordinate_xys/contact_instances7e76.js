(function() {
  var openPopup, _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).coordinate || (_base.coordinate = {});

  (_base1 = window.xys.coordinate).contact_instances || (_base1.contact_instances = {});

  openPopup = function(action, url) {
    var height, id, popup, top, width;
    width = 530;
    height = 380;
    top = 50;
    id = "contact_instance";
    return popup = createPopup(id, {
      width: width,
      height: height,
      top: top,
      loaderTitle: "Patientez : Chargement de la page encours ...",
      url: url
    });
  };

  window.xys.coordinate.contact_instances.openPopup = openPopup;

  window.xys.coordinate.contact_instances.sortable = function() {
    return $(function() {
      $("#list_contact_instances").sortable({
        axis: "y",
        update: function() {
          return $.post($(this).data("update-url"), $(this).sortable("serialize"));
        }
      });
      return $("#list_contact_instances").disableSelection();
    });
  };

}).call(this);
