$(document).ready(function () {
	$('.carousel').slick({
		centerMode: true,
		centerPadding: '33%',
		dots: true,

		//autoplay: true,
		prevArrow: '<button class="arrow prev"></button>',
		nextArrow: '<button class="arrow next"></button>',
		autoplaySpeed: 7000,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					centerMode: true,
					centerPadding: '25%',
				}
			},
			{
				breakpoint: 575,
				settings: {
					centerMode: true,
					centerPadding: '15%',
				}
			}
		]
	});
});