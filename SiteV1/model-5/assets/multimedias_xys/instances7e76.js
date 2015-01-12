(function() {
  var _base, _base1;

  window.xys || (window.xys = {});

  (_base = window.xys).multimedias || (_base.multimedias = {});

  (_base1 = window.xys.multimedias).instances || (_base1.instances = {});

  window.xys.multimedias.instances.form_observe = function(choice_attachment_path, kind, attachable_id, attachable_kind) {
    $(".media-" + attachable_id + attachable_kind + " input[type=radio]").each(function(i, item) {
      return $(item).click(function() {
        $(".media-" + attachable_id + attachable_kind + " .bk_choice_attachment").find("input[type=text],input[type=file]").attr("disabled", true);
        return $(".media-" + attachable_id + attachable_kind + " .bk_choice_" + this.value.toString()).find("input").attr("disabled", false);
      });
    });
    $(".media-" + attachable_id + attachable_kind + " input[type=radio]:first").click();
    return $(".media-" + attachable_id + attachable_kind + " #choice_attachment_btn").click(function() {
      var instance_kind;
      if (kind === "") {
        instance_kind = $(".media-" + attachable_id + attachable_kind + " #instance_kind").val();
      } else {
        instance_kind = kind;
      }
      if (instance_kind !== "" && $(".media-" + attachable_id + attachable_kind + " #choice_radio_2").is(":checked")) {
        return window.xys.multimedias.attachments.openPopup("choice", choice_attachment_path + "?type=" + instance_kind + '&attachable_id=' + attachable_id);
      }
    });
  };

  window.xys.multimedias.instances.observe_list = function(attachable_id, attachable_kind) {
    $(function() {
      $("#list_instances_" + attachable_id + "" + attachable_kind).sortable({
        axis: "y",
        update: function() {
          return $.post($(this).data("update-url"), $(this).sortable("serialize"));
        }
      });
      return $("#list_instances_" + attachable_id + "" + attachable_kind).disableSelection();
    });
    return $(".active_instance_media_" + attachable_id + "" + attachable_kind).click(function() {
      return $.get($(this).data("path"), {
        active: this.checked
      });
    });
  };

}).call(this);
