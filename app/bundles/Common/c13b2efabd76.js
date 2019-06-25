/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/bundles/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/src/index.js","Vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/components/main/Main.js":
/*!*****************************************!*\
  !*** ./app/src/components/main/Main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Coding\\Django\\djreact-skeleton\\src\\app\\src\\components\\main\\Main.js: Unexpected token, expected \";\" (5:13)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mMain\u001b[39m(props) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m    render() {\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mContainer\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mRow\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:6344:17)\n    at Object.unexpected (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:7659:16)\n    at Object.semicolon (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:7641:40)\n    at Object.parseExpressionStatement (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10323:10)\n    at Object.parseStatementContent (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9922:19)\n    at Object.parseStatement (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9788:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10364:25)\n    at Object.parseBlockBody (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10351:10)\n    at Object.parseBlock (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10335:10)\n    at Object.parseFunctionBody (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9408:24)\n    at Object.parseFunctionBodyAndFinish (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9378:10)\n    at withTopicForbiddingContext (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10498:12)\n    at Object.withTopicForbiddingContext (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9683:14)\n    at Object.parseFunction (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10497:10)\n    at Object.parseFunctionStatement (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10136:17)\n    at Object.parseStatementContent (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9826:21)\n    at Object.parseStatement (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9788:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10364:25)\n    at Object.parseBlockBody (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:10351:10)\n    at Object.parseTopLevel (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:9717:10)\n    at Object.parse (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:11233:17)\n    at parse (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\parser\\lib\\index.js:11269:38)\n    at parser (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)\n    at runSync (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (D:\\Coding\\Django\\djreact-skeleton\\src\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ "./app/src/index.js":
/*!**************************!*\
  !*** ./app/src/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/Main */ "./app/src/components/main/Main.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./app/src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-worker */ "./app/src/service-worker.js");

 // Bootstrap 4.3.1

 // Pages


 // Service Worker


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById("app"));
Object(_service_worker__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ }),

/***/ "./app/src/index.scss":
/*!****************************!*\
  !*** ./app/src/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/src/service-worker.js":
/*!***********************************!*\
  !*** ./app/src/service-worker.js ***!
  \***********************************/
/*! exports provided: default, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register() {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  })["catch"](function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ })

/******/ });
//# sourceMappingURL=c13b2efabd76.js.map