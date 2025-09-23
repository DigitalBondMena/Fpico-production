
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
    'index.csr.html': {size: 16815, hash: '3af378d345b08772852f1b1874c3ed74660b35c8d63efd2c2fbd694d0252677e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: 'e90e97c1aa9bb1ba90b513606f31808eb339304ac748cc1e9bef9f3923c85dab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CTOAILB3.css': {size: 147728, hash: '1fH/RJ78urY', text: () => import('./assets-chunks/styles-CTOAILB3_css.mjs').then(m => m.default)}
  },
};
