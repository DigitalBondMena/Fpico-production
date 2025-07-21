
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
    "preload": [
      "chunk-L73DQYGU.js"
    ],
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16841, hash: '7adb8c7fad0a05b65e43c1c40fb5b660f2e2d2b2578cfe29cc4a046aa63c7e62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: '173bb713dfd3e73527f58bc4c301d584640a0a4758008b2ccc78d9308f371910', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KEVB3DHM.css': {size: 150537, hash: '5SpR3H10m9k', text: () => import('./assets-chunks/styles-KEVB3DHM_css.mjs').then(m => m.default)}
  },
};
