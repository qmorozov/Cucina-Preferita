!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */function(module,exports){eval("var btn = document.querySelector('.burger-btn'),\n    header = document.querySelector('.header');\nbtn.addEventListener('click', function () {\n  header.classList.toggle('header--active');\n\n  if (header.classList.contains('header--active')) {\n    hideScroll();\n  } else {\n    showScroll();\n  }\n});\n\nvar hideScroll = function hideScroll() {\n  var scrollWidth = \"\".concat(getScrollbarWidth(), \"px\");\n  document.body.style.paddingRight = scrollWidth;\n  document.body.style.overflow = 'hidden';\n  document.getElementById('header').style.paddingRight = scrollWidth;\n};\n\nvar showScroll = function showScroll() {\n  document.body.style.paddingRight = '';\n  document.body.style.overflow = 'visible';\n  document.getElementById('header').style.paddingRight = '';\n};\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement('div');\n  outer.style.position = 'absolute';\n  outer.style.top = '-9999px';\n  outer.style.width = '50px';\n  outer.style.height = '50px';\n  outer.style.overflow = 'scroll';\n  outer.style.visibility = 'hidden';\n  document.body.appendChild(outer);\n  var ScrollBarWidth = outer.offsetWidth - outer.clientWidth;\n  document.body.removeChild(outer);\n  return ScrollBarWidth;\n};\n\n//# sourceURL=webpack:///./src/js/main.js?")}});