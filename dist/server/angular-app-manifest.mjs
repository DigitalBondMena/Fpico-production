
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
    'index.csr.html': {size: 16841, hash: '30b364f65ef53650912a0ef30a89cea4398986c982e28bfb0de17b49275b6c4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: 'd62b4fb36e538f6ffb37162302120569ce97687696fcaa247629bc7e71ca673c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KEVB3DHM.css': {size: 150537, hash: '5SpR3H10m9k', text: () => import('./assets-chunks/styles-KEVB3DHM_css.mjs').then(m => m.default)}
  },
};
