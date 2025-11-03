
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
      "chunk-ZZHCOPO3.js",
      "chunk-XRS23MC2.js",
      "chunk-M2HGCAMV.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZG6HPEYV.js",
      "chunk-AORSZD5S.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/projects-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C7SQJOND.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/services"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JTLLBJDW.js",
      "chunk-AORSZD5S.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3TEUTMLD.js",
      "chunk-NWONCT5N.js",
      "chunk-XC7AJRJF.js",
      "chunk-EAPK54H7.js",
      "chunk-XRS23MC2.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FKZ6XV6A.js",
      "chunk-NWONCT5N.js",
      "chunk-M2HGCAMV.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ICBXBW7B.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ICBXBW7B.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6G34DVXV.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16759, hash: '1e7f3756918183cb1f4f5278e626defc5526a84a53c170e2b649de249fda82b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5168, hash: '75b373c42d6954d93ab694ccb34f5e2e053bc5b2b0f5460cab65a12893ce4e5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YOGF3AU4.css': {size: 147703, hash: 'yEIC6SSA34s', text: () => import('./assets-chunks/styles-YOGF3AU4_css.mjs').then(m => m.default)}
  },
};
