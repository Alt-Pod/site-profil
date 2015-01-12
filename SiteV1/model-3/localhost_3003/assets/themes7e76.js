function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}
$("body").ready(function(){



    $(".click_to_hide").click(function(){
        $(".themes").css("display","none");
        $(".show_themes").css("display","block");
    });
    $(".show_themes").click(function(){
        $(".themes").css("display","block");
        $(".show_themes").css("display","none");
    });
    $(".palette2 div").click(function(){
        $("html").css("background-color", $(this).css("background-color"));
    });
    //Pour ajouter un tableau : ajouter les div dans application\_themes.html.slim, ajouter un tableau ci dessous et ajouter le css.
    var tab1=["#91A9A1", "#74958A","#ddd", "black", 'rgba(235,78,50, 0)', "white", "#ddd", "grey", "#3E5A51", "#96B6AB"];
    var tab2=["#9E846F", "#85684F", "#ddd", "black", 'rgba(50, 179, 186, 0.6)', "white", "#ddd", "grey", "#46372A", "#B6A394"];
    var tab3=["#9E846F", "#85684F", "#ddd", "black", 'rgba(50, 179, 186, 0.6)', "white", "#ddd", "grey", "#46372A", ""];
    var main_tab=[tab1,tab2 ];

    $(".palette1").click(function(){
        if ($(".show_or_hide").css("margin-left")!="112px")
        {
            $(".select_palette").css("display","none");
            $(".select_palette_container").css("display","inline-block");
            $(".show_or_hide").css("margin-left","112px");

            cpt=0;

            while (main_tab[cpt])
            {
                var cpt2=1;
                while (cpt2<4)
                {
                    $(".select_palette_container .select_palette" + (cpt+1) + " .color" + cpt2).css("background-color", main_tab[cpt][cpt2-1]);
                    $(".select_palette_container .select_palette" + (cpt+1) + " .color1").css("border-right", "1px solid white");
                    $(".select_palette_container .select_palette" + (cpt+1) + " .color2").css("border-right", "1px solid white");
                    cpt2=cpt2+1;
                }
                cpt=cpt+1;
            }
        }
        else
        {
            $(".select_palette").css("display","inline-block");
            $(".select_palette_container").css("display","none");
            $(".show_or_hide").css("margin-left","0px");
        }
    });

    $(".select_palette_container").children("div").click(function(){

        setCookie("selectedstyle", 'style', 3);

        $(".core_menu").css("background-color", $(this).children(".color1").css("background-color"));
        $("footer").css("background-color", $(this).children(".color1").css("background-color"));
        if ($(this).hasClass("select_palette1")){$(".core_menu_lvl2 .current a").css("color", main_tab[0][8]);$(".core_menu_lvl2 li a").css("color", main_tab[0][8]);$(".core_and_sidebar h1, .core_and_sidebar h2, .core_and_sidebar h3").css("color", main_tab[0][8]);};
        if ($(this).hasClass("select_palette2")){$(".core_menu_lvl2 .current a").css("color", main_tab[1][8]);$(".core_menu_lvl2 li a").css("color", main_tab[1][8]);$(".core_and_sidebar h1, .core_and_sidebar h2, .core_and_sidebar h3").css("color", main_tab[1][8]);};
        if ($(this).hasClass("select_palette3")){$(".core_menu_lvl2 .current a").css("color", main_tab[2][8]);$(".core_menu_lvl2 li a").css("color", main_tab[2][8]);$(".core_and_sidebar h1, .core_and_sidebar h2, .core_and_sidebar h3").css("color", main_tab[2][8]);};
        if ($(this).hasClass("select_palette1")) {
            $(".core_menu li").mouseenter(function () {
                $(this).css("background", main_tab[0][9]);
            });
            $(".core_menu li").mouseout(function () {
                $(this).css("background", "none");
            });
        }
        if ($(this).hasClass("select_palette2")) {
            $(".core_menu li").mouseenter(function () {
                $(this).css("background", main_tab[1][9]);
            });
            $(".core_menu li").mouseout(function () {
                $(this).css("background", "none");
            });
        }
        if ($(this).hasClass("select_palette3")) {
            $(".core_menu li").mouseenter(function () {
                $(this).css("background", main_tab[2][9]);
            });
            $(".core_menu li").mouseout(function () {
                $(this).css("background", "none");
            });
        }


        $("footer p").css("color", $(this).children(".color2").css("background-color"));

        $(".services .core_menu .services a").css("background-color", $(this).children(".color2").css("background-color"));
        $(".agencies .core_menu .agency a").css("background-color", $(this).children(".color2").css("background-color"));
        $(".documentations .core_menu .documentations a").css("background-color", $(this).children(".color2").css("background-color"));
        $(".projects .core_menu .projects a").css("background-color", $(this).children(".color2").css("background-color"));

        $(".services .core_menu .services .shape").css("border-top", "10px solid " + $(this).children(".color2").css("background-color"));
        $(".agencies .core_menu .agency .shape").css("border-top", "10px solid " + $(this).children(".color2").css("background-color"));
        $(".documentations .core_menu .documentations .shape").css("border-top", "10px solid " + $(this).children(".color2").css("background-color"));
        $(".projects .core_menu .projects .shape").css("border-top", "10px solid " + $(this).children(".color2").css("background-color"));

        $(".core_menu_lvl2").css("background-color", $(this).children(".color3").css("background-color"));
        if($(this).hasClass("select_palette1")){$(".core_and_sidebar h1").css("color", main_tab[0][8]);$(".core_and_sidebar h2").css("color", main_tab[0][8]);$(".core_and_sidebar h3").css("color", main_tab[0][8]);}

        $(".select_palette .color1").css("background-color", $(this).children(".color1").css("background-color"));
        $(".select_palette .color2").css("background-color", $(this).children(".color2").css("background-color"));
        $(".select_palette .color3").css("background-color", $(this).children(".color3").css("background-color"));

        if ($(this).hasClass("select_palette1")){$(".themes .square1").css('background-color', main_tab[0][5]);$(".themes .square2").css('background-color', main_tab[0][6]);$(".themes .square3").css('background-color', main_tab[0][7]);};
        if ($(this).hasClass("select_palette2")){$(".themes .square1").css('background-color', main_tab[1][5]);$(".themes .square2").css('background-color', main_tab[1][6]);$(".themes .square3").css('background-color', main_tab[1][7]);};
        if ($(this).hasClass("select_palette3")){$(".themes .square1").css('background-color', main_tab[2][5]);$(".themes .square2").css('background-color', main_tab[2][6]);$(".themes .square3").css('background-color', main_tab[2][7]);};

        if ($(this).hasClass("select_palette1")){
            $(".sidebar .block .actualite").css("background-color", "rgb(62,71,68)");
            $(".sidebar .block .h4_sondage").css("background-color", "rgb(50,82,71)");
            $(".sidebar .block .links").css("background-color", "rgb(62,71,68)");
            $(".sidebar .block .h4_newsletter").css("background-color", "rgb(50,82,71)");
        };
        if ($(this).hasClass("select_palette2")){
            $(".sidebar .block .actualite").css("background-color", "rgb(143,82,53)");
            $(".sidebar .block .h4_sondage").css("background-color", "rgb(104,77,64)");
            $(".sidebar .block .links").css("background-color", "rgb(143,82,53)");
            $(".sidebar .block .h4_newsletter").css("background-color", "rgb(104,77,64)");
        };

        $(".sidebar .block .container_actualite .news_block p").css("border-top", "1px solid " + $(this).children(".color1").css("background-color"))
    });
});
