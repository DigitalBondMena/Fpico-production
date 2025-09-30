
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
      "chunk-YQCJRNTT.js",
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
      "chunk-VD4JE4XO.js",
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
    "redirectTo": "/ar",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16815, hash: 'a636b9e0b9c7c3ab1cad7bd4b4fe3aebc33b987fa36e714a9f8d7b6fa2776974', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: '63f9a4c2ebe0da84f6d9c99e285c2d2c6ef6c0f8275f9b2f0d339a3d9f20aefc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YOGF3AU4.css': {size: 147703, hash: 'yEIC6SSA34s', text: () => import('./assets-chunks/styles-YOGF3AU4_css.mjs').then(m => m.default)}
  },
};
