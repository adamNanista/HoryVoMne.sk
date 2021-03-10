
var ToggleMenu = (function () {
	
	var DOM = {};

	function cacheDom() {
		DOM.menu = {
			toggle: document.querySelector('.navigation__trigger'),
			module: document.querySelector('.navigation')
		};
	}

	function bindEvents() {
		if (DOM.menu.toggle && DOM.menu.module) {
			DOM.menu.toggle.addEventListener('click', function (e) {
				e.preventDefault();
				toggleModule(DOM.menu);
			});
		}
	}
	
	function toggleModule(element) {
		var isClosed = element.module.getAttribute('data-toggle') === 'true';

		closeModule(DOM.menu);

		if (isClosed) {
			openModule(element);
		}
	}
	
	function closeModule(element) {
		element.toggle.classList.remove('opened');
		element.module.classList.remove('opened');
		element.module.setAttribute('data-toggle', 'true');
	}

	function openModule(element) {
		element.toggle.classList.add('opened');
		element.module.classList.add('opened');
		element.module.setAttribute('data-toggle', 'false');
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

	ToggleMenu.init();

})();