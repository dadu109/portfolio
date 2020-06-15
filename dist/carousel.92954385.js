// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/carousel.js":[function(require,module,exports) {
var projects = [{
  name: 'ORGANIZER<br>ZADAŃ',
  imgSrc: 'zadania.png',
  href: '/zadania.html'
}, {
  name: 'AKTRADE<br>WIZYTÓWKA',
  imgSrc: 'hero.jpg',
  href: '/wizytowka.html'
}, {
  name: 'MONT-UP<br>WIZYTÓWKA',
  imgSrc: 'montup.png',
  href: '/montup.html'
}, {
  name: 'GRA<br>SAPER',
  imgSrc: 'saper.png',
  href: '/saper.html'
}];

var carousel = function carousel(_ref) {
  var container = _ref.container,
      noSlides = _ref.noSlides,
      slide = _ref.slide,
      img = _ref.img,
      imgWrapper = _ref.imgWrapper,
      outline = _ref.outline,
      name = _ref.name,
      prev = _ref.prev,
      next = _ref.next,
      array = _ref.array;
  var ableToScroll = true;
  var activeSlide = 0;
  var touchstartY = 0;
  var touchendY = 0;
  var switchTlUp = gsap.timeline({
    paused: true
  });
  var switchTlDown = gsap.timeline();
  var activeHover = gsap.timeline({
    paused: true
  });

  var update = function update() {
    slide.innerHTML = activeSlide + 1 < 10 ? "0".concat(activeSlide + 1) : activeSlide + 1;
    noSlides.innerHTML = array.length < 10 ? "0".concat(array.length) : array.length;
    imgWrapper.href = array[activeSlide].href;
    name.innerHTML = array[activeSlide].name;
    outline.innerHTML = array[activeSlide].name;
    outline.href = array[activeSlide].href;
    prev.innerHTML = array[activeSlide - 1] ? array[activeSlide - 1].name : array[array.length - 1].name;
    next.innerHTML = array[activeSlide + 1] ? array[activeSlide + 1].name : array[0].name;
    ableToScroll = false;
    window.setTimeout(function () {
      ableToScroll = true;
    }, 300);
  };

  var updateImg = function updateImg() {
    img.src = array[activeSlide].imgSrc;
  };

  activeHover.to(next, .3, {
    y: '50vh'
  }).to(prev, .3, {
    y: '-50vh'
  }, '-=.3').to(imgWrapper, .3, {
    scale: 1.15
  }, '-=.3').to(outline, .3, {
    scale: 1.15
  }, '-=.3').to(name, .3, {
    scale: 1.15
  }, '-=.3');
  switchTlDown.call(function () {
    update();
  }).to(imgWrapper, 0.3, {
    ease: "circ.out",
    opacity: 0,
    x: '10%',
    skewType: "simple",
    skewX: -10
  }).call(function () {
    updateImg();
  }).fromTo(next, {
    y: -500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(name, {
    y: -500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(outline, {
    y: -500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(prev, {
    y: -500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').to(imgWrapper, 0.2, {
    ease: "circ.out",
    delay: .5,
    opacity: 1,
    x: 0,
    skewType: "simple",
    skewX: 0
  });
  switchTlUp.call(function () {
    update();
  }).to(imgWrapper, 0.3, {
    ease: "circ.out",
    opacity: 0,
    x: '10%',
    skewType: "simple",
    skewX: -10
  }).call(function () {
    updateImg();
  }).fromTo(next, {
    y: 500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(name, {
    y: 500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(outline, {
    y: 500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').fromTo(prev, {
    y: 500
  }, {
    ease: "circ.out",
    duration: .3,
    y: 0
  }, '-=.3').to(imgWrapper, 0.2, {
    ease: "circ.out",
    delay: .5,
    opacity: 1,
    x: 0,
    skewType: "simple",
    skewX: 0
  });
  container.addEventListener('wheel', function (e) {
    if (ableToScroll) {
      if (e.deltaY < 0) {
        if (activeSlide !== 0) {
          switchTlDown.play(0);
          activeSlide--;
        } else {
          switchTlDown.play(0);
          activeSlide = array.length - 1;
        }
      } else {
        if (activeSlide !== array.length - 1) {
          switchTlUp.play(0);
          activeSlide++;
        } else {
          switchTlUp.play(0);
          activeSlide = 0;
        }
      }

      ;
    }
  });
  container.addEventListener('touchstart', function (event) {
    touchstartY = event.changedTouches[0].screenY;
  }, false);
  container.addEventListener('touchend', function (event) {
    touchendY = event.changedTouches[0].screenY;

    if (ableToScroll) {
      if (touchendY < touchstartY) {
        if (activeSlide !== array.length - 1) {
          switchTlUp.play(0);
          activeSlide++;
        } else {
          switchTlUp.play(0);
          activeSlide = 0;
        }
      } else if (touchendY > touchstartY) {
        if (activeSlide !== 0) {
          switchTlDown.play(0);
          activeSlide--;
        } else {
          switchTlDown.play(0);
          activeSlide = array.length - 1;
        }
      }
    }
  }, false);
  outline.addEventListener('mouseenter', function () {
    if (activeHover.progress() === 0) {
      activeHover.play(0);
    }
  });
  outline.addEventListener('mouseleave', function () {
    if (activeHover.progress() === 1) {
      activeHover.reverse();
    }
  });
  imgWrapper.addEventListener('mouseenter', function () {
    if (activeHover.progress() === 0) {
      activeHover.play(0);
    }
  });
  imgWrapper.addEventListener('mouseleave', function () {
    if (activeHover.progress() === 1) {
      activeHover.reverse();
    }
  });
  prev.addEventListener('click', function () {
    if (activeSlide !== 0) {
      switchTlDown.play(0);
      activeSlide--;
    } else {
      switchTlDown.play(0);
      activeSlide = array.length - 1;
    }

    update();
  });
  next.addEventListener('click', function () {
    if (activeSlide !== array.length - 1) {
      switchTlUp.play(0);
      activeSlide++;
    } else {
      switchTlUp.play(0);
      activeSlide = 0;
    }

    update();
  });
};

carousel({
  container: document.querySelector('.carousel'),
  noSlides: document.querySelector('.carousel .slice-count__no-slides'),
  slide: document.querySelector('.carousel .slide-count__current-slide'),
  imgWrapper: document.querySelector('.carousel .active-slide__image-wrapper'),
  img: document.querySelector('.carousel .active-slide__image'),
  outline: document.querySelector('.carousel .active-slide__text--outline'),
  name: document.querySelector('.carousel .active-slide__text--title'),
  prev: document.querySelector('.carousel .queue-slide--top'),
  next: document.querySelector('.carousel .queue-slide--bot'),
  array: projects
});
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54267" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/carousel.js"], null)
//# sourceMappingURL=/carousel.92954385.js.map