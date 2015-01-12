
function locations_tag(obj)
{
    //reset everything after this select_tag
    obj.parent().children().slice(obj.index() + 1).val('');
    obj.parent().children().slice(obj.index() + 1).find("option[value!='']").remove();

    if (obj.find(":selected").data('haschildren') == true) {
        //#TODO fix url_path
        $.get('/geographic_coordinates/l/' + obj.find(":selected").data('id'), function (result) {
            $(obj.parent().children()[obj.index() + 1]).append(result);
        })
    }
}
;
