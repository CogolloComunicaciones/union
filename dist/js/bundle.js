/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function (f) {
  if (true) {
    module.exports = f();
  } else { var g; }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) s(r[o]);

    return s;
  }({
    1: [function (require, module, exports) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      'use strict';
      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          } // Detect buggy property enumeration order in older V8 versions.
          // https://bugs.chromium.org/p/v8/issues/detail?id=4118


          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

          test1[5] = 'de';

          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test2 = {};

          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }

          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });

          if (order2.join('') !== '0123456789') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });

          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
    }, {}],
    2: [function (require, module, exports) {
      (function (process) {
        // Generated by CoffeeScript 1.12.2
        (function () {
          var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

          if (typeof performance !== "undefined" && performance !== null && performance.now) {
            module.exports = function () {
              return performance.now();
            };
          } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
            module.exports = function () {
              return (getNanoSeconds() - nodeLoadTime) / 1e6;
            };

            hrtime = process.hrtime;

            getNanoSeconds = function () {
              var hr;
              hr = hrtime();
              return hr[0] * 1e9 + hr[1];
            };

            moduleLoadTime = getNanoSeconds();
            upTime = process.uptime() * 1e9;
            nodeLoadTime = moduleLoadTime - upTime;
          } else if (Date.now) {
            module.exports = function () {
              return Date.now() - loadTime;
            };

            loadTime = Date.now();
          } else {
            module.exports = function () {
              return new Date().getTime() - loadTime;
            };

            loadTime = new Date().getTime();
          }
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "_process": 3
    }],
    3: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
    }, {}],
    4: [function (require, module, exports) {
      (function (global) {
        var now = require('performance-now'),
            root = typeof window === 'undefined' ? global : window,
            vendors = ['moz', 'webkit'],
            suffix = 'AnimationFrame',
            raf = root['request' + suffix],
            caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

        for (var i = 0; !raf && i < vendors.length; i++) {
          raf = root[vendors[i] + 'Request' + suffix];
          caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
        } // Some versions of FF have rAF but not cAF


        if (!raf || !caf) {
          var last = 0,
              id = 0,
              queue = [],
              frameDuration = 1000 / 60;

          raf = function (callback) {
            if (queue.length === 0) {
              var _now = now(),
                  next = Math.max(0, frameDuration - (_now - last));

              last = next + _now;
              setTimeout(function () {
                var cp = queue.slice(0); // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue

                queue.length = 0;

                for (var i = 0; i < cp.length; i++) {
                  if (!cp[i].cancelled) {
                    try {
                      cp[i].callback(last);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
                  }
                }
              }, Math.round(next));
            }

            queue.push({
              handle: ++id,
              callback: callback,
              cancelled: false
            });
            return id;
          };

          caf = function (handle) {
            for (var i = 0; i < queue.length; i++) {
              if (queue[i].handle === handle) {
                queue[i].cancelled = true;
              }
            }
          };
        }

        module.exports = function (fn) {
          // Wrap in a new function to prevent
          // `cancel` potentially being assigned
          // to the native rAF function
          return raf.call(root, fn);
        };

        module.exports.cancel = function () {
          caf.apply(root, arguments);
        };

        module.exports.polyfill = function () {
          root.requestAnimationFrame = raf;
          root.cancelAnimationFrame = caf;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "performance-now": 2
    }],
    5: [function (require, module, exports) {
      'use strict';

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
      * Parallax.js
      * @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
      * @description Creates a parallax effect between an array of layers,
      *              driving the motion from the gyroscope output of a smartdevice.
      *              If no gyroscope is available, the cursor position is used.
      */


      var rqAnFr = require('raf');

      var objectAssign = require('object-assign');

      var helpers = {
        propertyCache: {},
        vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],
        clamp: function clamp(value, min, max) {
          return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
        },
        data: function data(element, name) {
          return helpers.deserialize(element.getAttribute('data-' + name));
        },
        deserialize: function deserialize(value) {
          if (value === 'true') {
            return true;
          } else if (value === 'false') {
            return false;
          } else if (value === 'null') {
            return null;
          } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
          } else {
            return value;
          }
        },
        camelCase: function camelCase(value) {
          return value.replace(/-+(.)?/g, function (match, character) {
            return character ? character.toUpperCase() : '';
          });
        },
        accelerate: function accelerate(element) {
          helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
          helpers.css(element, 'transform-style', 'preserve-3d');
          helpers.css(element, 'backface-visibility', 'hidden');
        },
        transformSupport: function transformSupport(value) {
          var element = document.createElement('div'),
              propertySupport = false,
              propertyValue = null,
              featureSupport = false,
              cssProperty = null,
              jsProperty = null;

          for (var i = 0, l = helpers.vendors.length; i < l; i++) {
            if (helpers.vendors[i] !== null) {
              cssProperty = helpers.vendors[i][0] + 'transform';
              jsProperty = helpers.vendors[i][1] + 'Transform';
            } else {
              cssProperty = 'transform';
              jsProperty = 'transform';
            }

            if (element.style[jsProperty] !== undefined) {
              propertySupport = true;
              break;
            }
          }

          switch (value) {
            case '2D':
              featureSupport = propertySupport;
              break;

            case '3D':
              if (propertySupport) {
                var body = document.body || document.createElement('body'),
                    documentElement = document.documentElement,
                    documentOverflow = documentElement.style.overflow,
                    isCreatedBody = false;

                if (!document.body) {
                  isCreatedBody = true;
                  documentElement.style.overflow = 'hidden';
                  documentElement.appendChild(body);
                  body.style.overflow = 'hidden';
                  body.style.background = '';
                }

                body.appendChild(element);
                element.style[jsProperty] = 'translate3d(1px,1px,1px)';
                propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
                documentElement.style.overflow = documentOverflow;
                body.removeChild(element);

                if (isCreatedBody) {
                  body.removeAttribute('style');
                  body.parentNode.removeChild(body);
                }
              }

              break;
          }

          return featureSupport;
        },
        css: function css(element, property, value) {
          var jsProperty = helpers.propertyCache[property];

          if (!jsProperty) {
            for (var i = 0, l = helpers.vendors.length; i < l; i++) {
              if (helpers.vendors[i] !== null) {
                jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
              } else {
                jsProperty = property;
              }

              if (element.style[jsProperty] !== undefined) {
                helpers.propertyCache[property] = jsProperty;
                break;
              }
            }
          }

          element.style[jsProperty] = value;
        }
      };
      var MAGIC_NUMBER = 30,
          DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        inputElement: null,
        hoverOnly: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 10.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5,
        pointerEvents: false,
        precision: 1,
        onReady: null,
        selector: null
      };

      var Parallax = function () {
        function Parallax(element, options) {
          _classCallCheck(this, Parallax);

          this.element = element;
          var data = {
            calibrateX: helpers.data(this.element, 'calibrate-x'),
            calibrateY: helpers.data(this.element, 'calibrate-y'),
            invertX: helpers.data(this.element, 'invert-x'),
            invertY: helpers.data(this.element, 'invert-y'),
            limitX: helpers.data(this.element, 'limit-x'),
            limitY: helpers.data(this.element, 'limit-y'),
            scalarX: helpers.data(this.element, 'scalar-x'),
            scalarY: helpers.data(this.element, 'scalar-y'),
            frictionX: helpers.data(this.element, 'friction-x'),
            frictionY: helpers.data(this.element, 'friction-y'),
            originX: helpers.data(this.element, 'origin-x'),
            originY: helpers.data(this.element, 'origin-y'),
            pointerEvents: helpers.data(this.element, 'pointer-events'),
            precision: helpers.data(this.element, 'precision'),
            relativeInput: helpers.data(this.element, 'relative-input'),
            clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
            hoverOnly: helpers.data(this.element, 'hover-only'),
            inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
            selector: helpers.data(this.element, 'selector')
          };

          for (var key in data) {
            if (data[key] === null) {
              delete data[key];
            }
          }

          objectAssign(this, DEFAULTS, data, options);

          if (!this.inputElement) {
            this.inputElement = this.element;
          }

          this.calibrationTimer = null;
          this.calibrationFlag = true;
          this.enabled = false;
          this.depthsX = [];
          this.depthsY = [];
          this.raf = null;
          this.bounds = null;
          this.elementPositionX = 0;
          this.elementPositionY = 0;
          this.elementWidth = 0;
          this.elementHeight = 0;
          this.elementCenterX = 0;
          this.elementCenterY = 0;
          this.elementRangeX = 0;
          this.elementRangeY = 0;
          this.calibrationX = 0;
          this.calibrationY = 0;
          this.inputX = 0;
          this.inputY = 0;
          this.motionX = 0;
          this.motionY = 0;
          this.velocityX = 0;
          this.velocityY = 0;
          this.onMouseMove = this.onMouseMove.bind(this);
          this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
          this.onDeviceMotion = this.onDeviceMotion.bind(this);
          this.onOrientationTimer = this.onOrientationTimer.bind(this);
          this.onMotionTimer = this.onMotionTimer.bind(this);
          this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
          this.onAnimationFrame = this.onAnimationFrame.bind(this);
          this.onWindowResize = this.onWindowResize.bind(this);
          this.windowWidth = null;
          this.windowHeight = null;
          this.windowCenterX = null;
          this.windowCenterY = null;
          this.windowRadiusX = null;
          this.windowRadiusY = null;
          this.portrait = false;
          this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
          this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
          this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
          this.orientationStatus = 0;
          this.motionStatus = 0;
          this.initialise();
        }

        _createClass(Parallax, [{
          key: 'initialise',
          value: function initialise() {
            if (this.transform2DSupport === undefined) {
              this.transform2DSupport = helpers.transformSupport('2D');
              this.transform3DSupport = helpers.transformSupport('3D');
            } // Configure Context Styles


            if (this.transform3DSupport) {
              helpers.accelerate(this.element);
            }

            var style = window.getComputedStyle(this.element);

            if (style.getPropertyValue('position') === 'static') {
              this.element.style.position = 'relative';
            } // Pointer events


            if (!this.pointerEvents) {
              this.element.style.pointerEvents = 'none';
            } // Setup


            this.updateLayers();
            this.updateDimensions();
            this.enable();
            this.queueCalibration(this.calibrationDelay);
          }
        }, {
          key: 'doReadyCallback',
          value: function doReadyCallback() {
            if (this.onReady) {
              this.onReady();
            }
          }
        }, {
          key: 'updateLayers',
          value: function updateLayers() {
            if (this.selector) {
              this.layers = this.element.querySelectorAll(this.selector);
            } else {
              this.layers = this.element.children;
            }

            if (!this.layers.length) {
              console.warn('ParallaxJS: Your scene does not have any layers.');
            }

            this.depthsX = [];
            this.depthsY = [];

            for (var index = 0; index < this.layers.length; index++) {
              var layer = this.layers[index];

              if (this.transform3DSupport) {
                helpers.accelerate(layer);
              }

              layer.style.position = index ? 'absolute' : 'relative';
              layer.style.display = 'block';
              layer.style.left = 0;
              layer.style.top = 0;
              var depth = helpers.data(layer, 'depth') || 0;
              this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
              this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
            }
          }
        }, {
          key: 'updateDimensions',
          value: function updateDimensions() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.windowCenterX = this.windowWidth * this.originX;
            this.windowCenterY = this.windowHeight * this.originY;
            this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
            this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
          }
        }, {
          key: 'updateBounds',
          value: function updateBounds() {
            this.bounds = this.inputElement.getBoundingClientRect();
            this.elementPositionX = this.bounds.left;
            this.elementPositionY = this.bounds.top;
            this.elementWidth = this.bounds.width;
            this.elementHeight = this.bounds.height;
            this.elementCenterX = this.elementWidth * this.originX;
            this.elementCenterY = this.elementHeight * this.originY;
            this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
            this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
          }
        }, {
          key: 'queueCalibration',
          value: function queueCalibration(delay) {
            clearTimeout(this.calibrationTimer);
            this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
          }
        }, {
          key: 'enable',
          value: function enable() {
            if (this.enabled) {
              return;
            }

            this.enabled = true;

            if (this.orientationSupport) {
              this.portrait = false;
              window.addEventListener('deviceorientation', this.onDeviceOrientation);
              this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
            } else if (this.motionSupport) {
              this.portrait = false;
              window.addEventListener('devicemotion', this.onDeviceMotion);
              this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
            } else {
              this.calibrationX = 0;
              this.calibrationY = 0;
              this.portrait = false;
              window.addEventListener('mousemove', this.onMouseMove);
              this.doReadyCallback();
            }

            window.addEventListener('resize', this.onWindowResize);
            this.raf = rqAnFr(this.onAnimationFrame);
          }
        }, {
          key: 'disable',
          value: function disable() {
            if (!this.enabled) {
              return;
            }

            this.enabled = false;

            if (this.orientationSupport) {
              window.removeEventListener('deviceorientation', this.onDeviceOrientation);
            } else if (this.motionSupport) {
              window.removeEventListener('devicemotion', this.onDeviceMotion);
            } else {
              window.removeEventListener('mousemove', this.onMouseMove);
            }

            window.removeEventListener('resize', this.onWindowResize);
            rqAnFr.cancel(this.raf);
          }
        }, {
          key: 'calibrate',
          value: function calibrate(x, y) {
            this.calibrateX = x === undefined ? this.calibrateX : x;
            this.calibrateY = y === undefined ? this.calibrateY : y;
          }
        }, {
          key: 'invert',
          value: function invert(x, y) {
            this.invertX = x === undefined ? this.invertX : x;
            this.invertY = y === undefined ? this.invertY : y;
          }
        }, {
          key: 'friction',
          value: function friction(x, y) {
            this.frictionX = x === undefined ? this.frictionX : x;
            this.frictionY = y === undefined ? this.frictionY : y;
          }
        }, {
          key: 'scalar',
          value: function scalar(x, y) {
            this.scalarX = x === undefined ? this.scalarX : x;
            this.scalarY = y === undefined ? this.scalarY : y;
          }
        }, {
          key: 'limit',
          value: function limit(x, y) {
            this.limitX = x === undefined ? this.limitX : x;
            this.limitY = y === undefined ? this.limitY : y;
          }
        }, {
          key: 'origin',
          value: function origin(x, y) {
            this.originX = x === undefined ? this.originX : x;
            this.originY = y === undefined ? this.originY : y;
          }
        }, {
          key: 'setInputElement',
          value: function setInputElement(element) {
            this.inputElement = element;
            this.updateDimensions();
          }
        }, {
          key: 'setPosition',
          value: function setPosition(element, x, y) {
            x = x.toFixed(this.precision) + 'px';
            y = y.toFixed(this.precision) + 'px';

            if (this.transform3DSupport) {
              helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
            } else if (this.transform2DSupport) {
              helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
            } else {
              element.style.left = x;
              element.style.top = y;
            }
          }
        }, {
          key: 'onOrientationTimer',
          value: function onOrientationTimer() {
            if (this.orientationSupport && this.orientationStatus === 0) {
              this.disable();
              this.orientationSupport = false;
              this.enable();
            } else {
              this.doReadyCallback();
            }
          }
        }, {
          key: 'onMotionTimer',
          value: function onMotionTimer() {
            if (this.motionSupport && this.motionStatus === 0) {
              this.disable();
              this.motionSupport = false;
              this.enable();
            } else {
              this.doReadyCallback();
            }
          }
        }, {
          key: 'onCalibrationTimer',
          value: function onCalibrationTimer() {
            this.calibrationFlag = true;
          }
        }, {
          key: 'onWindowResize',
          value: function onWindowResize() {
            this.updateDimensions();
          }
        }, {
          key: 'onAnimationFrame',
          value: function onAnimationFrame() {
            this.updateBounds();
            var calibratedInputX = this.inputX - this.calibrationX,
                calibratedInputY = this.inputY - this.calibrationY;

            if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
              this.queueCalibration(0);
            }

            if (this.portrait) {
              this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
              this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
            } else {
              this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
              this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
            }

            this.motionX *= this.elementWidth * (this.scalarX / 100);
            this.motionY *= this.elementHeight * (this.scalarY / 100);

            if (!isNaN(parseFloat(this.limitX))) {
              this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
            }

            if (!isNaN(parseFloat(this.limitY))) {
              this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
            }

            this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
            this.velocityY += (this.motionY - this.velocityY) * this.frictionY;

            for (var index = 0; index < this.layers.length; index++) {
              var layer = this.layers[index],
                  depthX = this.depthsX[index],
                  depthY = this.depthsY[index],
                  xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
                  yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
              this.setPosition(layer, xOffset, yOffset);
            }

            this.raf = rqAnFr(this.onAnimationFrame);
          }
        }, {
          key: 'rotate',
          value: function rotate(beta, gamma) {
            // Extract Rotation
            var x = (beta || 0) / MAGIC_NUMBER,
                //  -90 :: 90
            y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180
            // Detect Orientation Change

            var portrait = this.windowHeight > this.windowWidth;

            if (this.portrait !== portrait) {
              this.portrait = portrait;
              this.calibrationFlag = true;
            }

            if (this.calibrationFlag) {
              this.calibrationFlag = false;
              this.calibrationX = x;
              this.calibrationY = y;
            }

            this.inputX = x;
            this.inputY = y;
          }
        }, {
          key: 'onDeviceOrientation',
          value: function onDeviceOrientation(event) {
            var beta = event.beta;
            var gamma = event.gamma;

            if (beta !== null && gamma !== null) {
              this.orientationStatus = 1;
              this.rotate(beta, gamma);
            }
          }
        }, {
          key: 'onDeviceMotion',
          value: function onDeviceMotion(event) {
            var beta = event.rotationRate.beta;
            var gamma = event.rotationRate.gamma;

            if (beta !== null && gamma !== null) {
              this.motionStatus = 1;
              this.rotate(beta, gamma);
            }
          }
        }, {
          key: 'onMouseMove',
          value: function onMouseMove(event) {
            var clientX = event.clientX,
                clientY = event.clientY; // reset input to center if hoverOnly is set and we're not hovering the element

            if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
              this.inputX = 0;
              this.inputY = 0;
              return;
            }

            if (this.relativeInput) {
              // Clip mouse coordinates inside element bounds.
              if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.elementPositionX);
                clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
                clientY = Math.max(clientY, this.elementPositionY);
                clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
              } // Calculate input relative to the element.


              if (this.elementRangeX && this.elementRangeY) {
                this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
                this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
              }
            } else {
              // Calculate input relative to the window.
              if (this.windowRadiusX && this.windowRadiusY) {
                this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
                this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
              }
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.disable();
            clearTimeout(this.calibrationTimer);
            clearTimeout(this.detectionTimer);
            this.element.removeAttribute('style');

            for (var index = 0; index < this.layers.length; index++) {
              this.layers[index].removeAttribute('style');
            }

            delete this.element;
            delete this.layers;
          }
        }, {
          key: 'version',
          value: function version() {
            return '3.1.0';
          }
        }]);

        return Parallax;
      }();

      module.exports = Parallax;
    }, {
      "object-assign": 1,
      "raf": 4
    }]
  }, {}, [5])(5);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax */ "./src/js/parallax.js");
/* harmony import */ var _gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gsap */ "./src/js/gsap.js");
/* harmony import */ var _gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieChart */ "./src/js/pieChart.js");
/* harmony import */ var _pieChart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pieChart__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





$(function () {
  var App = function App() {
    _classCallCheck(this, App);

    _header__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  };

  new App();
});

/***/ }),

/***/ "./src/js/gsap.js":
/*!************************!*\
  !*** ./src/js/gsap.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

TweenMax.from(".header-logo", .5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});
TweenMax.from(".menu", 1.5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});
TweenMax.from(".title", 2, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});
TweenMax.from(".hero-services--small", 2.5, {
  delay: .5,
  y: "10",
  opacity: 0,
  ease: Expo.easeInOut
});

function animateFrom(elem, direction) {
  direction = direction | 1;
  var x = 0,
      y = direction * 100;

  if (elem.classList.contains("animation-title")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("animation-item")) {
    x = 0;
    y = 100;
  }

  gsap.fromTo(elem, {
    x: x,
    y: y,
    autoAlpha: 0
  }, {
    duration: 3,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {
    autoAlpha: 0
  });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".animation").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function onEnter() {
        animateFrom(elem);
      },
      onEnterBack: function onEnterBack() {
        animateFrom(elem, -1);
      },
      onLeave: function onLeave() {
        hide(elem);
      } // assure that the element is hidden when scrolled into view

    });
  });
});

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header($el) {
    _classCallCheck(this, Header);

    this.headerScroll = function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
          $(".header").addClass("sticky");
        } else {
          $(".header").removeClass("sticky");
        }
      });
    };

    this.headerLinkActive = function () {
      var sections = $("section");
      var nav = $("nav");
      var nav_height = nav.outerHeight();
      var link = $(".link");
      $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
          var top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find("a.link").removeClass("active");
            $(this).addClass("active");
            nav.find('a.link[href="#' + $(this).attr("id") + '"]').addClass("active");
          }
        });
      });
    };

    this.$el = $el;
    this.initHeaderListeners();
    this.headerScroll();
    this.headerLinkActive();
  }

  _createClass(Header, [{
    key: "initHeaderListeners",
    value: function initHeaderListeners() {}
  }]);

  return Header;
}();

var HeaderInit = {
  init: function init() {
    var $el = $(".header");

    if ($el.length) {
      new Header($el);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderInit);

/***/ }),

/***/ "./src/js/parallax.js":
/*!****************************!*\
  !*** ./src/js/parallax.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);


if ($("#scene").length > 0) {
  var scene = document.getElementById("scene");
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    relativeInput: true
  });
}

/***/ }),

/***/ "./src/js/pieChart.js":
/*!****************************!*\
  !*** ./src/js/pieChart.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.onload = function () {
  if ($("#chartContainer").length > 0) {
    var _CanvasJS$Chart;

    var chart = new CanvasJS.Chart("chartContainer", (_CanvasJS$Chart = {
      exportEnabled: true,
      animationEnabled: true,
      legend: {
        fontColor: "#FFF"
      },
      backgroundColor: "transparent",
      title: {//text: "Title"
      }
    }, _defineProperty(_CanvasJS$Chart, "legend", {
      itemWidth: 200,
      fontColor: "#FFFFFF",
      cursor: "pointer",
      itemclick: explodePie
    }), _defineProperty(_CanvasJS$Chart, "data", [{
      type: "pie",
      indexLabelFontColor: "#FFFFFF",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [{
        y: 5.5,
        name: "Bonos Extranjeros"
      }, {
        y: 8,
        name: "Criptoactivos"
      }, {
        y: 9.8,
        name: "Factoring Latam y USA"
      }, {
        y: 10.1,
        name: "Mercado Inmobiliario"
      }, {
        y: 10.25,
        name: "Participaciones de Factoring Institucional"
      }, {
        y: 26.75,
        name: "Divisas (Arbitraje, forex)"
      }, {
        y: 28.6,
        name: "Participaciones en fondos satélite",
        exploded: true
      }]
    }]), _CanvasJS$Chart));
    chart.render();
  }
};

function explodePie(e) {
  if (typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }

  e.chart.render();
}

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniel/Desktop/Daniel/Camilo/unioncapital-v3/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BpZUNoYXJ0LmpzIl0sIm5hbWVzIjpbImciLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsIkFwcCIsIkhlYWRlciIsImluaXQiLCJUd2Vlbk1heCIsImZyb20iLCJkZWxheSIsInkiLCJvcGFjaXR5IiwiZWFzZSIsIkV4cG8iLCJlYXNlSW5PdXQiLCJhbmltYXRlRnJvbSIsImVsZW0iLCJkaXJlY3Rpb24iLCJ4IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnc2FwIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJvdmVyd3JpdGUiLCJoaWRlIiwic2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwidXRpbHMiLCJ0b0FycmF5IiwiZm9yRWFjaCIsImNyZWF0ZSIsInRyaWdnZXIiLCJvbkVudGVyIiwib25FbnRlckJhY2siLCJvbkxlYXZlIiwiJGVsIiwiaGVhZGVyU2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhlYWRlckxpbmtBY3RpdmUiLCJzZWN0aW9ucyIsIm5hdiIsIm5hdl9oZWlnaHQiLCJvdXRlckhlaWdodCIsImxpbmsiLCJvbiIsImN1cl9wb3MiLCJlYWNoIiwidG9wIiwib2Zmc2V0IiwiYm90dG9tIiwiZmluZCIsImF0dHIiLCJpbml0SGVhZGVyTGlzdGVuZXJzIiwiSGVhZGVySW5pdCIsImxlbmd0aCIsInNjZW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJyZWxhdGl2ZUlucHV0Iiwib25sb2FkIiwiY2hhcnQiLCJDYW52YXNKUyIsIkNoYXJ0IiwiZXhwb3J0RW5hYmxlZCIsImFuaW1hdGlvbkVuYWJsZWQiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsIml0ZW1XaWR0aCIsImN1cnNvciIsIml0ZW1jbGljayIsImV4cGxvZGVQaWUiLCJ0eXBlIiwiaW5kZXhMYWJlbEZvbnRDb2xvciIsInNob3dJbkxlZ2VuZCIsInRvb2xUaXBDb250ZW50IiwiaW5kZXhMYWJlbCIsImRhdGFQb2ludHMiLCJuYW1lIiwiZXhwbG9kZWQiLCJyZW5kZXIiLCJkYXRhU2VyaWVzIiwiZGF0YVBvaW50SW5kZXgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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LE1BQVI7QUFDRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi9wYXJhbGxheFwiO1xuaW1wb3J0IGdzYXAgZnJvbSBcIi4vZ3NhcFwiO1xuaW1wb3J0IHBpZUNoYXJ0IGZyb20gXCIuL3BpZUNoYXJ0XCI7XG5cbiQoZnVuY3Rpb24gKCkge1xuICBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgSGVhZGVyLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgbmV3IEFwcCgpO1xufSk7XG4iLCJUd2Vlbk1heC5mcm9tKFwiLmhlYWRlci1sb2dvXCIsIC41LCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cblR3ZWVuTWF4LmZyb20oXCIubWVudVwiLCAxLjUsIHtcbiAgZGVsYXk6IC41LFxuICB5OiBcIjEwXCIsXG4gIG9wYWNpdHk6IDAsXG4gIGVhc2U6IEV4cG8uZWFzZUluT3V0XG59KTtcblxuVHdlZW5NYXguZnJvbShcIi50aXRsZVwiLCAyLCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cblR3ZWVuTWF4LmZyb20oXCIuaGVyby1zZXJ2aWNlcy0tc21hbGxcIiwgMi41LCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVGcm9tKGVsZW0sIGRpcmVjdGlvbikge1xuICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfCAxO1xuICBcbiAgdmFyIHggPSAwLFxuICAgICAgeSA9IGRpcmVjdGlvbiAqIDEwMDtcbiAgaWYoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRpb24tdGl0bGVcIikpIHtcbiAgICB4ID0gLTEwMDtcbiAgICB5ID0gMDtcbiAgfSBlbHNlIGlmKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0aW9uLWl0ZW1cIikpIHtcbiAgICB4ID0gMDtcbiAgICB5ID0gMTAwO1xuICB9XG4gIGdzYXAuZnJvbVRvKGVsZW0sIHt4OiB4LCB5OiB5LCBhdXRvQWxwaGE6IDB9LCB7XG4gICAgZHVyYXRpb246IDMsIFxuICAgIHg6IDAsXG4gICAgeTogMCwgXG4gICAgYXV0b0FscGhhOiAxLCBcbiAgICBlYXNlOiBcImV4cG9cIiwgXG4gICAgb3ZlcndyaXRlOiBcImF1dG9cIlxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGdzYXAuc2V0KGVsZW0sIHthdXRvQWxwaGE6IDB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gIFxuICBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuYW5pbWF0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgIGhpZGUoZWxlbSk7IC8vIGFzc3VyZSB0aGF0IHRoZSBlbGVtZW50IGlzIGhpZGRlbiB3aGVuIHNjcm9sbGVkIGludG8gdmlld1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IGVsZW0sXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpIHsgYW5pbWF0ZUZyb20oZWxlbSkgfSwgXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24oKSB7IGFuaW1hdGVGcm9tKGVsZW0sIC0xKSB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKSB7IGhpZGUoZWxlbSkgfSAvLyBhc3N1cmUgdGhhdCB0aGUgZWxlbWVudCBpcyBoaWRkZW4gd2hlbiBzY3JvbGxlZCBpbnRvIHZpZXdcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuXG4gICAgdGhpcy5pbml0SGVhZGVyTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5oZWFkZXJTY3JvbGwoKTtcbiAgICB0aGlzLmhlYWRlckxpbmtBY3RpdmUoKTtcbiAgfVxuXG4gIGluaXRIZWFkZXJMaXN0ZW5lcnMoKSB7fVxuXG4gIGhlYWRlclNjcm9sbCA9ICgpID0+IHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICAgICAkKFwiLmhlYWRlclwiKS5hZGRDbGFzcyhcInN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGhlYWRlckxpbmtBY3RpdmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSAkKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBuYXYgPSAkKFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdl9oZWlnaHQgPSBuYXYub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBsaW5rID0gJChcIi5saW5rXCIpO1xuXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgc2VjdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG5hdl9oZWlnaHQsXG4gICAgICAgICAgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgIGlmIChjdXJfcG9zID49IHRvcCAmJiBjdXJfcG9zIDw9IGJvdHRvbSkge1xuICAgICAgICAgIG5hdi5maW5kKFwiYS5saW5rXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICBuYXYuZmluZCgnYS5saW5rW2hyZWY9XCIjJyArICQodGhpcykuYXR0cihcImlkXCIpICsgJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY29uc3QgSGVhZGVySW5pdCA9IHtcbiAgaW5pdCgpIHtcbiAgICBjb25zdCAkZWwgPSAkKFwiLmhlYWRlclwiKTtcbiAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgbmV3IEhlYWRlcigkZWwpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckluaXQ7XG4iLCJpbXBvcnQgUGFyYWxsYXggZnJvbSBcInBhcmFsbGF4LWpzXCI7XG5cbmlmICgkKFwiI3NjZW5lXCIpLmxlbmd0aCA+IDApIHtcbiAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZVwiKTtcbiAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUsIHtcbiAgICByZWxhdGl2ZUlucHV0OiB0cnVlLFxuICB9KTtcbn0iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJChcIiNjaGFydENvbnRhaW5lclwiKS5sZW5ndGggPiAwKSB7XG4gIHZhciBjaGFydCA9IG5ldyBDYW52YXNKUy5DaGFydChcImNoYXJ0Q29udGFpbmVyXCIsIHtcbiAgICBleHBvcnRFbmFibGVkOiB0cnVlLFxuICAgIGFuaW1hdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgbGVnZW5kOiB7XG4gICAgICBmb250Q29sb3I6IFwiI0ZGRlwiLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgdGl0bGU6IHtcbiAgICAgIC8vdGV4dDogXCJUaXRsZVwiXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGl0ZW1XaWR0aDogMjAwLFxuICAgICAgZm9udENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBpdGVtY2xpY2s6IGV4cGxvZGVQaWUsXG4gICAgfSxcbiAgICBkYXRhOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwicGllXCIsXG4gICAgICAgIGluZGV4TGFiZWxGb250Q29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBzaG93SW5MZWdlbmQ6IHRydWUsXG4gICAgICAgIHRvb2xUaXBDb250ZW50OiBcIntuYW1lfTogPHN0cm9uZz57eX0lPC9zdHJvbmc+XCIsXG4gICAgICAgIGluZGV4TGFiZWw6IFwie25hbWV9IC0ge3l9JVwiLFxuICAgICAgICBcbiAgICAgICAgZGF0YVBvaW50czogW1xuICAgICAgICAgIHsgeTogNS41LCBuYW1lOiBcIkJvbm9zIEV4dHJhbmplcm9zXCIgfSxcbiAgICAgICAgICB7IHk6IDgsIG5hbWU6IFwiQ3JpcHRvYWN0aXZvc1wiIH0sXG4gICAgICAgICAgeyB5OiA5LjgsIG5hbWU6IFwiRmFjdG9yaW5nIExhdGFtIHkgVVNBXCIgfSxcbiAgICAgICAgICB7IHk6IDEwLjEsIG5hbWU6IFwiTWVyY2FkbyBJbm1vYmlsaWFyaW9cIiB9LFxuICAgICAgICAgIHsgeTogMTAuMjUsIG5hbWU6IFwiUGFydGljaXBhY2lvbmVzIGRlIEZhY3RvcmluZyBJbnN0aXR1Y2lvbmFsXCIgfSxcbiAgICAgICAgICB7IHk6IDI2Ljc1LCBuYW1lOiBcIkRpdmlzYXMgKEFyYml0cmFqZSwgZm9yZXgpXCIgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB5OiAyOC42LFxuICAgICAgICAgICAgbmFtZTogXCJQYXJ0aWNpcGFjaW9uZXMgZW4gZm9uZG9zIHNhdMOpbGl0ZVwiLFxuICAgICAgICAgICAgZXhwbG9kZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG4gIGNoYXJ0LnJlbmRlcigpO1xufVxufTtcblxuZnVuY3Rpb24gZXhwbG9kZVBpZShlKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgZS5kYXRhU2VyaWVzLmRhdGFQb2ludHNbZS5kYXRhUG9pbnRJbmRleF0uZXhwbG9kZWQgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAhZS5kYXRhU2VyaWVzLmRhdGFQb2ludHNbZS5kYXRhUG9pbnRJbmRleF0uZXhwbG9kZWRcbiAgKSB7XG4gICAgZS5kYXRhU2VyaWVzLmRhdGFQb2ludHNbZS5kYXRhUG9pbnRJbmRleF0uZXhwbG9kZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGUuZGF0YVNlcmllcy5kYXRhUG9pbnRzW2UuZGF0YVBvaW50SW5kZXhdLmV4cGxvZGVkID0gZmFsc2U7XG4gIH1cbiAgZS5jaGFydC5yZW5kZXIoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=