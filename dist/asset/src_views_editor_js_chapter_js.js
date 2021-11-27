"use strict";
(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_chapter_js"],{

/***/ 803:
/*!****************************************!*\
  !*** ./src/views/editor/js/chapter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chapter": () => (/* binding */ chapter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/log */ 185);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source */ 35);
/* harmony import */ var _img_pullup_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pullup.svg */ 114);
/* harmony import */ var _img_pulldown_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pulldown.svg */ 403);







var Chapter = function () {
  function Chapter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chapter);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chapter, [{
    key: "pull",
    value: function pull(event) {
      var node = event.srcElement.parentNode;

      while (node.getAttribute('class') !== 'chapter') {
        node = node.parentNode;
      }

      _utils_log__WEBPACK_IMPORTED_MODULE_2__.log.info(node.childNodes);
      var chapterTitle = node.childNodes[1];
      var chapterIcon = node.childNodes[1].childNodes[1];
      var status = chapterTitle.getAttribute('status');
      var chapterList = node.childNodes[3];

      if (status === "open") {
        chapterList.style.display = 'none';
        chapterTitle.setAttribute('status', 'close');
        chapterIcon.setAttribute('src', _img_pulldown_svg__WEBPACK_IMPORTED_MODULE_5__);
      } else {
        chapterList.style.display = 'block';
        chapterTitle.setAttribute('status', 'open');
        chapterIcon.setAttribute('src', _img_pullup_svg__WEBPACK_IMPORTED_MODULE_4__);
      }
    }
  }]);

  return Chapter;
}();

var chapter = new Chapter();


/***/ }),

/***/ 35:
/*!***************************************!*\
  !*** ./src/views/editor/js/source.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "source": () => (/* binding */ source)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);



var Source = function () {
  function Source() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Source);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Source, [{
    key: "example",
    value: function example() {
      var e0 = {
        name: '插入排序',
        source: "\n\u51FD\u6570 \u63D2\u5165\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(0, \u957F(\u76EE\u6807\u6570\u7EC4) - 1):\n        \u8FD9\u4E2A = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n        \u4E4B\u540E = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00 + 1]\n        \u5982\u679C \u8FD9\u4E2A > \u4E4B\u540E:\n            \u66FF\u6362 = \u4E4B\u540E\n            \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(\u7D22\u5F15\u4E00, -1, -1):\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n                \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] < \u66FF\u6362:\n                    \u7EC8\u6B62\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u66FF\u6362\n            \u5F53 \u7D22\u5F15\u4E8C >= 0 \u4E0E \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] >= \u66FF\u6362:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n                \u7D22\u5F15\u4E8C -= 1\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u66FF\u6362\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u63D2\u5165\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e1 = {
        name: '希尔排序',
        source: "\n\u51FD\u6570 \u5E0C\u5C14\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u6B65\u957F = \u957F(\u76EE\u6807\u6570\u7EC4)\n    \u5F53 \u6B65\u957F > 0:\n        \u6B65\u957F //= 2\n        \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u6B65\u957F, \u957F(\u76EE\u6807\u6570\u7EC4)):\n            \u66FF\u6362 = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n            \u7D22\u5F15\u4E8C = \u7D22\u5F15\u4E00\n            \u5F53 \u7D22\u5F15\u4E8C >= \u6B65\u957F \u4E0E \u66FF\u6362 < \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C-\u6B65\u957F]:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C-\u6B65\u957F]\n                \u7D22\u5F15\u4E8C -= \u6B65\u957F\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] = \u66FF\u6362\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5E0C\u5C14\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e2 = {
        name: '冒泡排序',
        source: "\n\u51FD\u6570 \u5192\u6CE1\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u957F(\u76EE\u6807\u6570\u7EC4), 0, -1):\n        \u6807\u8BB0 = \u9519\n        \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(0, \u7D22\u5F15\u4E00 - 1):\n            \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] > \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1]:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n        \u5982\u679C \u6807\u8BB0:\n            \u7EC8\u6B62\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5192\u6CE1\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e3 = {
        name: '快速排序',
        source: "\n\u51FD\u6570 \u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u51FD\u6570 _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u5DE6\u6307\u9488, \u53F3\u6307\u9488):\n        \u67A2\u8F74 = \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488]\n        \u539F\u5DE6\u6307\u9488 = \u5DE6\u6307\u9488\n        \u539F\u53F3\u6307\u9488 = \u53F3\u6307\u9488\n        \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 0  # \u5DE6\u6307\u9488\u4E3A\u7A7A\n        \u5F53 \u5DE6\u6307\u9488 != \u53F3\u6307\u9488:\n            \u5982\u679C \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0:\n                \u5982\u679C (\u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488] >= \u67A2\u8F74):\n                    \u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488] = \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488]\n                    \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 0\n                \u5426\u5219:\n                    \u5DE6\u6307\u9488 += 1\n            \u5426\u5219:\n                \u5982\u679C (\u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488] < \u67A2\u8F74):\n                    \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488] = \u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488]\n                    \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 1\n                \u5426\u5219:\n                    \u53F3\u6307\u9488 -= 1\n        \u4E2D\u6307\u9488 = \u5DE6\u6307\u9488\n        \u76EE\u6807\u6570\u7EC4[\u4E2D\u6307\u9488] = \u67A2\u8F74\n        \u5982\u679C \u539F\u5DE6\u6307\u9488 < \u4E2D\u6307\u9488 - 1:\n            _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u539F\u5DE6\u6307\u9488, \u4E2D\u6307\u9488 - 1)\n        \u5982\u679C \u4E2D\u6307\u9488+1 < \u539F\u53F3\u6307\u9488:\n            _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u4E2D\u6307\u9488+1, \u539F\u53F3\u6307\u9488)\n    \u5DE6\u6307\u9488 = 0\n    \u53F3\u6307\u9488 = \u957F(\u76EE\u6807\u6570\u7EC4) - 1\n    _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u5DE6\u6307\u9488, \u53F3\u6307\u9488)\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5FEB\u901F\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e4 = {
        name: '选择排序',
        source: "\n\u51FD\u6570 \u9009\u62E9\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u957F(\u76EE\u6807\u6570\u7EC4)):\n        \u6700\u5C0F\u6570\u503C = \u7D22\u5F15\u4E00\n        \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(\u7D22\u5F15\u4E00, \u957F(\u76EE\u6807\u6570\u7EC4)):\n            \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] < \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C]:\n                \u6700\u5C0F\u6570\u503C = \u7D22\u5F15\u4E8C\n        \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00], \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C] = \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u9009\u62E9\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      return {
        'name': '例子',
        'id': 'example',
        'codes': [e0, e1, e2, e3, e4]
      };
    }
  }]);

  return Source;
}();

var source = new Source();


/***/ }),

/***/ 403:
/*!*******************************************!*\
  !*** ./src/views/editor/img/pulldown.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/44416db816b8badc0231.svg";

/***/ }),

/***/ 114:
/*!*****************************************!*\
  !*** ./src/views/editor/img/pullup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/3b828cf090939eb6ef79.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc19jaGFwdGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNSTs7Ozs7OztXQUNGLGNBQUtDLEtBQUwsRUFBWTtBQUNSLFVBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxVQUE1Qjs7QUFDQSxhQUFPRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsT0FBbEIsTUFBK0IsU0FBdEMsRUFBaUQ7QUFDN0NILFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxVQUFaO0FBQ0g7O0FBQ0RSLE1BQUFBLGdEQUFBLENBQVNNLElBQUksQ0FBQ0ssVUFBZDtBQUNBLFVBQUlDLFlBQVksR0FBR04sSUFBSSxDQUFDSyxVQUFMLENBQWdCLENBQWhCLENBQW5CO0FBQ0EsVUFBSUUsV0FBVyxHQUFHUCxJQUFJLENBQUNLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJBLFVBQW5CLENBQThCLENBQTlCLENBQWxCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHRixZQUFZLENBQUNILFlBQWIsQ0FBMEIsUUFBMUIsQ0FBYjtBQUNBLFVBQUlNLFdBQVcsR0FBR1QsSUFBSSxDQUFDSyxVQUFMLENBQWdCLENBQWhCLENBQWxCOztBQUNBLFVBQUlHLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CQyxRQUFBQSxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0FMLFFBQUFBLFlBQVksQ0FBQ00sWUFBYixDQUEwQixRQUExQixFQUFvQyxPQUFwQztBQUNBTCxRQUFBQSxXQUFXLENBQUNLLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0NmLDhDQUFoQztBQUNILE9BSkQsTUFJTztBQUNIWSxRQUFBQSxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE9BQTVCO0FBQ0FMLFFBQUFBLFlBQVksQ0FBQ00sWUFBYixDQUEwQixRQUExQixFQUFvQyxNQUFwQztBQUNBTCxRQUFBQSxXQUFXLENBQUNLLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0NoQiw0Q0FBaEM7QUFDSDtBQUNKOzs7Ozs7QUFHTCxJQUFJaUIsT0FBTyxHQUFHLElBQUlmLE9BQUosRUFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdCTWdCOzs7Ozs7O1dBQ0YsbUJBQVU7QUFDTixVQUFJQyxFQUFFLEdBQUc7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBd0JBLFVBQUlzQixFQUFFLEdBQUc7QUFDTEQsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBb0JBLFVBQUl1QixFQUFFLEdBQUc7QUFDTEYsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBaUJBLFVBQUl3QixFQUFFLEdBQUc7QUFDTEgsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBcUNBLFVBQUl5QixFQUFFLEdBQUc7QUFDTEosUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBaUJBLGFBQU87QUFDSCxnQkFBUSxJQURMO0FBRUgsY0FBTSxTQUZIO0FBR0gsaUJBQVMsQ0FBQ29CLEVBQUQsRUFBS0UsRUFBTCxFQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCO0FBSE4sT0FBUDtBQUtIOzs7Ozs7QUFHTCxJQUFJekIsTUFBTSxHQUFHLElBQUltQixNQUFKLEVBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9jaGFwdGVyLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3NvdXJjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xvZ1wiO1xyXG5pbXBvcnQge3NvdXJjZX0gZnJvbSBcIi4vc291cmNlXCI7XHJcbmltcG9ydCBwdWxsVXBTdmcgZnJvbSBcIi4uL2ltZy9wdWxsdXAuc3ZnXCJcclxuaW1wb3J0IHB1bGxEb3duU3ZnIGZyb20gXCIuLi9pbWcvcHVsbGRvd24uc3ZnXCJcclxuXHJcblxyXG5jbGFzcyBDaGFwdGVyIHtcclxuICAgIHB1bGwoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnNyY0VsZW1lbnQucGFyZW50Tm9kZVxyXG4gICAgICAgIHdoaWxlIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAhPT0gJ2NoYXB0ZXInKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nLmluZm8obm9kZS5jaGlsZE5vZGVzKVxyXG4gICAgICAgIGxldCBjaGFwdGVyVGl0bGUgPSBub2RlLmNoaWxkTm9kZXNbMV1cclxuICAgICAgICBsZXQgY2hhcHRlckljb24gPSBub2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXVxyXG4gICAgICAgIGxldCBzdGF0dXMgPSBjaGFwdGVyVGl0bGUuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKVxyXG4gICAgICAgIGxldCBjaGFwdGVyTGlzdCA9IG5vZGUuY2hpbGROb2Rlc1szXVxyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwib3BlblwiKSB7XHJcbiAgICAgICAgICAgIGNoYXB0ZXJMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgY2hhcHRlclRpdGxlLnNldEF0dHJpYnV0ZSgnc3RhdHVzJywgJ2Nsb3NlJylcclxuICAgICAgICAgICAgY2hhcHRlckljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBwdWxsRG93blN2ZylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGFwdGVyTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBjaGFwdGVyVGl0bGUuc2V0QXR0cmlidXRlKCdzdGF0dXMnLCAnb3BlbicpXHJcbiAgICAgICAgICAgIGNoYXB0ZXJJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgcHVsbFVwU3ZnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGNoYXB0ZXIgPSBuZXcgQ2hhcHRlcigpXHJcblxyXG5leHBvcnQge2NoYXB0ZXJ9XHJcblxyXG4iLCJjbGFzcyBTb3VyY2Uge1xyXG4gICAgZXhhbXBsZSgpIHtcclxuICAgICAgICBsZXQgZTAgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfmj5LlhaXmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOaPkuWFpeaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KDAsIOmVvyjnm67moIfmlbDnu4QpIC0gMSk6XHJcbiAgICAgICAg6L+Z5LiqID0g55uu5qCH5pWw57uEW+e0ouW8leS4gF1cclxuICAgICAgICDkuYvlkI4gPSDnm67moIfmlbDnu4Rb57Si5byV5LiAICsgMV1cclxuICAgICAgICDlpoLmnpwg6L+Z5LiqID4g5LmL5ZCOOlxyXG4gICAgICAgICAgICDmm7/mjaIgPSDkuYvlkI5cclxuICAgICAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwgLTEsIC0xKTpcclxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMXVxyXG4gICAgICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdIDwg5pu/5o2iOlxyXG4gICAgICAgICAgICAgICAgICAgIOe7iOatolxyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXHJcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0gMCDkuI4g55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPj0g5pu/5o2iOlxyXG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOebruagh+aVsOe7hFvntKLlvJXkuoxdXHJcbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0gMVxyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjmj5LlhaXmjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZTEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfluIzlsJTmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOW4jOWwlOaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5q2l6ZW/ID0g6ZW/KOebruagh+aVsOe7hClcclxuICAgIOW9kyDmraXplb8gPiAwOlxyXG4gICAgICAgIOatpemVvyAvLz0gMlxyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjmraXplb8sIOmVvyjnm67moIfmlbDnu4QpKTpcclxuICAgICAgICAgICAg5pu/5o2iID0g55uu5qCH5pWw57uEW+e0ouW8leS4gF1cclxuICAgICAgICAgICAg57Si5byV5LqMID0g57Si5byV5LiAXHJcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0g5q2l6ZW/IOS4jiDmm7/mjaIgPCDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv106XHJcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOebruagh+aVsOe7hFvntKLlvJXkuowt5q2l6ZW/XVxyXG4gICAgICAgICAgICAgICAg57Si5byV5LqMIC09IOatpemVv1xyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOabv+aNolxyXG4gICAg6L+U5ZueIOebruagh+aVsOe7hFxyXG4gICAgXHJcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxyXG7miZPljbAo5biM5bCU5o6S5bqPKOa1i+ivleaVsOe7hCkpXHJcbmBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGUyID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YaS5rOh5o6S5bqPJyxcclxuICAgICAgICAgICAgc291cmNlOiBgXHJcbuWHveaVsCDlhpLms6HmjpLluo8o55uu5qCH5pWw57uEKTpcclxuICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjplb8o55uu5qCH5pWw57uEKSwgMCwgLTEpOlxyXG4gICAgICAgIOagh+iusCA9IOmUmVxyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuowg5ZyoIOiMg+WbtCgwLCDntKLlvJXkuIAgLSAxKTpcclxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdID4g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXTpcclxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdLCDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jF1cclxuICAgICAgICDlpoLmnpwg5qCH6K6wOlxyXG4gICAgICAgICAgICDnu4jmraJcclxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcclxuICAgIFxyXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cclxu5omT5Y2wKOWGkuazoeaOkuW6jyjmtYvor5XmlbDnu4QpKVxyXG5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlMyA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ+W/q+mAn+aOkuW6jycsXHJcbiAgICAgICAgICAgIHNvdXJjZTogYFxyXG7lh73mlbAg5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCk6XHJcbiAgICDlh73mlbAgX+W/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QsIOW3puaMh+mSiCwg5Y+z5oyH6ZKIKTpcclxuICAgICAgICDmnqLovbQgPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxyXG4gICAgICAgIOWOn+W3puaMh+mSiCA9IOW3puaMh+mSiFxyXG4gICAgICAgIOWOn+WPs+aMh+mSiCA9IOWPs+aMh+mSiFxyXG4gICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDAgICMg5bem5oyH6ZKI5Li656m6XHJcbiAgICAgICAg5b2TIOW3puaMh+mSiCAhPSDlj7PmjIfpkog6XHJcbiAgICAgICAgICAgIOWmguaenCDlt6bmjIfpkojnqbrmoIforrA6XHJcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlt6bmjIfpkohdID49IOaeoui9tCk6XHJcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxyXG4gICAgICAgICAgICAgICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDBcclxuICAgICAgICAgICAgICAgIOWQpuWImTpcclxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkoggKz0gMVxyXG4gICAgICAgICAgICDlkKbliJk6XHJcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlj7PmjIfpkohdIDwg5p6i6L20KTpcclxuICAgICAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXSA9IOebruagh+aVsOe7hFvlj7PmjIfpkohdXHJcbiAgICAgICAgICAgICAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMVxyXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxyXG4gICAgICAgICAgICAgICAgICAgIOWPs+aMh+mSiCAtPSAxXHJcbiAgICAgICAg5Lit5oyH6ZKIID0g5bem5oyH6ZKIXHJcbiAgICAgICAg55uu5qCH5pWw57uEW+S4reaMh+mSiF0gPSDmnqLovbRcclxuICAgICAgICDlpoLmnpwg5Y6f5bem5oyH6ZKIIDwg5Lit5oyH6ZKIIC0gMTpcclxuICAgICAgICAgICAgX+W/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QsIOWOn+W3puaMh+mSiCwg5Lit5oyH6ZKIIC0gMSlcclxuICAgICAgICDlpoLmnpwg5Lit5oyH6ZKIKzEgPCDljp/lj7PmjIfpkog6XHJcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDkuK3mjIfpkogrMSwg5Y6f5Y+z5oyH6ZKIKVxyXG4gICAg5bem5oyH6ZKIID0gMFxyXG4gICAg5Y+z5oyH6ZKIID0g6ZW/KOebruagh+aVsOe7hCkgLSAxXHJcbiAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjlv6vpgJ/mjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZTQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfpgInmi6nmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOmAieaLqeaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpKTpcclxuICAgICAgICDmnIDlsI/mlbDlgLwgPSDntKLlvJXkuIBcclxuICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7Qo57Si5byV5LiALCDplb8o55uu5qCH5pWw57uEKSk6XHJcbiAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdOlxyXG4gICAgICAgICAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LqMXHJcbiAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS4gF0sIOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdID0g55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF0sIOebruagh+aVsOe7hFvntKLlvJXkuIBdXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjpgInmi6nmjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfkvovlrZAnLFxyXG4gICAgICAgICAgICAnaWQnOiAnZXhhbXBsZScsXHJcbiAgICAgICAgICAgICdjb2Rlcyc6IFtlMCwgZTEsIGUyLCBlMywgZTRdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc291cmNlID0gbmV3IFNvdXJjZSgpXHJcblxyXG5leHBvcnQge3NvdXJjZX1cclxuXHJcbiJdLCJuYW1lcyI6WyJsb2ciLCJzb3VyY2UiLCJwdWxsVXBTdmciLCJwdWxsRG93blN2ZyIsIkNoYXB0ZXIiLCJldmVudCIsIm5vZGUiLCJzcmNFbGVtZW50IiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsImluZm8iLCJjaGlsZE5vZGVzIiwiY2hhcHRlclRpdGxlIiwiY2hhcHRlckljb24iLCJzdGF0dXMiLCJjaGFwdGVyTGlzdCIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNoYXB0ZXIiLCJTb3VyY2UiLCJlMCIsIm5hbWUiLCJlMSIsImUyIiwiZTMiLCJlNCJdLCJzb3VyY2VSb290IjoiIn0=