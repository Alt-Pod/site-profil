(function() {
  var _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).directory_xys || (_base.directory_xys = {});

  (_base1 = window.xys.directory_xys).sectors || (_base1.sectors = {});

  window.xys.directory_xys.sectors.sortable = function() {
    return $(function() {
      return $("#list_directory_sectors").sortable({
        axis: "y",
        update: function() {
          return $.post($(this).data("update-url"), $(this).sortable("serialize"));
        }
      });
    });
  };

}).call(this);
