$(function () {
    $('#donner .gategory').each(function (c_index) {
        $('#gategory').append("<option value=" + $(this).attr('data-id') + " > " + $(this).attr('data-name') + "  </option>")
    });
    show_sousCategory(1);
    $('#gategory').change(function () {
        var selected_id = $(this).val()
        show_sousCategory(selected_id);
    });
    function show_sousCategory(id) {
        $('#sous_category').html('');
        $('#donner .gategory[data-id="'+id+'"] .sous_category ').each(function(sc_index){
            $('#sous_category').append('<option> '+ $(this).attr('data-name') +' </option>')
        });
    }

    $(".header i").click(function () {
        if ($(this).siblings("ul").css("display")=="none" )
        {
            $(this).siblings("ul").slideDown( 0, function() {
            });
            $(this).removeClass( "closed" );
            $(this).addClass( "opend" );
        }
        else
        {
            $(this).siblings("ul").slideUp( 0, function() {
            });
            $(this).removeClass( "opend" );
            $(this).addClass( "closed" );
        }

    });
});
window.onload=function(){
    if($(window).width() > 839)
        if ($(".kiinov_left").height() < $(".kiinov_container").height())
        {
            $(".kiinov_left").css("min-height", ($(".kiinov_container").height() + 300));
        }
        else
        {
            //nothing
        }
    $(".complete_graphism").css("border-width",($(".text").width()/7.7)  +"px " + ($(".text").width() + 20) +  "px 0 0");

};
$( window ).resize(function() {
    if($(window).width() < 826)
    {
        $(".kiinov_left").css("min-height","0");
    }
    else
    {
        $(".kiinov_left").css("min-height", ($(".kiinov_container").height() + 300));
    }
    $(".complete_graphism").css("border-width",($(".text").width()/7.7)  +"px " + ($(".text").width() + 20) +  "px 0 0");
});
