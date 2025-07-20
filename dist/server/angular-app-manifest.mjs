
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
      "chunk-L73DQYGU.js"
    ],
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16841, hash: '793ee154f2fabbd20c4332b6d0e1a73977f7634a6bf244b35374f571bd70417c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5225, hash: 'ea909f41628671aec7d8b9b5732fa06794a293d99c111c579b7b5fc18b1291c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-35BLIOWF.css': {size: 150110, hash: 'T/OXc55NHus', text: () => import('./assets-chunks/styles-35BLIOWF_css.mjs').then(m => m.default)}
  },
};
