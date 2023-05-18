routes = [
  {
    path: '/',
    url: '/store/',
  },
  {
    path: '/:id/',
    url: '/section/{{id}}',
  },
  {
    path: '/appleid',
    url: './pages/appleid.php',
  },
  {
    path: '/odyssey',
    url: './pages/odyssey.php',
  },
  {
    path: '/tiktok',
    url: './pages/tiktok.php',
  },
  {
    path: '/unc0ver',
    url: './pages/unc0ver.php',
  },
  {
    path: '/videostar',
    url: './pages/videostar.php',
  },
  {
    path: '/pubg',
    url: './pages/pubg.php',
  },
  {
    path: '/gta',
    url: './pages/gta.php',
  },
  {
    path: '/org',
    url: './pages/org.php',
  },
  {
    path: '/8ball',
    url: './pages/8ball.php',
  },
  {
    path: '/appcake',
    url: './pages/appcake.php',
  },
  {
    path: '/minecraft',
    url: './pages/minecraft.php',
  },
  {
    path: '/videofx',
    url: './pages/videofx.php',
  },
  {
    path: '/picsart',
    url: './pages/picsart.php',
  },
  {
    path: '/Kinemaster',
    url: './pages/kinemaster.php',
  },
  {
    path: '/theming',
    componentUrl: './pages/theme.php',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.php',
  },
];
