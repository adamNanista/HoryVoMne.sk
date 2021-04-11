
var ToggleMenu = (function () {
	
	var DOM = {};

	function cacheDom() {
		DOM.menu = {
			toggle: document.querySelector('.navigation__trigger'),
			module: document.querySelector('.navigation')
		};
		DOM.menuAnchors = document.querySelectorAll('.navigation__menu__anchor');
	}

	function bindEvents() {
		if (DOM.menu.toggle && DOM.menu.module) {
			DOM.menu.toggle.addEventListener('click', function (e) {
				e.preventDefault();
				toggleModule(DOM.menu);
			});
		}
		if (DOM.menuAnchors.length) {
			for (var i = 0; i < DOM.menuAnchors.length; i++) {
				DOM.menuAnchors[i].addEventListener('click', function (e) {
					var anchor = this;
					var submenu = anchor.nextElementSibling;
					var mobileSize = window.matchMedia('(max-width: 1024px)');
					
					if (mobileSize.matches) {
						if (submenu) {
							e.preventDefault();
							toggleSubmenu(anchor, submenu);
						}
					} 
					
				});
			}
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
		document.querySelector('body').classList.remove('block-scroll');
		element.toggle.classList.remove('opened');
		element.module.classList.remove('opened');
		element.module.setAttribute('data-toggle', 'true');
	}

	function openModule(element) {
		document.querySelector('body').classList.add('block-scroll');
		element.toggle.classList.add('opened');
		element.module.classList.add('opened');
		element.module.setAttribute('data-toggle', 'false');
	}
	
	function toggleSubmenu(anchor, submenu) {
		var isClosed = submenu.getAttribute('data-toggle') === 'true';

		submenu.classList.remove('opened');
		submenu.setAttribute('data-toggle', 'true');
		anchor.classList.remove('opened');

		if (isClosed) {
			submenu.classList.add('opened');
			submenu.setAttribute('data-toggle', 'false');
			anchor.classList.add('opened');
		}
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