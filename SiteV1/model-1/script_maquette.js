$(document).ready(function() {
	$( ".header_menu_list li" ).on( "mouseover", function() {
		$(this).children("a").css( "color", "#43C5BB" );
		$(this).children(".header_menu_list_bar").css("background", "#43C5BB");
		$(this).children(".header_menu_list_peak").css("border-top", "0px solid #43C5BB");
	});
	$( ".header_menu_list li" ).on( "mouseout", function() {
		$(this).children("a").css( "color", "white" );
		$(this).children(".header_menu_list_bar").css("background", "white");
		$(this).children(".header_menu_list_peak").css("border-top", "3px solid white");
	});
			
	//Modifie les menus de la sidebar lorsque la souris passe dessus
	$( ".sidebar_list  li" ).on( "mouseover", function() {
		$( this ).css( "background", "#43C5BB" );
		$( this ).css( "color", "#0E3A46" );
	});
	$( ".sidebar_list  li" ).on( "mouseout", function() {
		$( this ).css( "background", "#0E3A46" );
		$( this ).css( "color", "white" );
	});

	//Menu défilant
	
	$( ".header_menu_list li" ).on( "mouseover", function() {
		$( this ).children(".header_menu_list_sub").slideDown( 0, function() {
		});
	});
	$( ".header_menu_list li" ).on( "mouseout", function() {
		$( this ).children(".header_menu_list_sub").slideUp( 0, function() {
		});
	});
	
	//Menu du haut en expend
	
	$( ".header_tools_content" ).on( "mouseover", function() {
		$(this).css("width", "30%");
		$(this).css("text-align", "left");
		$(this).on( "mouseout", function() {
			$(this).css("width", "15%");
			$(this).css("text-align", "center");
		});
	});
	
	
	//fonction pour changer le thème de la page
	$( "#switch_theme" ).click (function() {
		var color1 =["#496262", "#5C777C", "#0E3A46", "#43C5BB", "white", "black", "grey", "blue", "#DFE1FF", "#2B7C75"];	
		var color2 =["#496262", "#5C777C", "#0E3A46", "#2D7BC2", "white", "black", "grey", "blue", "#DFE1FF", "#2D7BC2"];	
		var color3 =["#496262", "#5C777C", "#0E3A46", "#67BD53", "white", "black", "grey", "blue", "#DFE1FF", "#67BD53"];	
		var color4 =["#496262", "#5C777C", "#0E3A46", "#FF8F35", "white", "black", "grey", "blue", "#DFE1FF", "#FF8F35"];	
		var nb_option=[color1,color2,color3,color4];

		//ANIMATION
		$( ".header_menu_list li" ).on( "mouseover", function() {
			$(this).children("a").css( "color", nb_option[$("#select_switch_theme").val()][3] );
			$(this).children(".header_menu_list_bar").css("background", nb_option[$("#select_switch_theme").val()][3]);
			$(this).children(".header_menu_list_peak").css("border-top", "0px solid "+ nb_option[$("#select_switch_theme").val()][3]);
		});
		$( ".header_menu_list li" ).on( "mouseout", function() {
			$(this).children("a").css( "color", nb_option[$("#select_switch_theme").val()][4] );
			$(this).children(".header_menu_list_bar").css("background", nb_option[$("#select_switch_theme").val()][4]);
			$(this).children(".header_menu_list_peak").css("border-top", "3px solid " + nb_option[$("#select_switch_theme").val()][4]);
		});
		//HOVER menu défilant
		$(".header_menu_list_sub a").on( "mouseover", function() {
			$(".header_menu_list_sub a").css("color", "white");
		});
		//Modifie les menus de la sidebar lorsque la souris passe dessus
		$( ".sidebar_list  li" ).on( "mouseover", function() {
			$(this).css( "background", nb_option[$("#select_switch_theme").val()][3] );
		});
		$( ".sidebar_list  li" ).on( "mouseout", function() {
			$(this).css( "background", nb_option[$("#select_switch_theme").val()][2] );
		});
		//FIN ANIMATION

		$( "header" ).css( "background", nb_option[$("#select_switch_theme").val()][0] );
		$( ".header_container" ).css( "border-top", "1px solid " + nb_option[$("#select_switch_theme").val()][1] );
		$( ".sidebar_list  li" ).css( "border-top", "1px solid " + nb_option[$("#select_switch_theme").val()][1] );
		$( ".header_container" ).css( "background", nb_option[$("#select_switch_theme").val()][2] );
		$( ".sidebar_list  li" ).css( "background", nb_option[$("#select_switch_theme").val()][2] );
		$( ".sidebar_right" ).css( "border-right", "3px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( ".sidebar_right" ).css( "border-left", "3px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( ".sidebar_right" ).css( "border-bottom", "3px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( ".to_fill" ).css( "border-top", "5px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( "footer" ).css( "border-top", "3px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( "footer" ).css( "border-bottom", "3px solid " + nb_option[$("#select_switch_theme").val()][2] );
		$( ".header_container h1" ).css( "color", nb_option[$("#select_switch_theme").val()][3] );
		$( ".header_block" ).css( "border", "5px solid " + nb_option[$("#select_switch_theme").val()][3] );
		$( ".header_block_draw" ).css( "border-bottom", "20px solid " + nb_option[$("#select_switch_theme").val()][3] );
		$( ".to_fill" ).css( "background", nb_option[$("#select_switch_theme").val()][3] );
		$( ".core h2" ).css( "color", nb_option[$("#select_switch_theme").val()][9] );
		$( "footer" ).css( "background", nb_option[$("#select_switch_theme").val()][3] );
		$( ".header_title h3" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_title p" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_menu_list li" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_menu_list a" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_menu_list_bar " ).css( "background", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_menu_list_peak" ).css( "border-top", "3px solid "  + nb_option[$("#select_switch_theme").val()][4] );
		$( ".sidebar_list  li" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".footer_menu a" ).css( "color", nb_option[$("#select_switch_theme").val()][4] );
		$( ".header_block_content a" ).css( "color", nb_option[$("#select_switch_theme").val()][5] );
		$( ".header_menu_list_sub" ).css( "border", "1px solid " + nb_option[$("#select_switch_theme").val()][5] );
		$( ".header_block_content a" ).css( "color", nb_option[$("#select_switch_theme").val()][5] );
		$( ".header_menu_list_sub" ).css( "background", nb_option[$("#select_switch_theme").val()][9] );
		$( ".header_block_content a" ).css( "background", nb_option[$("#select_switch_theme").val()][8] );
	});
});

