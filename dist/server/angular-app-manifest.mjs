
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs",
    "route": "/en/blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs/:id",
    "route": "/en/blogs/*"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZT66QHGV.js",
      "chunk-G2XPW23R.js",
      "chunk-ALESQMBT.js",
      "chunk-JJ6X5UTQ.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-44LXX7W5.js",
      "chunk-EEFPPZVE.js",
      "chunk-JJ6X5UTQ.js"
    ],
    "route": "/*/projects-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LIWMOA2H.js",
      "chunk-JJ6X5UTQ.js"
    ],
    "route": "/*/services"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-W2AU64PP.js",
      "chunk-EEFPPZVE.js",
      "chunk-JJ6X5UTQ.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ABDPEVJL.js",
      "chunk-WN3LCT65.js",
      "chunk-4XYQOR4K.js",
      "chunk-QBL57YUQ.js",
      "chunk-G2XPW23R.js",
      "chunk-JJ6X5UTQ.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QNDTCYUB.js",
      "chunk-WN3LCT65.js",
      "chunk-ALESQMBT.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-55OHMURK.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-55OHMURK.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AEKDALYQ.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-O55YFPQM.js"
    ],
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16815, hash: 'e919c0c42da685a8a6e1bb2a11b1dcc742e6a3d8e842f361a0808f02e4ed34af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: 'aed355134137cc828b039917399cadf4d3fa802179050b53b7d641ed9f3905cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YOGF3AU4.css': {size: 147703, hash: 'yEIC6SSA34s', text: () => import('./assets-chunks/styles-YOGF3AU4_css.mjs').then(m => m.default)}
  },
};
