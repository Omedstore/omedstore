var $$ = Dom7;

var app = new Framework7({
	root: '#app',
	name: 'JailbreakBox',
	theme: 'ios'
});

var fixLinks = setInterval(function() {
	$("a").each(function() {
		if ($(this).attr('href').includes("ethicalads")) $(this).addClass("external");
	});
}, 100);

$$('.tip').hide();

if (navigator.userAgent.match(/iPad|iPhone|iPod/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
	$$('.desktop-only').hide();
	if ('standalone' in navigator && !navigator.standalone && (/iPhone|iPod|iPad/i).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
		$$('.tip').show();
	}

	let version = (navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace("OS ","");

	if (version < 11) window.location.href = "legacy.html";
	if (version >= 13) {
		$$('.jbswitch').hide();

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			$$('#toggle-dark').prop('checked', true)
			$$('#app').addClass('theme-dark')
		} else {
			$$('#toggle-dark').prop('checked', false)
			$$('#app').removeClass('theme-dark')
		}
	} else {
		if (localStorage.getItem('dark')) {
			$$('#toggle-dark').prop('checked', true)
			$$('#app').addClass('theme-dark')
		} else {
			$$('#toggle-dark').prop('checked', false)
			$$('#app').removeClass('theme-dark')
		}

		$$('#toggle-dark').on('change', function () {
			if ($$('#toggle-dark').prop('checked')) {
				$$('#app').addClass('theme-dark')
				localStorage.setItem('dark', 'dark')
			} else {
				$$('#app').removeClass('theme-dark')
				localStorage.removeItem('dark')
			}
		});
	}
} else {
	$$('.jbswitch').hide();
	$$('.toolbar').hide();
	$$('.popularApps').hide();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
	var newColorScheme = e.matches ? "dark" : "light";
	if (newColorScheme == "dark") {
		$$('#toggle-dark').prop('checked', true)
		$$('#app').addClass('theme-dark')
	} else {
		$$('#toggle-dark').prop('checked', false)
		$$('#app').removeClass('theme-dark')
	}
});