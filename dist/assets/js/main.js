$(document).ready(function() {
	/* денежное меню в шапке */
	$('.btn__money-operation-dropdown').on('click', function(event) {
		event.preventDefault();
		/*$(this).toggleClass('active');
		if ($(this).is('.active')) {
			$('.money-operation__dropdown').toggleClass('open');
		} else {
			$('.money-operation__dropdown').removeClass('open');
		}*/
		if ($(this).hasClass('active')) {
			$('.btn__money-operation-dropdown').removeClass('active');
			$('.money-operation__dropdown').removeClass('open');
		} else {
			$('.btn__money-operation-dropdown').removeClass('active');
			$('.money-operation__dropdown').removeClass('open');
			$(this).addClass('active');
			var drop = $(this).data('dropdown');
			console.log(drop)
			$('.money-operation__dropdown[data-dropdown="'+drop+'"]').addClass('open');
			$('.money-operation__dropdown[data-dropdown="'+drop+'"]').addClass('animated fadeInLeft');
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".money-operation__dropdown, .btn__money-operation-dropdown"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.money-operation__dropdown').removeClass('open');
			$('#open-main-navigation').removeClass('open');
			$('.btn__money-operation-dropdown').removeClass('active');
		}
	});



	/* open/close submenu */
	$('#open-main-navigation').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('open');
		$('#main-navigation').toggleClass('open');
		$('#main-navigation').addClass('animated fadeInLeft');
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#main-navigation, #open-main-navigation"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('#main-navigation').removeClass('open');
			$('#open-main-navigation').removeClass('active');
		}
	});

	/* custom scroll */
	$(".content-scrolled").mCustomScrollbar({
		theme:"dark",
		scrollbarPosition: "outside",
		scrollInertia: 100
	});

	/* tabs */

	function checkTabs(tab_number) {
		$('.tabs a').removeClass('active')
		$('.tabs a[data-tab=' + tab_number + ']').addClass('active');
		$('.tabs-content').removeClass('open');
		$('.tabs-content[data-tab-content=' + tab_number + ']').addClass('open');
	}

	checkTabs(1);

	$('.tabs a').on('click', function(event) {
		event.preventDefault();
		var tab_number = $(this).data('tab');
		checkTabs(tab_number);
	});

});
