console.log('sadsa')


// let burger = document.getElementsByClassName('navbar-top-row__burger')[0];
// burger.addEventListener("click", function (event) {
// 	document.getElementsByClassName('navbar-top-row')[0].toggleClass('navbar-top-row_active');

//});

//navbar - top - row__logo_active -toggle to unactive
//navbar - top - row__phone_active -toggle to active



$(document).ready(function () {
	$('.navbar-top-row__burger').click(function (event) {
		$('.navbar-top-row__burger').toggleClass('navbar-top-row__burger_active');
		
		$('.navbar-top-row').toggleClass('navbar-top-row_active');
		$('.navbar-top-row__logo').toggleClass('unactive');
		$('.navbar-top-row__phone').toggleClass('active');

		$('.navbar-nav-row').toggleClass('active');
	});
});