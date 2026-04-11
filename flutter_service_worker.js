'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/video/netflix_intro.mp4": "2fdd9aa0e0a33ca885759426b1306315",
"assets/assets/video/end_game.mp4": "7c22a584e7a7051b27217ea1fb006a7e",
"assets/assets/video/app_intro.mp4": "2fdd9aa0e0a33ca885759426b1306315",
"assets/assets/video/no_way_home.mp4": "f6cab717569fbf1cb7cd0fa124c0e0c3",
"assets/assets/video/iron_man.mp4": "ad63aad947e866779cb363e1ad15aa5f",
"assets/assets/video/love_and_thunder.mp4": "aa5dfa263b1d3336c90760bf0a54d050",
"assets/assets/fonts/product-sans/bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/assets/fonts/product-sans/bold-italic.ttf": "90773b6158663ab0fe78b32680733677",
"assets/assets/fonts/product-sans/regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/product-sans/italic.ttf": "0ecddcdeccb7761ce899aa9ad9f0ac3f",
"assets/assets/fonts/product-sans/medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/assets/fonts/product-sans/medium-italic.ttf": "8fd3737925e83c87d78a13700ccf9a62",
"assets/assets/images/2.0x/app_icon.png": "477911ed3dd94b1aed8dd1e9fbd41e73",
"assets/assets/images/1.5x/app_icon.png": "986c60fc4410af242b49daa9ff696dae",
"assets/assets/images/end_game.jpg": "1438d3b03d2bb9cc9b9a7f75dd66d3c4",
"assets/assets/images/love_and_thunder.jpg": "30c7147bab1a3f266631c2ef1b97ad78",
"assets/assets/images/user.png": "3d78be0fd923fa38dcc3351e9e24c6e4",
"assets/assets/images/app_logo.png": "ed0265f59f0af5ca84c4e0caa17d8562",
"assets/assets/images/4.0x/app_icon.png": "1c1ac60648abb35a41cf2335ebdffffa",
"assets/assets/images/app_icon.png": "c28c2097000ad3fdc9e388182d925d8b",
"assets/assets/images/3.0x/app_icon.png": "14a9c4b1e2541e63d68972b1c272cfc7",
"assets/assets/images/no_way_home.jpg": "d1b17e144e3f24f234438a6414744474",
"assets/assets/images/iron_man.jpg": "e0525108c978e202905b7e75080a307a",
"assets/AssetManifest.json": "731eaeefb536c44621c0988913befaf7",
"assets/AssetManifest.bin.json": "8a8793989cd3ad9acd2dc2778848570c",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "e05b5e3c5aa8db58ac462ab168be7a2d",
"assets/AssetManifest.bin": "63bab6cd013ba69fe6fe87dfdd77c992",
"assets/NOTICES": "cb83fa025f66cebfd543442d479dd2dc",
"assets/FontManifest.json": "c28f1684a17f9c2af0c3a5f22e209544",
"assets/screenshots/splash.gif": "d2439c1aaf4d676d88dd294c4a194fd6",
"assets/screenshots/flutter_02.png": "77ee8d0d5a66bdbd4743ce7e8a329884",
"assets/screenshots/video-interaction.gif": "82086e5311ec7a88d6f35c5075d5d491",
"assets/screenshots/flutter_03.png": "59b3cda60d84fa811622f6918c921dc8",
"assets/screenshots/info.gif": "f71d3b298c2f642c0f9fda77f91aff1d",
"assets/screenshots/flutter_04.png": "bd2972f846aa32ed19b2e5e7c6fb7a7a",
"assets/screenshots/intro-video.gif": "3bec5cc9c1efc4d61a5bd880cd51fd85",
"assets/screenshots/flutter_01.png": "0f01523128b92a76739ca8e255963160",
"assets/screenshots/explore.gif": "ce173418586b81513ddf0ed556fe1fdf",
"favicon.png": "c28c2097000ad3fdc9e388182d925d8b",
"manifest.json": "25c0d22f6606e3da5cb5b15778434fbf",
"index.html": "a75a445fb7cdb2eccacf3e7111bc99cf",
"/": "a75a445fb7cdb2eccacf3e7111bc99cf",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5723ca2f579a6630ea76343545d128b0",
"main.dart.js": "7de72d566b0d9316f5947f917144b7bc",
"version.json": "ed01ff1500faabde5c366727dc9d74ce",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "c28c2097000ad3fdc9e388182d925d8b",
"icons/Icon-192.png": "c28c2097000ad3fdc9e388182d925d8b"};
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
