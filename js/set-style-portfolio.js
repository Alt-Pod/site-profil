function set_style_portfolio(p) {
	span = p.children('.block_container').children('.block').children('a').children('span');
	span.css('background', 'rgba(87,154,197,1)');

	p.children('.block_container').each(function() {
		$(this).children('.block').each(function() {
			$(this).children('a').children('span').css('height', $(this).children('a').children('img').css('height'));
			$(this).children('a').children('span').css('width', $(this).children('a').children('img').css('width'));
		});
	});
	span.css('display', 'none');
}

window.onresize = function() {
    set_style_portfolio($(".core.portfolio"))
};

window.onload = function() {
	set_style_portfolio($(".core.portfolio"))
};
