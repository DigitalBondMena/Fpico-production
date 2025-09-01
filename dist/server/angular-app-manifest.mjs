
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
      "chunk-ONDOO3AC.js",
      "chunk-XIOYIV5V.js",
      "chunk-3QWPSEX3.js",
      "chunk-RCICV6YN.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MTOVTISB.js",
      "chunk-R2ZMHHGU.js",
      "chunk-RCICV6YN.js"
    ],
    "route": "/*/projects-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NMCS6JOA.js",
      "chunk-RCICV6YN.js"
    ],
    "route": "/*/services"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HUUN3GGK.js",
      "chunk-R2ZMHHGU.js",
      "chunk-RCICV6YN.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SPEX4ZXW.js",
      "chunk-ZF5WWZ2M.js",
      "chunk-BTTSMGG4.js",
      "chunk-OCETYIPV.js",
      "chunk-XIOYIV5V.js",
      "chunk-RCICV6YN.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D7JHZNVB.js",
      "chunk-ZF5WWZ2M.js",
      "chunk-3QWPSEX3.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4ZIJ4CMP.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4ZIJ4CMP.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZP7KQF3D.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16815, hash: '09a12c954c6c7a37ca511f6164461821190659c88a5f0e9af02fccc21e9d89ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: '79e25ee3b4eb7a9374042068f545efdc8be489887e12a3ad206f4a111792297c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CTOAILB3.css': {size: 147728, hash: '1fH/RJ78urY', text: () => import('./assets-chunks/styles-CTOAILB3_css.mjs').then(m => m.default)}
  },
};
