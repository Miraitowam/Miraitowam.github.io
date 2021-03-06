/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/blog/myblog/public/404.html","6fdc4ff8c12c894f27f31cccf1cad956"],["E:/blog/myblog/public/Gallery/index.html","c229f17be011c210cb1a507ddb3779d9"],["E:/blog/myblog/public/about/index.html","580154698c0e10fd29109af50512d595"],["E:/blog/myblog/public/archives/2020/09/index.html","c227b82eaae7083d039b0b5dca51d61f"],["E:/blog/myblog/public/archives/2020/10/index.html","05c369586a7e2b1ba867ea598523bd6d"],["E:/blog/myblog/public/archives/2020/index.html","e539fa13163a3a5a78d2afd2403dfde1"],["E:/blog/myblog/public/archives/index.html","c7980db36f4407c7cd7b9a165df79743"],["E:/blog/myblog/public/assets/2029079.jpg","e02089f2d6feb1ce91a2b845f7cb2b7d"],["E:/blog/myblog/public/assets/background.jpg","400623a134e263c710d154f4c8d06ca6"],["E:/blog/myblog/public/assets/qq.jpg","d236e21c830e8720418bba00fe5eaff0"],["E:/blog/myblog/public/assets/头像.jpg","38cb77667959fcfcdc28235f0c6f6a0d"],["E:/blog/myblog/public/assets/微信.jpg","5d2fdc2b263c7c5a165f8fba99b58b22"],["E:/blog/myblog/public/assets/背景.png","ee4ebe30d44fea09feeff04716cffcda"],["E:/blog/myblog/public/bangumis/index.html","50dfebd933e03b74a6c6da926ff92a48"],["E:/blog/myblog/public/books/index.html","d7119a9313b2968551449f04ed37b636"],["E:/blog/myblog/public/box/about/index.html","fc838116effc5344b7efc0560b004f99"],["E:/blog/myblog/public/box/index.html","e74249b32bb86f8a3bc67bb98a07abb9"],["E:/blog/myblog/public/categories/blog/index.html","771cd062903a7a06b6773a591cfb8aaf"],["E:/blog/myblog/public/categories/index.html","04b9de5b35a278c05a1a021f0025335b"],["E:/blog/myblog/public/categories/研一/index.html","ebd4fb5c91e0ee9d512d081867d035d5"],["E:/blog/myblog/public/contact/index.html","ca4b5ab7b4d4bd2406a9d9f55e0a1f18"],["E:/blog/myblog/public/css/background.css","98528cda0452de3cc4d69b99380ea222"],["E:/blog/myblog/public/css/iconfont.css","f733ca08807bf1981a2c9fe74cf6c450"],["E:/blog/myblog/public/css/index.css","01f2259a68e42aaaea75bd7aab0c649d"],["E:/blog/myblog/public/css/mikutap.css","146c552ffda3031d068d8e4037e7dacf"],["E:/blog/myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/blog/myblog/public/home/index.html","f65ec6a5cf49419d844450754ce452fb"],["E:/blog/myblog/public/icon.png","4b63179db3c45dfd9078a252b2575cd1"],["E:/blog/myblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/blog/myblog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/blog/myblog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["E:/blog/myblog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["E:/blog/myblog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/blog/myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/blog/myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/blog/myblog/public/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["E:/blog/myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/blog/myblog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["E:/blog/myblog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/blog/myblog/public/index.html","ffb445abc14aa8a1290b601639738f0d"],["E:/blog/myblog/public/js/Valine.min.js","361623aed6a5868e12d89f1d125a8f99"],["E:/blog/myblog/public/js/botui.js","5f87ae0efaa84fdc2a4861f601580b01"],["E:/blog/myblog/public/js/calendar.js","7c97c12ab5c2c59378bcef3ea8c4594b"],["E:/blog/myblog/public/js/deemo.js","8d82e263df9b8eb2285c35814975e555"],["E:/blog/myblog/public/js/languages.js","09753f588fdaae0985d91e181f3a940b"],["E:/blog/myblog/public/js/main.js","b382597891e958e71bb7c1099977ec66"],["E:/blog/myblog/public/js/mikutap.min.js","b81b19df193110fdbaa766a2cb5e508a"],["E:/blog/myblog/public/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["E:/blog/myblog/public/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["E:/blog/myblog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/blog/myblog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/blog/myblog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/blog/myblog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/blog/myblog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/blog/myblog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/blog/myblog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/blog/myblog/public/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["E:/blog/myblog/public/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["E:/blog/myblog/public/link/index.html","82e47b2e2ccab8ec696d5dd8642f2657"],["E:/blog/myblog/public/live2dw/assets/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["E:/blog/myblog/public/live2dw/assets/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["E:/blog/myblog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/blog/myblog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/blog/myblog/public/mikutap/index.html","3a8da01f64c23eb6be412ae3b9c908d4"],["E:/blog/myblog/public/movies/index.html","a23d8e1dec27481b3736377c308feaac"],["E:/blog/myblog/public/music/index.html","63682582d9995caf053e8fb84004eba9"],["E:/blog/myblog/public/posts/35252/index.html","0cfa23697e39e8454e4a451f0acdc863"],["E:/blog/myblog/public/posts/520520/index.html","424045a19c4c3307ed23f8c3578d62e7"],["E:/blog/myblog/public/posts/56768/index.html","804144509c62640f56b4735ef3b56492"],["E:/blog/myblog/public/posts/63785/index.html","6c4a7d5190b17c8852314e3709d0e62e"],["E:/blog/myblog/public/shared/css/common-1.css","ee0a7ce469b3a15bd2c57ef76f38dbc6"],["E:/blog/myblog/public/shared/css/index-1.css","a1aba3a1001e09230cbfdb18d522cdbc"],["E:/blog/myblog/public/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["E:/blog/myblog/public/shared/sp/css/common.css","b74c8c57d13ad72401b651f4128a2468"],["E:/blog/myblog/public/tags/blog/index.html","e32d285740ba2ea7084641e51c6f9b44"],["E:/blog/myblog/public/tags/index.html","ae3ed9c7c77a6f28cf7766d0be49c378"],["E:/blog/myblog/public/tags/书摘/index.html","51fbeff2fb3ef81859587efc0b8f2351"],["E:/blog/myblog/public/tags/实验室/index.html","ee13a7e5e52b17b8606aca9a6468fe6b"],["E:/blog/myblog/public/tags/总结/index.html","378241843c1a2c740ed7f9ac5ceaafc8"],["E:/blog/myblog/public/tags/数值分析/index.html","4c2a4e8fdfad79b5c18194dea574e128"],["E:/blog/myblog/public/tags/研究生课程/index.html","82dd869df8ec87e282c01c107bbf5662"],["E:/blog/myblog/public/tags/随笔/index.html","73aef978d91fd4382b0f931b8d2b2700"],["E:/blog/myblog/public/talk/index.html","bf3bb44a88388dc86bdf339ba3cbc4c6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







