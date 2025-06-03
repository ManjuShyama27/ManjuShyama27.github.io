'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d4694a3edf14acd9e130ecd21a06870f",
"assets/AssetManifest.bin.json": "454793020ba466352b6054efda1ecf02",
"assets/AssetManifest.json": "806fdba846cd338283359551daa20cc8",
"assets/assets/files/Manjushyama_Singhania_Resume.pdf": "1ba1285dd1a1109bfb45a3f3c56b5dda",
"assets/assets/images/affirmations.png": "8ac818729cee409c2ef338038d94d572",
"assets/assets/images/aim2excel.png": "ae0988ef77a0e12e864f4e929e4c265e",
"assets/assets/images/aiquiz.png": "845105c2ce5c860d1139a34667f261fd",
"assets/assets/images/analytics.png": "5ff3d0bfb65095e682e426ed091cc18a",
"assets/assets/images/analyzer.png": "7c67f9cb758911fd3865c8a74186603e",
"assets/assets/images/android.png": "062dc925decc18793d3da4eff9fea1b0",
"assets/assets/images/ap.png": "e4a6b0a5f18614bcee74700f9c79597c",
"assets/assets/images/apigee.png": "a152cf82e3010ef00686451d9ee6ea2d",
"assets/assets/images/basics.png": "700467d056ccfa7515298fe3db769351",
"assets/assets/images/bhscso.png": "7c43abdba97bdfb2634eabf78d671c2e",
"assets/assets/images/bhsdesigner.png": "51104355122122a5e4bdd8386dd9b55e",
"assets/assets/images/chatable.png": "f6bc810fba7fb85f40701b2701a4dfa2",
"assets/assets/images/cloudinary.png": "4ba40421b8340d28576e7fae0522faee",
"assets/assets/images/codemischief.png": "b71b01ca43d84a7009d080f44f331d59",
"assets/assets/images/collablab.png": "94d9e38fd60ca5f86c4f9cfffa9fb0b1",
"assets/assets/images/colorpicker.png": "24785b0559d0c2802a929fb7471c64ed",
"assets/assets/images/crossplatform.png": "2edff90647c44b8cb87958ee84b98ae5",
"assets/assets/images/dart.png": "255bbdd9357a796abc9bc0d754326a80",
"assets/assets/images/dash.png": "61f2b4a7eab46bd87f6dfd3cd0e8dbae",
"assets/assets/images/dash1.png": "4a3e52375f4b0119209fa670d271dcaa",
"assets/assets/images/firebase.png": "3f6e53d81ccbc1ccdd3682fb77c764da",
"assets/assets/images/flutter.png": "8dbae24b9a21029143d8ae91469c18bc",
"assets/assets/images/fluttertogithub.png": "47987151dfd325aaee3e82278b03ebd6",
"assets/assets/images/geminiint.png": "02804c42be17449934055aaf5e051467",
"assets/assets/images/git.png": "7ebab35f2941e5b49af1ef5be3a7ac48",
"assets/assets/images/github.png": "c84e68ec4fe76abae46ed3a541704061",
"assets/assets/images/githubwhite.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/images/gitlab.png": "381765aa4e550adf1d674e8ce8904005",
"assets/assets/images/healo.png": "16cea66c4d245e797a8b308c39dfd5c2",
"assets/assets/images/imagegen.png": "7cf3cfa64acf95368dcefe4456af8e82",
"assets/assets/images/instagram.png": "4473bf75d2e7ec912687f64ad94c42af",
"assets/assets/images/jira.png": "5d60ec5ff54b812ca4153695cf12ad1a",
"assets/assets/images/linkedin.png": "486458d65852a9a8c64e1fae842eb622",
"assets/assets/images/lms.png": "8cc4cbaf38c5dfd1fafce53f7d89aefc",
"assets/assets/images/lottie.png": "1ee5cc466aeeb4a0224250af27abeb7e",
"assets/assets/images/lourdes.png": "75a2fa9582593519723eb5b87a0262a0",
"assets/assets/images/movison.png": "8194946dbea8fe10a2ea7b1092b65e79",
"assets/assets/images/myphoto.png": "b3a9c8a54fd934a509b95756a2a7fb29",
"assets/assets/images/openshift.png": "59f5169823edc830dfd8c48e0ccfbce9",
"assets/assets/images/pay.png": "179ba3291d7025d20088b3f5c2818fc7",
"assets/assets/images/payservices.png": "1a13776f4e70380ea0824dd93916f20b",
"assets/assets/images/postman.png": "3657ca721c644e7e12fbacbb2061df84",
"assets/assets/images/resumedownload.png": "b280e86e3a76e6c02153a8266067f748",
"assets/assets/images/setup.jpg": "9d771f28570cb7e80997ac7f7622e5aa",
"assets/assets/images/shopify.png": "ff16802918ad66a24ed205313a02c825",
"assets/assets/images/sies.png": "325a4221d9f1064be0f5ed67bd8ef823",
"assets/assets/images/siescoms.png": "7a34b400d618525921c0cafa3666cdaf",
"assets/assets/images/somaiya.png": "c52de863500c9fb67ec4ac94aaf37a72",
"assets/assets/images/swagger.png": "e5ecaefec0f42c2ec74b32e1e240fac4",
"assets/assets/images/translator.png": "5a78536244c18816ad31071616c1ab86",
"assets/assets/images/traveln.png": "05e2f7fbb1631a391e4f88725231ec41",
"assets/assets/images/vscode.jpg": "3dc9d171a9d0d441084fd9a44c0462ed",
"assets/assets/images/vscode.png": "25492099e5e6531b570833c106fdc2ad",
"assets/assets/images/webdevelopment.png": "a326bc7d87c49f44f97e3c16e168b596",
"assets/assets/images/youtube.png": "7028ea89f8089a62c5bf375182ef6309",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bc759c8beb8f5ce0e94580096762c158",
"assets/NOTICES": "8f946d07c8d5ce09e5aa3a7cc4ee3a7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "99187f2c961bf282bb3ea60005d1ae46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc63311221a4bad5875830d0159c3eef",
"/": "cc63311221a4bad5875830d0159c3eef",
"main.dart.js": "b5a592984c40f6c6a86971a72d03359b",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
