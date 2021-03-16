
(function () {

	new Splide( '.partners', {
		type: 'loop', 
		perPage: 6, 
		perMove: 1, 
		pagination: false, 
		breakpoints: {
			1024: {
				perPage: 3,
			},
			767: {
				perPage: 2,
			}, 
		},
	} ).mount();
	new Splide( '.testimonials', {
		type: 'loop', 
		perPage: 3, 
		perMove: 1, 
		pagination: false, 
		breakpoints: {
			1024: {
				perPage: 2,
			},
			767: {
				perPage: 1,
			}, 
		},
	} ).mount();

})();