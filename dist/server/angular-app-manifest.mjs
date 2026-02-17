
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
      "chunk-K46RAGCB.js",
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
      "chunk-USJHSJQK.js",
      "chunk-AORSZD5S.js",
      "chunk-GQWLXHB7.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VBENSPZE.js",
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
    'index.csr.html': {size: 16759, hash: '51c19a450bf07cd4ddb4b91a224433f48ed3e8f5fad8b620466b0639c6b0a74b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5168, hash: '8d39d08cda59ae9328b10a6a54bd383a020215aef4f9be8f392c7660323cc45f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EPO2WNWB.css': {size: 148233, hash: 'U2sk0qJuPcY', text: () => import('./assets-chunks/styles-EPO2WNWB_css.mjs').then(m => m.default)}
  },
};
