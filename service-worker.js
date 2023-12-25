/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "61e3b23eeb2e12aabd0a3afd89b8683d"
  },
  {
    "url": "assets/css/0.styles.d4eca04f.css",
    "revision": "29bdf0d727b45813131cde29ee96c996"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.881de4b7.js",
    "revision": "e0bf2bc8ce57693cb236434dff0de51f"
  },
  {
    "url": "assets/js/10.5fe791df.js",
    "revision": "d844d46df62ede3da7e913c3aaee81af"
  },
  {
    "url": "assets/js/11.7da3ae6a.js",
    "revision": "09ab9f69397233400516c661bef0562b"
  },
  {
    "url": "assets/js/12.7b1d0165.js",
    "revision": "89508afbc74cd1cf5ce55831f4a239e8"
  },
  {
    "url": "assets/js/13.94ea0ce8.js",
    "revision": "e15dedf3afacf60ce343b5a46944903b"
  },
  {
    "url": "assets/js/14.450eedd8.js",
    "revision": "2c7d77c388c11182309ecf0c49c5d897"
  },
  {
    "url": "assets/js/15.cd078485.js",
    "revision": "ff0ead69afbdd26bffa27d26cbfc46ee"
  },
  {
    "url": "assets/js/16.b0a0b385.js",
    "revision": "8439b3fc1fa3d95efcd06f7a82ac6020"
  },
  {
    "url": "assets/js/17.10efba48.js",
    "revision": "31c80c61d60a6e983ab38cae5c57dd0c"
  },
  {
    "url": "assets/js/18.daf4e630.js",
    "revision": "4d9f122eebc3972d1a0009c863f2bb6d"
  },
  {
    "url": "assets/js/20.b7b8310a.js",
    "revision": "fdd198592bf2fdd05d90b1cdac422dbf"
  },
  {
    "url": "assets/js/3.e57faa56.js",
    "revision": "2963ac831fe0a8834cb7b4b46f5059af"
  },
  {
    "url": "assets/js/4.cb2dd2ad.js",
    "revision": "7a576111ec1fec193ed49b44498e3a8a"
  },
  {
    "url": "assets/js/5.44d26b01.js",
    "revision": "68f43dbb21d241adb8fafc1511b25e47"
  },
  {
    "url": "assets/js/6.4db633fd.js",
    "revision": "34ae61f6cefc08c86f1c4d31ff8c89e9"
  },
  {
    "url": "assets/js/7.d3cc4354.js",
    "revision": "63b14fa8e76345588f686029a4966066"
  },
  {
    "url": "assets/js/8.0b4ac42c.js",
    "revision": "448d0332b16ef3e33489df3711ffaebc"
  },
  {
    "url": "assets/js/9.bf0fd6ce.js",
    "revision": "e9808f550245b7313851f2a3c65afe29"
  },
  {
    "url": "assets/js/app.7f52e14d.js",
    "revision": "fdf0e9741af06c6e4bd53a96ee0bdc50"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "027358c57634ad3c8e969d2450954c87"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "de98ff254617c4f98a89cdbeb5f4ca11"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "239d3533c597430dfb687d3d83725eb0"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "61dbf8effb26695b793705547c9ede8e"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "82aeda8d010405f23215fee4c25fa651"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "a23be2bae2163d25bcd9d66dfaab87c4"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "112e4fea9801dc647c5832801014a8ea"
  },
  {
    "url": "categories/index.html",
    "revision": "1bb3440cb533b8fb4071e1ffd3c7e37c"
  },
  {
    "url": "docs/node/nvm和nrm的使用/nvm和nrm的使用.html",
    "revision": "5111014f97f0af9478bb3b2e1d6d03f9"
  },
  {
    "url": "docs/vue3/vite和pinia.html",
    "revision": "44555ff547239e6bf30c62ef59d5fbdd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6ad5e3f750e739616e1efbec9feb2386"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/index.html",
    "revision": "09ff14df6ef2af334e720ffbb2ab4362"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "64e649353790626d8e232feee2c4f733"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "994857887c150e3f868d4330842c0aad"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "e0e6ad2e6971902236fefe5f37d9e23a"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "290b93c9b75856cdfe24b3da3fb61151"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ad1dd239128b92314029016b0ebb0a9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
