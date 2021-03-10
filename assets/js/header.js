
var Header = (function () {
	
	var DOM = {};
	var changePos = 1;

	function cacheDom() {
		DOM.header = document.querySelector('.header');
	}

	function bindEvents() {
		if (DOM.header) {
			window.addEventListener('scroll', function () {
				scrolled();
			});
		}
	}

	function scrolled() {
		var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		(scrollTop > changePos) ? DOM.header.classList.add('scrolled') : DOM.header.classList.remove('scrolled');
	}
	
	function init() {
		cacheDom();
		bindEvents();
	}

	return {
		init: init
	};
	
}());

(function () {

	Header.init();

})();