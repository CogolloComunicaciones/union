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
    var _this = this;

    _classCallCheck(this, Header);

    this.openMenu = function (e) {
      _this.$dataOpenMenu.toggleClass("active");

      _this.$dataMenu.toggleClass("active");

      $("body").toggleClass("active");
    };

    this.openItemMenu = function (e) {
      _this.$dataOpenMenu.removeClass("active");

      _this.$dataMenu.removeClass("active");
    };

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
    this.$dataMenu = $el.find("[data-menu]");
    this.$dataOpenMenu = $el.find("[data-open-menu]");
    this.$dataItem = $el.find("[data-item]");
    this.initHeaderListeners();
    this.headerScroll();
    this.headerLinkActive();
  }

  _createClass(Header, [{
    key: "initHeaderListeners",
    value: function initHeaderListeners() {
      this.$dataOpenMenu.on("click", this.openMenu);
      this.$dataItem.on("click", this.openItemMenu);
    }
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
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);

var isMobile = function isMobile() {
  return $(window).width() < 1024 ? true : false;
};

if ($("#scene").length > 0) {
  var scene = document.getElementById("scene");
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    relativeInput: true
  });
}

if (isMobile()) {
  parallaxInstance.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFyYWxsYXguanMiXSwibmFtZXMiOlsiZyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiQXBwIiwiSGVhZGVyIiwiaW5pdCIsIlR3ZWVuTWF4IiwiZnJvbSIsImRlbGF5IiwieSIsIm9wYWNpdHkiLCJlYXNlIiwiRXhwbyIsImVhc2VJbk91dCIsImFuaW1hdGVGcm9tIiwiZWxlbSIsImRpcmVjdGlvbiIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdzYXAiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsIm92ZXJ3cml0ZSIsImhpZGUiLCJzZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJ1dGlscyIsInRvQXJyYXkiLCJmb3JFYWNoIiwiY3JlYXRlIiwidHJpZ2dlciIsIm9uRW50ZXIiLCJvbkVudGVyQmFjayIsIm9uTGVhdmUiLCIkZWwiLCJvcGVuTWVudSIsIiRkYXRhT3Blbk1lbnUiLCJ0b2dnbGVDbGFzcyIsIiRkYXRhTWVudSIsIm9wZW5JdGVtTWVudSIsInJlbW92ZUNsYXNzIiwiaGVhZGVyU2Nyb2xsIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJoZWFkZXJMaW5rQWN0aXZlIiwic2VjdGlvbnMiLCJuYXYiLCJuYXZfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJsaW5rIiwib24iLCJjdXJfcG9zIiwiZWFjaCIsInRvcCIsIm9mZnNldCIsImJvdHRvbSIsImZpbmQiLCJhdHRyIiwiJGRhdGFJdGVtIiwiaW5pdEhlYWRlckxpc3RlbmVycyIsIkhlYWRlckluaXQiLCJsZW5ndGgiLCJpc01vYmlsZSIsIndpZHRoIiwic2NlbmUiLCJnZXRFbGVtZW50QnlJZCIsInBhcmFsbGF4SW5zdGFuY2UiLCJQYXJhbGxheCIsInJlbGF0aXZlSW5wdXQiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxDQUtBO0FBRUE7OztBQUNBLHdDQVJBLENBUUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFdBWkEsQ0FjQTs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxXQUZBOztBQUdBO0FBQ0E7QUFDQSxXQXhCQSxDQTBCQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQTs7QUFHQSxpRUFDQSxzQkFEQSxFQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBckNBLENBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQXpCQTtLRGhFQSxFLEVBQUE7OztBRUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0EsV0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7O0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLFdBYkEsTUFhQTtBQUNBO0FBQ0E7QUFDQSxhQUZBOztBQUdBO0FBQ0EsV0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7O0FBR0E7QUFDQTtBQUVBLFNBaENBLEVBZ0NBLElBaENBLENBZ0NBLElBaENBOzs7O01GREE7O0FHQUE7QUFDQSx3QyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLENBTUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0EsT0FuQkE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxDQUtBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FYQSxDLENBYUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFD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O0FBQ2RJLGtCQUFnQixDQUFDRyxPQUFqQjtBQUNELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyZm9ybWFuY2Utbm93LmpzLm1hcFxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuIiwiLyoqXG4qIFBhcmFsbGF4LmpzXG4qIEBhdXRob3IgTWF0dGhldyBXYWdlcmZpZWxkIC0gQHdhZ2VyZmllbGQsIFJlbsOpIFJvdGggLSBtYWlsQHJlbmVyb3RoLm9yZ1xuKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIHBhcmFsbGF4IGVmZmVjdCBiZXR3ZWVuIGFuIGFycmF5IG9mIGxheWVycyxcbiogICAgICAgICAgICAgIGRyaXZpbmcgdGhlIG1vdGlvbiBmcm9tIHRoZSBneXJvc2NvcGUgb3V0cHV0IG9mIGEgc21hcnRkZXZpY2UuXG4qICAgICAgICAgICAgICBJZiBubyBneXJvc2NvcGUgaXMgYXZhaWxhYmxlLCB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIHVzZWQuXG4qL1xuXG5jb25zdCBycUFuRnIgPSByZXF1aXJlKCdyYWYnKVxuY29uc3Qgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpXG5cbmNvbnN0IGhlbHBlcnMgPSB7XG4gIHByb3BlcnR5Q2FjaGU6IHt9LFxuICB2ZW5kb3JzOiBbbnVsbCwgWyctd2Via2l0LScsJ3dlYmtpdCddLCBbJy1tb3otJywnTW96J10sIFsnLW8tJywnTyddLCBbJy1tcy0nLCdtcyddXSxcblxuICBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbWluIDwgbWF4XG4gICAgICA/ICh2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWUpXG4gICAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG4gIH0sXG5cbiAgZGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIGhlbHBlcnMuZGVzZXJpYWxpemUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJytuYW1lKSlcbiAgfSxcblxuICBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGVsc2UgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9LFxuXG4gIGNhbWVsQ2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKyguKT8vZywgKG1hdGNoLCBjaGFyYWN0ZXIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSA6ICcnXG4gICAgfSlcbiAgfSxcblxuICBhY2NlbGVyYXRlKGVsZW1lbnQpIHtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMC4wMDAxZGVnKScpXG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybS1zdHlsZScsICdwcmVzZXJ2ZS0zZCcpXG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ2JhY2tmYWNlLXZpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgfSxcblxuICB0cmFuc2Zvcm1TdXBwb3J0KHZhbHVlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsLFxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBjc3NQcm9wZXJ0eSA9IG51bGwsXG4gICAgICAgIGpzUHJvcGVydHkgPSBudWxsXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzBdICsgJ3RyYW5zZm9ybSdcbiAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICdUcmFuc2Zvcm0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCh2YWx1ZSkge1xuICAgICAgY2FzZSAnMkQnOlxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5U3VwcG9ydFxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnM0QnOlxuICAgICAgICBpZiAocHJvcGVydHlTdXBwb3J0KSB7XG4gICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICBkb2N1bWVudE92ZXJmbG93ID0gZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93LFxuICAgICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gZmFsc2VcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IHRydWVcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknXG4gICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzUHJvcGVydHkpXG4gICAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcGVydHlWYWx1ZS5sZW5ndGggPiAwICYmIHByb3BlcnR5VmFsdWUgIT09ICdub25lJ1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY3VtZW50T3ZlcmZsb3dcbiAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG5cbiAgICAgICAgICBpZiAoIGlzQ3JlYXRlZEJvZHkgKSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICAgICAgICAgICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlU3VwcG9ydFxuICB9LFxuXG4gIGNzcyhlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBsZXQganNQcm9wZXJ0eSA9IGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV1cbiAgICBpZiAoIWpzUHJvcGVydHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMuY2FtZWxDYXNlKGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICctJyArIHByb3BlcnR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBwcm9wZXJ0eVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldID0ganNQcm9wZXJ0eVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9IHZhbHVlXG4gIH1cblxufVxuXG5jb25zdCBNQUdJQ19OVU1CRVIgPSAzMCxcbiAgICAgIERFRkFVTFRTID0ge1xuICAgICAgICByZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgY2xpcFJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICAgICAgICBpbnB1dEVsZW1lbnQ6IG51bGwsXG4gICAgICAgIGhvdmVyT25seTogZmFsc2UsXG4gICAgICAgIGNhbGlicmF0aW9uVGhyZXNob2xkOiAxMDAsXG4gICAgICAgIGNhbGlicmF0aW9uRGVsYXk6IDUwMCxcbiAgICAgICAgc3VwcG9ydERlbGF5OiA1MDAsXG4gICAgICAgIGNhbGlicmF0ZVg6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGVZOiB0cnVlLFxuICAgICAgICBpbnZlcnRYOiB0cnVlLFxuICAgICAgICBpbnZlcnRZOiB0cnVlLFxuICAgICAgICBsaW1pdFg6IGZhbHNlLFxuICAgICAgICBsaW1pdFk6IGZhbHNlLFxuICAgICAgICBzY2FsYXJYOiAxMC4wLFxuICAgICAgICBzY2FsYXJZOiAxMC4wLFxuICAgICAgICBmcmljdGlvblg6IDAuMSxcbiAgICAgICAgZnJpY3Rpb25ZOiAwLjEsXG4gICAgICAgIG9yaWdpblg6IDAuNSxcbiAgICAgICAgb3JpZ2luWTogMC41LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgcHJlY2lzaW9uOiAxLFxuICAgICAgICBvblJlYWR5OiBudWxsLFxuICAgICAgICBzZWxlY3RvcjogbnVsbFxuICAgICAgfVxuXG5jbGFzcyBQYXJhbGxheCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjYWxpYnJhdGVYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXgnKSxcbiAgICAgIGNhbGlicmF0ZVk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteScpLFxuICAgICAgaW52ZXJ0WDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC14JyksXG4gICAgICBpbnZlcnRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXknKSxcbiAgICAgIGxpbWl0WDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2xpbWl0LXgnKSxcbiAgICAgIGxpbWl0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2xpbWl0LXknKSxcbiAgICAgIHNjYWxhclg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteCcpLFxuICAgICAgc2NhbGFyWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci15JyksXG4gICAgICBmcmljdGlvblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdmcmljdGlvbi14JyksXG4gICAgICBmcmljdGlvblk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdmcmljdGlvbi15JyksXG4gICAgICBvcmlnaW5YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXgnKSxcbiAgICAgIG9yaWdpblk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teScpLFxuICAgICAgcG9pbnRlckV2ZW50czogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJyksXG4gICAgICBwcmVjaXNpb246IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwcmVjaXNpb24nKSxcbiAgICAgIHJlbGF0aXZlSW5wdXQ6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdyZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgY2xpcFJlbGF0aXZlSW5wdXQ6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjbGlwLXJlbGF0aXZlLWlucHV0JyksXG4gICAgICBob3Zlck9ubHk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdob3Zlci1vbmx5JyksXG4gICAgICBpbnB1dEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2lucHV0LWVsZW1lbnQnKSksXG4gICAgICBzZWxlY3RvcjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NlbGVjdG9yJylcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0QXNzaWduKHRoaXMsIERFRkFVTFRTLCBkYXRhLCBvcHRpb25zKVxuXG4gICAgaWYoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IG51bGxcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuZGVwdGhzWCA9IFtdXG4gICAgdGhpcy5kZXB0aHNZID0gW11cbiAgICB0aGlzLnJhZiA9IG51bGxcblxuICAgIHRoaXMuYm91bmRzID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSAwXG4gICAgdGhpcy5lbGVtZW50V2lkdGggPSAwXG4gICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gMFxuXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gMFxuXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gMFxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IDBcblxuICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMFxuXG4gICAgdGhpcy5pbnB1dFggPSAwXG4gICAgdGhpcy5pbnB1dFkgPSAwXG5cbiAgICB0aGlzLm1vdGlvblggPSAwXG4gICAgdGhpcy5tb3Rpb25ZID0gMFxuXG4gICAgdGhpcy52ZWxvY2l0eVggPSAwXG4gICAgdGhpcy52ZWxvY2l0eVkgPSAwXG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRGV2aWNlTW90aW9uID0gdGhpcy5vbkRldmljZU1vdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk9yaWVudGF0aW9uVGltZXIgPSB0aGlzLm9uT3JpZW50YXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbk1vdGlvblRpbWVyID0gdGhpcy5vbk1vdGlvblRpbWVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciA9IHRoaXMub25DYWxpYnJhdGlvblRpbWVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQW5pbWF0aW9uRnJhbWUgPSB0aGlzLm9uQW5pbWF0aW9uRnJhbWUuYmluZCh0aGlzKVxuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcylcblxuICAgIHRoaXMud2luZG93V2lkdGggPSBudWxsXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSBudWxsXG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWSA9IG51bGxcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gbnVsbFxuICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZVxuICAgIHRoaXMuZGVza3RvcCA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8QkIxMHxtb2JpfHRhYmxldHxvcGVyYSBtaW5pfG5leHVzIDcpL2kpXG4gICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wXG4gICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDBcbiAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDBcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpXG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnMkQnKVxuICAgICAgdGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzNEJylcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmUgQ29udGV4dCBTdHlsZXNcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZSh0aGlzLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxuICAgIGlmIChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgIH1cblxuICAgIC8vIFBvaW50ZXIgZXZlbnRzXG4gICAgaWYoIXRoaXMucG9pbnRlckV2ZW50cykge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcbiAgICB9XG5cbiAgICAvLyBTZXR1cFxuICAgIHRoaXMudXBkYXRlTGF5ZXJzKClcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgIHRoaXMuZW5hYmxlKClcbiAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24odGhpcy5jYWxpYnJhdGlvbkRlbGF5KVxuICB9XG5cbiAgZG9SZWFkeUNhbGxiYWNrKCkge1xuICAgIGlmKHRoaXMub25SZWFkeSkge1xuICAgICAgdGhpcy5vblJlYWR5KClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMYXllcnMoKSB7XG4gICAgaWYodGhpcy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlblxuICAgIH1cblxuICAgIGlmKCF0aGlzLmxheWVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGFyYWxsYXhKUzogWW91ciBzY2VuZSBkb2VzIG5vdCBoYXZlIGFueSBsYXllcnMuJylcbiAgICB9XG5cbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF1cblxuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZShsYXllcilcbiAgICAgIH1cblxuICAgICAgbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBpbmRleCA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnXG4gICAgICBsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgbGF5ZXIuc3R5bGUubGVmdCA9IDBcbiAgICAgIGxheWVyLnN0eWxlLnRvcCA9IDBcblxuICAgICAgbGV0IGRlcHRoID0gaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgnKSB8fCAwXG4gICAgICB0aGlzLmRlcHRoc1gucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC14JykgfHwgZGVwdGgpXG4gICAgICB0aGlzLmRlcHRoc1kucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC15JykgfHwgZGVwdGgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucygpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IHRoaXMud2luZG93V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSB0aGlzLndpbmRvd0hlaWdodCAqIHRoaXMub3JpZ2luWVxuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWCwgdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMud2luZG93Q2VudGVyWClcbiAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclksIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy53aW5kb3dDZW50ZXJZKVxuICB9XG5cbiAgdXBkYXRlQm91bmRzKCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5pbnB1dEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSB0aGlzLmJvdW5kcy5sZWZ0XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gdGhpcy5ib3VuZHMudG9wXG4gICAgdGhpcy5lbGVtZW50V2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodFxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSB0aGlzLmVsZW1lbnRXaWR0aCAqIHRoaXMub3JpZ2luWFxuICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJYLCB0aGlzLmVsZW1lbnRXaWR0aCAtIHRoaXMuZWxlbWVudENlbnRlclgpXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWSwgdGhpcy5lbGVtZW50SGVpZ2h0IC0gdGhpcy5lbGVtZW50Q2VudGVyWSlcbiAgfVxuXG4gIHF1ZXVlQ2FsaWJyYXRpb24oZGVsYXkpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKVxuICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNhbGlicmF0aW9uVGltZXIsIGRlbGF5KVxuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKVxuICAgICAgdGhpcy5kZXRlY3Rpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbk9yaWVudGF0aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KVxuICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgICAgdGhpcy5kZXRlY3Rpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbk1vdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSAwXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpXG4gICAgdGhpcy5yYWYgPSBycUFuRnIodGhpcy5vbkFuaW1hdGlvbkZyYW1lKVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgIH1cblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHJxQW5Gci5jYW5jZWwodGhpcy5yYWYpXG4gIH1cblxuICBjYWxpYnJhdGUoeCwgeSkge1xuICAgIHRoaXMuY2FsaWJyYXRlWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWCA6IHhcbiAgICB0aGlzLmNhbGlicmF0ZVkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVkgOiB5XG4gIH1cblxuICBpbnZlcnQoeCwgeSkge1xuICAgIHRoaXMuaW52ZXJ0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WCA6IHhcbiAgICB0aGlzLmludmVydFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFkgOiB5XG4gIH1cblxuICBmcmljdGlvbih4LCB5KSB7XG4gICAgdGhpcy5mcmljdGlvblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWCA6IHhcbiAgICB0aGlzLmZyaWN0aW9uWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25ZIDogeVxuICB9XG5cbiAgc2NhbGFyKHgsIHkpIHtcbiAgICB0aGlzLnNjYWxhclggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclggOiB4XG4gICAgdGhpcy5zY2FsYXJZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJZIDogeVxuICB9XG5cbiAgbGltaXQoeCwgeSkge1xuICAgIHRoaXMubGltaXRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFggOiB4XG4gICAgdGhpcy5saW1pdFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WSA6IHlcbiAgfVxuXG4gIG9yaWdpbih4LCB5KSB7XG4gICAgdGhpcy5vcmlnaW5YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5YIDogeFxuICAgIHRoaXMub3JpZ2luWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWSA6IHlcbiAgfVxuXG4gIHNldElucHV0RWxlbWVudChlbGVtZW50KSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgfVxuXG4gIHNldFBvc2l0aW9uKGVsZW1lbnQsIHgsIHkpIHtcbiAgICB4ID0geC50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCdcbiAgICB5ID0geS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCdcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHggKyAnLCcgKyB5ICsgJywwKScpXG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCkge1xuICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAnLCcgKyB5ICsgJyknKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4XG4gICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHlcbiAgICB9XG4gIH1cblxuICBvbk9yaWVudGF0aW9uVGltZXIoKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0ICYmIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPT09IDApIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpXG4gICAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9IGZhbHNlXG4gICAgICB0aGlzLmVuYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBvbk1vdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm1vdGlvblN1cHBvcnQgJiYgdGhpcy5tb3Rpb25TdGF0dXMgPT09IDApIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpXG4gICAgICB0aGlzLm1vdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25DYWxpYnJhdGlvblRpbWVyKCkge1xuICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZVxuICB9XG5cbiAgb25XaW5kb3dSZXNpemUoKSB7XG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgfVxuXG4gIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgdGhpcy51cGRhdGVCb3VuZHMoKVxuICAgIGxldCBjYWxpYnJhdGVkSW5wdXRYID0gdGhpcy5pbnB1dFggLSB0aGlzLmNhbGlicmF0aW9uWCxcbiAgICAgICAgY2FsaWJyYXRlZElucHV0WSA9IHRoaXMuaW5wdXRZIC0gdGhpcy5jYWxpYnJhdGlvbllcbiAgICBpZiAoKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFgpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCkgfHwgKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFkpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCkpIHtcbiAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbigwKVxuICAgIH1cbiAgICBpZiAodGhpcy5wb3J0cmFpdCkge1xuICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFhcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFlcbiAgICB9XG4gICAgdGhpcy5tb3Rpb25YICo9IHRoaXMuZWxlbWVudFdpZHRoICogKHRoaXMuc2NhbGFyWCAvIDEwMClcbiAgICB0aGlzLm1vdGlvblkgKj0gdGhpcy5lbGVtZW50SGVpZ2h0ICogKHRoaXMuc2NhbGFyWSAvIDEwMClcbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFgpKSkge1xuICAgICAgdGhpcy5tb3Rpb25YID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblgsIC10aGlzLmxpbWl0WCwgdGhpcy5saW1pdFgpXG4gICAgfVxuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WSkpKSB7XG4gICAgICB0aGlzLm1vdGlvblkgPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWSwgLXRoaXMubGltaXRZLCB0aGlzLmxpbWl0WSlcbiAgICB9XG4gICAgdGhpcy52ZWxvY2l0eVggKz0gKHRoaXMubW90aW9uWCAtIHRoaXMudmVsb2NpdHlYKSAqIHRoaXMuZnJpY3Rpb25YXG4gICAgdGhpcy52ZWxvY2l0eVkgKz0gKHRoaXMubW90aW9uWSAtIHRoaXMudmVsb2NpdHlZKSAqIHRoaXMuZnJpY3Rpb25ZXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWCA9IHRoaXMuZGVwdGhzWFtpbmRleF0sXG4gICAgICAgICAgZGVwdGhZID0gdGhpcy5kZXB0aHNZW2luZGV4XSxcbiAgICAgICAgICB4T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVggKiAoZGVwdGhYICogKHRoaXMuaW52ZXJ0WCA/IC0xIDogMSkpLFxuICAgICAgICAgIHlPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WSAqIChkZXB0aFkgKiAodGhpcy5pbnZlcnRZID8gLTEgOiAxKSlcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24obGF5ZXIsIHhPZmZzZXQsIHlPZmZzZXQpXG4gICAgfVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIHJvdGF0ZShiZXRhLCBnYW1tYSl7XG4gICAgLy8gRXh0cmFjdCBSb3RhdGlvblxuICAgIGxldCB4ID0gKGJldGEgfHwgMCkgLyBNQUdJQ19OVU1CRVIsIC8vICAtOTAgOjogOTBcbiAgICAgICAgeSA9IChnYW1tYSB8fCAwKSAvIE1BR0lDX05VTUJFUiAvLyAtMTgwIDo6IDE4MFxuXG4gICAgLy8gRGV0ZWN0IE9yaWVudGF0aW9uIENoYW5nZVxuICAgIGxldCBwb3J0cmFpdCA9IHRoaXMud2luZG93SGVpZ2h0ID4gdGhpcy53aW5kb3dXaWR0aFxuICAgIGlmICh0aGlzLnBvcnRyYWl0ICE9PSBwb3J0cmFpdCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IHBvcnRyYWl0XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWxpYnJhdGlvbkZsYWcpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gZmFsc2VcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0geFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSB5XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFggPSB4XG4gICAgdGhpcy5pbnB1dFkgPSB5XG4gIH1cblxuICBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG4gICAgbGV0IGJldGEgPSBldmVudC5iZXRhXG4gICAgbGV0IGdhbW1hID0gZXZlbnQuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDFcbiAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKVxuICAgIH1cbiAgfVxuXG4gIG9uRGV2aWNlTW90aW9uKGV2ZW50KSB7XG4gICAgbGV0IGJldGEgPSBldmVudC5yb3RhdGlvblJhdGUuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5nYW1tYVxuICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDFcbiAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WVxuXG4gICAgLy8gcmVzZXQgaW5wdXQgdG8gY2VudGVyIGlmIGhvdmVyT25seSBpcyBzZXQgYW5kIHdlJ3JlIG5vdCBob3ZlcmluZyB0aGUgZWxlbWVudFxuICAgIGlmKHRoaXMuaG92ZXJPbmx5ICYmXG4gICAgICAoKGNsaWVudFggPCB0aGlzLmVsZW1lbnRQb3NpdGlvblggfHwgY2xpZW50WCA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoKSB8fFxuICAgICAgKGNsaWVudFkgPCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgfHwgY2xpZW50WSA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCkpKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gMFxuICAgICAgICB0aGlzLmlucHV0WSA9IDBcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICBpZiAodGhpcy5yZWxhdGl2ZUlucHV0KSB7XG4gICAgICAvLyBDbGlwIG1vdXNlIGNvb3JkaW5hdGVzIGluc2lkZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgIGlmICh0aGlzLmNsaXBSZWxhdGl2ZUlucHV0KSB7XG4gICAgICAgIGNsaWVudFggPSBNYXRoLm1heChjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblgpXG4gICAgICAgIGNsaWVudFggPSBNYXRoLm1pbihjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aClcbiAgICAgICAgY2xpZW50WSA9IE1hdGgubWF4KGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSlcbiAgICAgICAgY2xpZW50WSA9IE1hdGgubWluKGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodClcbiAgICAgIH1cbiAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgIGlmKHRoaXMuZWxlbWVudFJhbmdlWCAmJiB0aGlzLmVsZW1lbnRSYW5nZVkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWCAtIHRoaXMuZWxlbWVudENlbnRlclgpIC8gdGhpcy5lbGVtZW50UmFuZ2VYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvblkgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKSAvIHRoaXMuZWxlbWVudFJhbmdlWVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIHdpbmRvdy5cbiAgICAgIGlmKHRoaXMud2luZG93UmFkaXVzWCAmJiB0aGlzLndpbmRvd1JhZGl1c1kpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMud2luZG93Q2VudGVyWCkgLyB0aGlzLndpbmRvd1JhZGl1c1hcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMud2luZG93Q2VudGVyWSkgLyB0aGlzLndpbmRvd1JhZGl1c1lcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGlzYWJsZSgpXG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmRldGVjdGlvblRpbWVyKVxuXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGF5ZXJzW2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5lbGVtZW50XG4gICAgZGVsZXRlIHRoaXMubGF5ZXJzXG4gIH1cblxuICB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnMy4xLjAnXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFsbGF4XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuL3BhcmFsbGF4XCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiLi9nc2FwXCI7XG5cbiQoZnVuY3Rpb24gKCkge1xuICBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgSGVhZGVyLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgbmV3IEFwcCgpO1xufSk7XG4iLCJUd2Vlbk1heC5mcm9tKFwiLmhlYWRlci1sb2dvXCIsIC41LCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cblR3ZWVuTWF4LmZyb20oXCIubWVudVwiLCAxLjUsIHtcbiAgZGVsYXk6IC41LFxuICB5OiBcIjEwXCIsXG4gIG9wYWNpdHk6IDAsXG4gIGVhc2U6IEV4cG8uZWFzZUluT3V0XG59KTtcblxuVHdlZW5NYXguZnJvbShcIi50aXRsZVwiLCAyLCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cblR3ZWVuTWF4LmZyb20oXCIuaGVyby1zZXJ2aWNlcy0tc21hbGxcIiwgMi41LCB7XG4gIGRlbGF5OiAuNSxcbiAgeTogXCIxMFwiLFxuICBvcGFjaXR5OiAwLFxuICBlYXNlOiBFeHBvLmVhc2VJbk91dFxufSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVGcm9tKGVsZW0sIGRpcmVjdGlvbikge1xuICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfCAxO1xuICBcbiAgdmFyIHggPSAwLFxuICAgICAgeSA9IGRpcmVjdGlvbiAqIDEwMDtcbiAgaWYoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRpb24tdGl0bGVcIikpIHtcbiAgICB4ID0gLTEwMDtcbiAgICB5ID0gMDtcbiAgfSBlbHNlIGlmKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0aW9uLWl0ZW1cIikpIHtcbiAgICB4ID0gMDtcbiAgICB5ID0gMTAwO1xuICB9XG4gIGdzYXAuZnJvbVRvKGVsZW0sIHt4OiB4LCB5OiB5LCBhdXRvQWxwaGE6IDB9LCB7XG4gICAgZHVyYXRpb246IDMsIFxuICAgIHg6IDAsXG4gICAgeTogMCwgXG4gICAgYXV0b0FscGhhOiAxLCBcbiAgICBlYXNlOiBcImV4cG9cIiwgXG4gICAgb3ZlcndyaXRlOiBcImF1dG9cIlxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGdzYXAuc2V0KGVsZW0sIHthdXRvQWxwaGE6IDB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gIFxuICBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuYW5pbWF0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xuICAgIGhpZGUoZWxlbSk7IC8vIGFzc3VyZSB0aGF0IHRoZSBlbGVtZW50IGlzIGhpZGRlbiB3aGVuIHNjcm9sbGVkIGludG8gdmlld1xuICAgIFxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgIHRyaWdnZXI6IGVsZW0sXG4gICAgICBvbkVudGVyOiBmdW5jdGlvbigpIHsgYW5pbWF0ZUZyb20oZWxlbSkgfSwgXG4gICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24oKSB7IGFuaW1hdGVGcm9tKGVsZW0sIC0xKSB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKSB7IGhpZGUoZWxlbSkgfSAvLyBhc3N1cmUgdGhhdCB0aGUgZWxlbWVudCBpcyBoaWRkZW4gd2hlbiBzY3JvbGxlZCBpbnRvIHZpZXdcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJGRhdGFNZW51ID0gJGVsLmZpbmQoXCJbZGF0YS1tZW51XVwiKTtcbiAgICB0aGlzLiRkYXRhT3Blbk1lbnUgPSAkZWwuZmluZChcIltkYXRhLW9wZW4tbWVudV1cIik7XG4gICAgdGhpcy4kZGF0YUl0ZW0gPSAkZWwuZmluZChcIltkYXRhLWl0ZW1dXCIpO1xuXG4gICAgdGhpcy5pbml0SGVhZGVyTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5oZWFkZXJTY3JvbGwoKTtcbiAgICB0aGlzLmhlYWRlckxpbmtBY3RpdmUoKTtcbiAgfVxuXG4gIGluaXRIZWFkZXJMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy4kZGF0YU9wZW5NZW51Lm9uKFwiY2xpY2tcIiwgdGhpcy5vcGVuTWVudSk7XG4gICAgdGhpcy4kZGF0YUl0ZW0ub24oXCJjbGlja1wiLCB0aGlzLm9wZW5JdGVtTWVudSk7XG4gIH1cblxuICBvcGVuTWVudSA9IChlKSA9PiB7XG4gICAgdGhpcy4kZGF0YU9wZW5NZW51LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuJGRhdGFNZW51LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB9O1xuXG4gIG9wZW5JdGVtTWVudSA9IChlKSA9PiB7XG4gICAgdGhpcy4kZGF0YU9wZW5NZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuJGRhdGFNZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB9O1xuXG4gIGhlYWRlclNjcm9sbCA9ICgpID0+IHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1MCkge1xuICAgICAgICAkKFwiLmhlYWRlclwiKS5hZGRDbGFzcyhcInN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGhlYWRlckxpbmtBY3RpdmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSAkKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBuYXYgPSAkKFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdl9oZWlnaHQgPSBuYXYub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBsaW5rID0gJChcIi5saW5rXCIpO1xuXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgc2VjdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG5hdl9oZWlnaHQsXG4gICAgICAgICAgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgIGlmIChjdXJfcG9zID49IHRvcCAmJiBjdXJfcG9zIDw9IGJvdHRvbSkge1xuICAgICAgICAgIG5hdi5maW5kKFwiYS5saW5rXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICBuYXZcbiAgICAgICAgICAgIC5maW5kKCdhLmxpbmtbaHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKFwiaWRcIikgKyAnXCJdJylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmNvbnN0IEhlYWRlckluaXQgPSB7XG4gIGluaXQoKSB7XG4gICAgY29uc3QgJGVsID0gJChcIi5oZWFkZXJcIik7XG4gICAgaWYgKCRlbC5sZW5ndGgpIHtcbiAgICAgIG5ldyBIZWFkZXIoJGVsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJJbml0O1xuIiwiaW1wb3J0IFBhcmFsbGF4IGZyb20gXCJwYXJhbGxheC1qc1wiO1xuXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5pZiAoJChcIiNzY2VuZVwiKS5sZW5ndGggPiAwKSB7XG4gIHZhciBzY2VuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVcIik7XG4gIHZhciBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lLCB7XG4gICAgcmVsYXRpdmVJbnB1dDogdHJ1ZSxcbiAgfSk7XG59XG5cbmlmIChpc01vYmlsZSgpKSB7XG4gIHBhcmFsbGF4SW5zdGFuY2UuZGVzdHJveSgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=