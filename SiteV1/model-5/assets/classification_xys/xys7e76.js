(function() {
  window.classification_div = function(obj) {
    var clf_object;
    obj.parent().children().slice(obj.index() + 1).remove();
    if (obj.find(":selected").data("haschildren") === true) {
      clf_object = obj.find(":selected");
      return $.get("/classifications/c/" + clf_object.data("classname") + "/" + clf_object.data("family"), function(result) {
        obj.parent().append(result);
        obj.parent().children().last().attr("name", obj.attr("name"));
        obj.parent().children().last().attr("class", obj.attr("class"));
        return obj.attr("class");
      });
    }
  };

}).call(this);
