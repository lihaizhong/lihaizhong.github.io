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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/02/26/_1551151686074/index.html",
    "revision": "74eda98de9569068ee1655f0710edcaf"
  },
  {
    "url": "2019/04/09/_1554808749614/index.html",
    "revision": "1c904e79a08bad3d96632470b0a92de4"
  },
  {
    "url": "2019/08/18/_1566062788359/index.html",
    "revision": "589bd224bc592e1c0180c83f1be030f4"
  },
  {
    "url": "2019/09/24/_1569264234894/index.html",
    "revision": "3929a444ac114355eff2872488ddb8ac"
  },
  {
    "url": "2019/10/11/_1570781191585/index.html",
    "revision": "5d280abd408528dc07e250d8c85af7be"
  },
  {
    "url": "2019/10/22/_1571711706800/index.html",
    "revision": "b2dce2515b6d663935c27cd0eea09add"
  },
  {
    "url": "2019/11/10/_1573359176926/index.html",
    "revision": "827fa36437dcac00207b093102c74392"
  },
  {
    "url": "2019/11/20/_1574263027148/index.html",
    "revision": "c41bc61c8be9fe67f813f7c86c145315"
  },
  {
    "url": "2019/12/03/_1575311885205/index.html",
    "revision": "f8c46107cce6eddd4b07c8d9d47569bd"
  },
  {
    "url": "2020/04/10/_1586486835606/index.html",
    "revision": "4456e4440e64ef23df53ef50548fee47"
  },
  {
    "url": "2020/06/01/_1591020180964/index.html",
    "revision": "15875a25f70a1b1cc1b77dd887d0a813"
  },
  {
    "url": "404.html",
    "revision": "41a58ceac5a9085c48c53353d96a1f49"
  },
  {
    "url": "alipay.jpg",
    "revision": "cbdf76e55db546d62e27a81ae108a6ff"
  },
  {
    "url": "assets/css/0.styles.f66d4c97.css",
    "revision": "9d6572e5cd427f71c4286988251d9846"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/1355655874_6620.0ff04728.jpg",
    "revision": "0ff047288bc51688c37d2a3384d6c659"
  },
  {
    "url": "assets/img/reactive_getter.59a73e00.svg",
    "revision": "59a73e008684409e26b385a173bf83b0"
  },
  {
    "url": "assets/img/reactive_setter.3d4fa822.svg",
    "revision": "3d4fa8227d7a6b7b3b7b82fc50909454"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/WX20190411-015056.613535a7.png",
    "revision": "613535a7144afc2b2de39510b9efdd8e"
  },
  {
    "url": "assets/img/WX20190411-020421.7452edf9.png",
    "revision": "7452edf9da49fea3e37d748c86b96c73"
  },
  {
    "url": "assets/img/WX20190411-024631@2x.c0857eec.png",
    "revision": "c0857eec81511c2f2977e6fff9b5420f"
  },
  {
    "url": "assets/img/WX20190411-024807@2x.c0342e60.png",
    "revision": "c0342e60c551b0f3c5fd3752a35a8eb2"
  },
  {
    "url": "assets/img/WX20190731-110410.19558b7c.png",
    "revision": "19558b7caf173f875efd231857ddb6a0"
  },
  {
    "url": "assets/img/WX20190818-175457@2x.06b704d0.png",
    "revision": "06b704d066b97d2dd67f1ad39eca3094"
  },
  {
    "url": "assets/img/WX20191111-005253.5a583aef.png",
    "revision": "5a583aef1ec0287534dd93fe2f3888d5"
  },
  {
    "url": "assets/img/WX20191111-103947.0ef98d8a.png",
    "revision": "0ef98d8a288c183b50a665d54bbfc8db"
  },
  {
    "url": "assets/img/WX20191111-112230.23854df0.png",
    "revision": "23854df0bec44514d37a9a375b57257d"
  },
  {
    "url": "assets/img/WX20191121-020346.44419258.png",
    "revision": "444192589b08b30b46144469ac44078b"
  },
  {
    "url": "assets/img/WX20191121-020426.d22c0ac1.png",
    "revision": "d22c0ac149d8defc1f4246db133cbb0a"
  },
  {
    "url": "assets/img/WX20200416-142801.994da30e.png",
    "revision": "994da30e1fd6f8c1955241bff022c089"
  },
  {
    "url": "assets/img/WX20200416-142909.534a3a54.png",
    "revision": "534a3a54cbd09754ccf278917a051c9e"
  },
  {
    "url": "assets/js/10.2604b2ca.js",
    "revision": "e5939b497e975dc25024d2be1e082914"
  },
  {
    "url": "assets/js/11.2b023cd1.js",
    "revision": "e3133270ebe0656b4039e04f71fb3981"
  },
  {
    "url": "assets/js/12.9c454140.js",
    "revision": "9a0fcad136a6b8f242feb45052dd9844"
  },
  {
    "url": "assets/js/13.bd98e20f.js",
    "revision": "57a03b545d2c6e8b2c0572dbda0a6848"
  },
  {
    "url": "assets/js/14.1dd9eaab.js",
    "revision": "62d948c3c7d43366e3c3f9933d75a9b0"
  },
  {
    "url": "assets/js/15.dc648bf1.js",
    "revision": "335e198a880e42708f5589315b10e950"
  },
  {
    "url": "assets/js/16.c6800678.js",
    "revision": "5424f25d5c354a04601b7da347a9fec6"
  },
  {
    "url": "assets/js/17.caf0df32.js",
    "revision": "8af44c9ab9f48d98a999b5f48baf6761"
  },
  {
    "url": "assets/js/18.288c3708.js",
    "revision": "c47774a2827abc077b785f355e0e815b"
  },
  {
    "url": "assets/js/19.45cbd0e3.js",
    "revision": "b392e55629568c00d51befbe58c9e795"
  },
  {
    "url": "assets/js/20.9b2015f5.js",
    "revision": "e723ca53486d94e1747229c708238eac"
  },
  {
    "url": "assets/js/21.627b872f.js",
    "revision": "7ba63b4f800651e2dd08844cdd3fa891"
  },
  {
    "url": "assets/js/22.bfd32d74.js",
    "revision": "497eac46af0c80d917be57d860d18cf1"
  },
  {
    "url": "assets/js/3.4642ba71.js",
    "revision": "64cd67699c2e8a195e582a9b9fd05255"
  },
  {
    "url": "assets/js/4.5f182a67.js",
    "revision": "47d65779c0a35feffdb683b04363b337"
  },
  {
    "url": "assets/js/5.bbd40519.js",
    "revision": "176dc05971f688806095a16ecc1276bf"
  },
  {
    "url": "assets/js/6.a21f3e51.js",
    "revision": "4e946ace4a30d71ce66d7266d8692c58"
  },
  {
    "url": "assets/js/7.6889f592.js",
    "revision": "b97f61aa2f166dfb6d036b2654bd1b4a"
  },
  {
    "url": "assets/js/8.14f5d75c.js",
    "revision": "38e36c965a737e4792fa2ba9cfc4a991"
  },
  {
    "url": "assets/js/9.a8e63a33.js",
    "revision": "cee464ee1ae74642a513c24f045c61b8"
  },
  {
    "url": "assets/js/app.9f34e818.js",
    "revision": "ab9989b1e4aa2c3e623c077beb79e99d"
  },
  {
    "url": "assets/js/vuejs-paginate.c2a5a07b.js",
    "revision": "51b0758e9236e068c7c67ba116ab4b0d"
  },
  {
    "url": "index.html",
    "revision": "6c370c4ab7db9234bc0b89232a2b9b4a"
  },
  {
    "url": "katex.css",
    "revision": "0e814b5ee39bb17fdfeb99f9d786ae04"
  },
  {
    "url": "page/2/index.html",
    "revision": "3da423679479b4298d30f79f883225d4"
  },
  {
    "url": "page/3/index.html",
    "revision": "5bf898cbc949ab9efb880a48e1e088ea"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "583a61e7713d72f9477f00757feba89e"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "ae93b66f5cba0ac12d7c23976d6b2b04"
  },
  {
    "url": "tag/Event Loop/index.html",
    "revision": "c86f0cce52ac7ad589f8ae5121ca3be0"
  },
  {
    "url": "tag/git commit/index.html",
    "revision": "fb8b3dc2d04e84cacdd61ae951d1c68c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "114450cc34a5ce7ddcc40db3334fabe6"
  },
  {
    "url": "tag/http/index.html",
    "revision": "160cd615d1c3f28aa4f1bd649644363a"
  },
  {
    "url": "tag/index.html",
    "revision": "ea3adeaf25ff59b6467624eaabb33e68"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a391c80d907920134061194fddda8bf5"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "aefd5ffcc135d78336f62b3d150584a6"
  },
  {
    "url": "tag/Macro Task/index.html",
    "revision": "4078456f040f66d8026872ab27c96d8d"
  },
  {
    "url": "tag/Micro Task/index.html",
    "revision": "abfc2adfea841dc40753d54bba9f3c1c"
  },
  {
    "url": "tag/npm publish/index.html",
    "revision": "eed78d7aa65c40463fcc79591d875dee"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "0a5dc5204a9b5de1ad7541ce90c0e13f"
  },
  {
    "url": "tag/Object.defineProperty/index.html",
    "revision": "63efbfb6f903718e0e931388b1b6f22b"
  },
  {
    "url": "tag/semver/index.html",
    "revision": "e241b5b61fd8f30dfb98791a92229974"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3134a37b5b37a3cdc610c3d78d523836"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "367f941567b86e56656608ee15747ad2"
  },
  {
    "url": "wxpay.jpg",
    "revision": "c532fe0a604bd0f880e91f688de165b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
