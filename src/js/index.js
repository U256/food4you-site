// let burger = document.getElementsByClassName('navbar-top-row__burger')[0];
// burger.addEventListener("click", function (event) {
// 	document.getElementsByClassName('navbar-top-row')[0].toggleClass('navbar-top-row_active');

//});

//navbar - top - row__logo_active -toggle to unactive
//navbar - top - row__phone_active -toggle to active


//let timerRepeat = setTimeout(func | code, [delay], [arg1], [arg2]);

// if (window.matchMedia('(max-width: 767px)').matches) {
// 	$('.navbar-nav-row, .navbar-top-row__phone').addClass('unactive');
// }
import '../sass/style.scss'


$(document).ready(function () {
	$('.navbar-top-row__burger').click(function (event) {
		event.preventDefault();

		$('.navbar-top-row__burger').toggleClass('navbar-top-row__burger_active');

		$('.navbar-top-row').toggleClass('navbar-top-row_active');
		$('.navbar-top-row__logo').toggleClass('navbar-top-row__logo_unactive');
		$('.navbar-top-row__phone').toggleClass('navbar-top-row__phone_active');
		$('.navbar-top-row__shield').toggleClass('navbar-top-row__shield_active');

		$('.navbar-nav-row').toggleClass('navbar-nav-row_active');
	});
});