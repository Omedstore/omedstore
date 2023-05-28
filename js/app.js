var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'Jailbreaks', // App name
  theme: 'ios', // Automatic theme detection

  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Register service worker
  
  // Commented out because Chrome threw an error trying to import it.
  // Everything seems to work fine without it.
  /*serviceWorker: {
    path: '/service-worker.js',
  },*/
});

if (navigator.userAgent.match(/ipad|iphone|ipod/i)) {
  if ((navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace("OS ","") >= "13") {
    var switchElementsArray = document.getElementsByClassName("jbswitch");
    for (var i = 0; i < switchElementsArray.length; i++) {
        switchElementsArray[i].style.visibility = "hidden";
    }
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
      if ($$('#toggle-dark').prop('checked') == true) {
        $$('#app').addClass('theme-dark')
        localStorage.setItem('dark', 'dark')
      } else {
        $$('#app').removeClass('theme-dark')
        localStorage.removeItem('dark')
      }
    });
  }
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
