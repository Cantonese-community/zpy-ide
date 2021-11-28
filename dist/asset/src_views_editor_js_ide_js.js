"use strict";
(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_ide_js"],{

/***/ 369:
/*!***************************!*\
  !*** ./src/utils/time.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "time": () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);



var Time = function () {
  function Time() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Time);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Time, [{
    key: "transformTimestamp",
    value: function transformTimestamp(timestamp) {
      var a = new Date(timestamp).getTime();
      var date = new Date(a);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var dayString = Y + M + D;
      var timeString = h + m + s;
      var dateString = dayString + '  ' + timeString;
      return {
        dayString: dayString,
        timeString: timeString,
        dateString: dateString
      };
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = this.zeroFill(date.getMonth() + 1);
      var day = this.zeroFill(date.getDate());
      var hour = this.zeroFill(date.getHours());
      var minute = this.zeroFill(date.getMinutes());
      var second = this.zeroFill(date.getSeconds());
      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
  }, {
    key: "zeroFill",
    value: function zeroFill(i) {
      if (i >= 0 && i <= 9) {
        return "0" + i;
      } else {
        return i;
      }
    }
  }]);

  return Time;
}();

var time = new Time();


/***/ }),

/***/ 147:
/*!***************************************!*\
  !*** ./src/views/editor/js/editor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zpyEditor": () => (/* binding */ zpyEditor),
/* harmony export */   "pyEditor": () => (/* binding */ pyEditor)
/* harmony export */ });
var zpyEditor = CodeMirror.fromTextArea(document.getElementById("zpy-code"), {
  mode: 'zpy',
  theme: "solarized",
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 4,
  indentWithTabs: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
  foldGutter: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true
});
var pyEditor = CodeMirror.fromTextArea(document.getElementById("python-code"), {
  mode: 'text/x-python',
  theme: "solarized",
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 4,
  indentWithTabs: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
  foldGutter: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true
});
zpyEditor.setSize(null, "63vh");
pyEditor.setSize(null, "63vh");


/***/ }),

/***/ 288:
/*!************************************!*\
  !*** ./src/views/editor/js/ide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDE": () => (/* binding */ IDE),
/* harmony export */   "ide": () => (/* binding */ ide)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _zpy_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zpy-compiler */ 322);
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ 153);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor */ 147);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ 35);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/config */ 32);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/time */ 369);









var IDE = function () {
  function IDE(_ref) {
    var zpyCode = _ref.zpyCode,
        pyCode = _ref.pyCode;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IDE);

    this.zpyCode = zpyCode;
    this.pyCode = pyCode;
    this.zpy = new _zpy_compiler__WEBPACK_IMPORTED_MODULE_2__.ZpyCompile(_keywords__WEBPACK_IMPORTED_MODULE_3__.keywords);

    if (pyCode) {
      _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.setOption("value", this.pyCode);
      this.pyCompile();
    }

    if (zpyCode) {
      _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.setOption("value", this.zpyCode);
      this.zpyCompile();
    }

    this.outputEditor = document.getElementById("output-code");
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IDE, [{
    key: "output",
    value: function output(code) {
      this.outputEditor.innerText += "[".concat(_utils_time__WEBPACK_IMPORTED_MODULE_7__.time.getCurrentTime(), "]:\n");
      this.outputEditor.innerText += code + "\n\n";
    }
  }, {
    key: "zpyRun",
    value: function zpyRun() {
      var _this = this;

      this.zpyCompile();
      this.zpy.exec(this.pyCode).then(function (response) {
        _this.output(response['data']);
      })["catch"](function (err) {
        _this.output("[\u7F51\u7EDC\u9519\u8BEF] \u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668: ".concat(_utils_config__WEBPACK_IMPORTED_MODULE_6__.config.HOST));
      });
    }
  }, {
    key: "pyRun",
    value: function pyRun() {
      var _this2 = this;

      this.pyCompile();
      this.zpy.exec(this.pyCode).then(function (response) {
        _this2.output(response['data']);
      })["catch"](function (err) {
        _this2.output("[\u7F51\u7EDC\u9519\u8BEF] \u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668: ".concat(_utils_config__WEBPACK_IMPORTED_MODULE_6__.config.HOST));
      });
    }
  }, {
    key: "zpyCompile",
    value: function zpyCompile() {
      this.zpyCode = _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.getValue();
      this.pyCode = this.zpy.compile(this.zpyCode, 'zpy');
      _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.setOption("value", this.pyCode);
    }
  }, {
    key: "pyCompile",
    value: function pyCompile() {
      this.pyCode = _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.getValue();
      this.zpyCode = this.zpy.compile(this.pyCode, 'py');
      _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.setOption("value", this.zpyCode);
    }
  }]);

  return IDE;
}();

var zpyCode = _source__WEBPACK_IMPORTED_MODULE_5__.source.example().codes[0]['source'];
var ide = new IDE({
  zpyCode: zpyCode
});


/***/ }),

/***/ 153:
/*!*****************************************!*\
  !*** ./src/views/editor/js/keywords.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keywords": () => (/* binding */ keywords)
/* harmony export */ });
var reservedWords = {
  regexp: "`/(?<=\\\\s)${key}(?=[\\\\s:])/gm`",
  safariReg: "`/${key}(?=[\\\\s:])/gm`",
  words: {
    "kw_print": "畀我睇下",
    "kw_endprint": "点样先",
    "kw_exit": "收工",
    "kw_in": "喺",
    "kw_elif": "定系",
    "kw_turtle_beg": "老作一下",
    "kw_type": "起底",
    "kw_assign": "讲嘢",
    "kw_class_def": "咩系",
    "kw_else_or_not": "唔系",
    "kw_is": "系",
    "kw_if": "如果",
    "kw_then": "嘅话",
    "kw_do": "->",
    "kw_begin": "{",
    "kw_end": "}",
    "kw_pass": "咩都唔做",
    "kw_while_do": "落操场玩跑步",
    "kw_function": "$",
    "kw_call": "用下",
    "kw_import": "使下",
    "kw_func_begin": "要做咩",
    "kw_func_end": "搞掂",
    "kw_is_2": "就",
    "kw_assert": "谂下",
    "kw_class_assign": "佢嘅",
    "kw_while": "玩到",
    "kw_whi_end": "为止",
    "kw_return": "还数",
    "kw_try": "执嘢",
    "kw_except": "揾到",
    "kw_finally": "执手尾",
    "kw_raise": "掟个",
    "kw_raise_end": "来睇下",
    "kw_from": "从",
    "kw_to": "行到",
    "kw_endfor": "行晒",
    "kw_extend": "佢个老豆叫",
    "kw_method": "佢识得",
    "kw_endclass": "明白未啊",
    "kw_cmd": "落Order",
    "kw_break": "饮茶先啦",
    "kw_lst_assign": "拍住上",
    "kw_set_assign": "埋堆",
    "kw_global_set": "Share下",
    "kw_is_3": "係",
    "kw_exit_1": "辛苦晒啦",
    "kw_exit_2": "同我躝",
    "kw_false": "唔啱",
    "kw_true": "啱",
    "kw_none": "冇",
    "kw_stackinit": "有条仆街叫",
    "kw_push": "顶你",
    "kw_pop": "丢你",
    "kw_model": "嗌",
    "kw_mod_new": "过嚟估下",
    "kw_class_init": "佢有啲咩",
    "kw_self": "自己嘅",
    "kw_call_begin": "下",
    "kw_get_value": "@"
  }
};
var keywords = [reservedWords];


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
        source: "\n$insert_sort |\u6570\u7EC4| \u8981\u505A\u54A9:\n    |\u7D22\u5F15| \u4ECE 0 \u884C\u5230 |\u6570\u7EC4 \u5605\u957F\u5EA6|\n        \u8BB2\u5622: |\u5F53\u524D\u7D22\u5F15| \u4FC2 |\u7D22\u5F15 \u51CF 1|\n        \u8BB2\u5622: |\u5F53\u524D\u5143\u7D20| \u4FC2 |\u6570\u7EC4[\u7D22\u5F15]|\n        \u843D\u64CD\u573A\u73A9\u8DD1\u6B65\n            \u8BB2\u5622: |\u6570\u7EC4[\u5F53\u524D\u7D22\u5F15 \u52A0 1]| \u4FC2 |\u6570\u7EC4[\u5F53\u524D\u7D22\u5F15]|\n            \u8BB2\u5622: |\u5F53\u524D\u7D22\u5F15| \u4FC2 |\u5F53\u524D\u7D22\u5F15 \u51CF 1|\n        \u73A9\u5230 |\u5F53\u524D\u7D22\u5F15 < 0 \u6216\u8005 \u6570\u7EC4[\u5F53\u524D\u7D22\u5F15] \u6BD4\u5514\u4E0A \u5F53\u524D\u5143\u7D20| \u4E3A\u6B62\n        \u8BB2\u5622: |\u6570\u7EC4[\u5F53\u524D\u7D22\u5F15 \u52A0 1]| \u4FC2 |\u5F53\u524D\u5143\u7D20|\n    \u884C\u6652\n    \u7540\u6211\u7747\u4E0B |\u6570\u7EC4| \u70B9\u6837\u5148?\n\u641E\u6382\n        \n\u7528\u4E0B |insert_sort([64, 34, 25, 12, 22, 11, 90])|\n\u7528\u4E0B |insert_sort([21, 22, 90, 12, 55, 77, 97])|\n"
      };
      var e1 = {
        name: '冒泡排序',
        source: "\n$bubble_sort |\u6570\u7EC4| \u8981\u505A\u54A9:\n    \u8BB2\u5622: |\u957F\u5EA6| \u4FC2 |\u6570\u7EC4 \u5605\u957F\u5EA6|\n    |i| \u4ECE 1 \u884C\u5230 |\u957F\u5EA6|\n        |\u7D22\u5F15| \u4ECE 0 \u884C\u5230 |\u957F\u5EA6 \u51CF i|\n            \u5982\u679C |\u6570\u7EC4[\u7D22\u5F15 \u52A0 1] \u6BD4\u5514\u4E0A \u6570\u7EC4[\u7D22\u5F15]| \u5605\u8BDD -> {\n                \u8BB2\u5622: |\u4EA4\u6362| \u4FC2 |\u6570\u7EC4[\u7D22\u5F15]|\n                \u8BB2\u5622: |\u6570\u7EC4[\u7D22\u5F15]| \u4FC2 |\u6570\u7EC4[\u7D22\u5F15 \u52A0 1]|\n                \u8BB2\u5622: |\u6570\u7EC4[\u7D22\u5F15 \u52A0 1]| \u4FC2 |\u4EA4\u6362|\n            }\n        \u884C\u6652\n    \u884C\u6652\n    \u7540\u6211\u7747\u4E0B |\u6570\u7EC4| \u70B9\u6837\u5148?\n    \u641E\u6382\n        \nbubble_sort \u4E0B -> |[64, 34, 25, 12, 22, 11, 90]|\nbubble_sort \u4E0B -> |[21, 22, 90, 12, 55, 77, 97]|\n"
      };
      return {
        'name': '例子',
        'id': 'example',
        'codes': [e0, e1]
      };
    }
  }]);

  return Source;
}();

var source = new Source();


/***/ }),

/***/ 322:
/*!*********************************************!*\
  !*** ./src/views/editor/js/zpy-compiler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZpyCompile": () => (/* binding */ ZpyCompile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 861);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ 757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/log */ 185);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/config */ 32);
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keywords */ 153);





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ZpyCompile = function () {
  function ZpyCompile(keywords) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ZpyCompile);

    this.keywords = keywords;
    _utils_log__WEBPACK_IMPORTED_MODULE_4__.log.info(this.keywords);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ZpyCompile, [{
    key: "compile",
    value: function compile(code) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "zpy";

      if (type !== "zpy" && type !== "py") {
        throw new Error("Compile code should be one of zpy, py");
      }

      var _iterator = _createForOfIteratorHelper(_keywords__WEBPACK_IMPORTED_MODULE_6__.keywords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyword = _step.value;

          for (var word in keyword.words) {
            var regexp = void 0;
            if (this.browser() === 'Safari') regexp = keyword.safariReg;else regexp = keyword.regexp;
            if (type === "zpy") code = code.replace(this.dispose(word, regexp), keyword.words[word]);else if (type === "py") code = code.replace(this.dispose(keyword.words[word], regexp), word);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return code;
    }
  }, {
    key: "browser",
    value: function browser() {
      var explorer = window.navigator.userAgent;

      if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
      } else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
      } else if (explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
      } else if (explorer.indexOf("Opera") >= 0) {
        return 'Opera';
      } else if (explorer.indexOf("Safari") >= 0) {
        return 'Safari';
      } else {
        return 'None';
      }
    }
  }, {
    key: "dispose",
    value: function dispose(key, regexp) {
      var expression = String(eval(regexp));
      return eval(expression);
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios({
                  method: 'post',
                  url: _utils_config__WEBPACK_IMPORTED_MODULE_5__.config.HOST + _utils_config__WEBPACK_IMPORTED_MODULE_5__.config.URL,
                  data: {
                    'code': code
                  }
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function exec(_x) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }]);

  return ZpyCompile;
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXpESjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvZWRpdG9yLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2lkZS5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvenB5LWNvbXBpbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpbWUge1xyXG4gICAgdHJhbnNmb3JtVGltZXN0YW1wKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIC8v5bCG4oCcMjAyMS0wNy0wNlQwNjoyMzo1Ny4wMDArMDA6MDDigJ0g77yM6L2s5o2i5Li6MjAyMS0wNy0wNiAxNDoyMzo1N1xyXG4gICAgICAgIGxldCBhID0gbmV3IERhdGUodGltZXN0YW1wKS5nZXRUaW1lKClcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYSlcclxuICAgICAgICBjb25zdCBZID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nXHJcbiAgICAgICAgY29uc3QgTSA9IChkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTAgPyAnMCcgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgOiBkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJ1xyXG4gICAgICAgIGNvbnN0IEQgPSAoZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCkpXHJcbiAgICAgICAgY29uc3QgaCA9IChkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0SG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKSkgKyAnOidcclxuICAgICAgICBjb25zdCBtID0gKGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpKSArICc6J1xyXG4gICAgICAgIGNvbnN0IHMgPSAoZGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0U2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCkpXHJcbiAgICAgICAgY29uc3QgZGF5U3RyaW5nID0gWSArIE0gKyBEXHJcbiAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGggKyBtICsgc1xyXG4gICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXlTdHJpbmcgKyAnICAnICsgdGltZVN0cmluZ1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlU3RyaW5nJywgZGF0ZVN0cmluZykgLy8gPiBkYXRlU3RyaW5nIDIwMjEtMDctMDYgMTQ6MjM6NTdcclxuICAgICAgICByZXR1cm4ge2RheVN0cmluZywgdGltZVN0cmluZywgZGF0ZVN0cmluZ31cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VGltZSgpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7Ly/lvZPliY3ml7bpl7RcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgIGxldCBtb250aCA9IHRoaXMuemVyb0ZpbGwoZGF0ZS5nZXRNb250aCgpICsgMSk7Ly/mnIhcclxuICAgICAgICBsZXQgZGF5ID0gdGhpcy56ZXJvRmlsbChkYXRlLmdldERhdGUoKSk7Ly/ml6VcclxuICAgICAgICBsZXQgaG91ciA9IHRoaXMuemVyb0ZpbGwoZGF0ZS5nZXRIb3VycygpKTsvL+aXtlxyXG4gICAgICAgIGxldCBtaW51dGUgPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0TWludXRlcygpKTsvL+WIhlxyXG4gICAgICAgIGxldCBzZWNvbmQgPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0U2Vjb25kcygpKTsvL+enklxyXG5cclxuICAgICAgICAvL+W9k+WJjeaXtumXtFxyXG4gICAgICAgIHJldHVybiB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5XHJcbiAgICAgICAgICAgICsgXCIgXCIgKyBob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZDtcclxuICAgIH1cclxuXHJcbiAgICB6ZXJvRmlsbChpKSB7XHJcbiAgICAgICAgLy8g6KGl6Zu2XHJcbiAgICAgICAgaWYgKGkgPj0gMCAmJiBpIDw9IDkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiICsgaTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRpbWUgPSBuZXcgVGltZSgpXHJcblxyXG5leHBvcnQge3RpbWV9IiwibGV0IHpweUVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwienB5LWNvZGVcIiksIHtcclxuICAgIG1vZGU6ICd6cHknLCAvLyDor63oqIDmqKHlvI9cclxuICAgIHRoZW1lOiBcInNvbGFyaXplZFwiLCAvLyDkuLvpophcclxuICAgIC8vIGtleU1hcDogXCJzdWJsaW1lXCIsIC8vIOW/q+mUrumUrumjjuagvFxyXG4gICAgbGluZU51bWJlcnM6IHRydWUsIC8vIOaYvuekuuihjOWPt1xyXG4gICAgc21hcnRJbmRlbnQ6IHRydWUsIC8vIOaZuuiDvee8qei/m1xyXG4gICAgaW5kZW50VW5pdDogNCwgLy8g5pm66IO957yp6L+b5Y2V5L2N5Li6NOS4quepuuagvOmVv+W6plxyXG4gICAgaW5kZW50V2l0aFRhYnM6IHRydWUsIC8vIOS9v+eUqOWItuihqOespui/m+ihjOaZuuiDvee8qei/m1xyXG4gICAgbGluZVdyYXBwaW5nOiB0cnVlLCAvLyBcclxuICAgIC8vIOWcqOihjOanveS4rea3u+WKoOihjOWPt+aYvuekuuWZqOOAgeaKmOWPoOWZqOOAgeivreazleajgOa1i+WZqFxyXG4gICAgZ3V0dGVyczogW1wiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiLCBcIkNvZGVNaXJyb3ItZm9sZGd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGludC1tYXJrZXJzXCJdLCBcclxuICAgIGZvbGRHdXR0ZXI6IHRydWUsIC8vIOWQr+eUqOihjOanveS4reeahOS7o+eggeaKmOWPoFxyXG4gICAgYXV0b2ZvY3VzOiB0cnVlLCAvLyDoh6rliqjogZrnhKZcclxuICAgIG1hdGNoQnJhY2tldHM6IHRydWUsIC8vIOWMuemFjee7k+adn+espuWPt++8jOavlOWmglwiXeOAgX1cIlxyXG4gICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsIC8vIOiHquWKqOmXreWQiOespuWPt1xyXG4gICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLCAvLyDmmL7npLrpgInkuK3ooYznmoTmoLflvI9cclxufSk7XHJcblxyXG5sZXQgcHlFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB5dGhvbi1jb2RlXCIpLCB7XHJcbiAgICBtb2RlOiAndGV4dC94LXB5dGhvbicsIC8vIOivreiogOaooeW8j1xyXG4gICAgdGhlbWU6IFwic29sYXJpemVkXCIsIC8vIOS4u+mimFxyXG4gICAgLy8ga2V5TWFwOiBcInN1YmxpbWVcIiwgLy8g5b+r6ZSu6ZSu6aOO5qC8XHJcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8g5pi+56S66KGM5Y+3XHJcbiAgICBzbWFydEluZGVudDogdHJ1ZSwgLy8g5pm66IO957yp6L+bXHJcbiAgICBpbmRlbnRVbml0OiA0LCAvLyDmmbrog73nvKnov5vljZXkvY3kuLo05Liq56m65qC86ZW/5bqmXHJcbiAgICBpbmRlbnRXaXRoVGFiczogdHJ1ZSwgLy8g5L2/55So5Yi26KGo56ym6L+b6KGM5pm66IO957yp6L+bXHJcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsIC8vIFxyXG4gICAgLy8g5Zyo6KGM5qe95Lit5re75Yqg6KGM5Y+35pi+56S65Zmo44CB5oqY5Y+g5Zmo44CB6K+t5rOV5qOA5rWL5ZmoXHJcbiAgICBndXR0ZXJzOiBbXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCIsIFwiQ29kZU1pcnJvci1mb2xkZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW50LW1hcmtlcnNcIl0sIFxyXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSwgLy8g5ZCv55So6KGM5qe95Lit55qE5Luj56CB5oqY5Y+gXHJcbiAgICBhdXRvZm9jdXM6IHRydWUsIC8vIOiHquWKqOiBmueEplxyXG4gICAgbWF0Y2hCcmFja2V0czogdHJ1ZSwgLy8g5Yy56YWN57uT5p2f56ym5Y+377yM5q+U5aaCXCJd44CBfVwiXHJcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSwgLy8g6Ieq5Yqo6Zet5ZCI56ym5Y+3XHJcbiAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsIC8vIOaYvuekuumAieS4reihjOeahOagt+W8j1xyXG59KTtcclxuXHJcbnpweUVkaXRvci5zZXRTaXplKG51bGwsIFwiNjN2aFwiKTtcclxucHlFZGl0b3Iuc2V0U2l6ZShudWxsLCBcIjYzdmhcIik7XHJcblxyXG5leHBvcnQge3pweUVkaXRvciwgcHlFZGl0b3J9IiwiaW1wb3J0IHtacHlDb21waWxlfSBmcm9tIFwiLi96cHktY29tcGlsZXJcIlxyXG5pbXBvcnQge2tleXdvcmRzfSBmcm9tIFwiLi9rZXl3b3Jkc1wiXHJcbmltcG9ydCB7enB5RWRpdG9yLCBweUVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yXCJcclxuaW1wb3J0IHtzb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uZmlnXCJcclxuaW1wb3J0IHt0aW1lfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZVwiXHJcblxyXG5jbGFzcyBJREUge1xyXG4gICAgY29uc3RydWN0b3Ioe3pweUNvZGUsIHB5Q29kZX0pIHtcclxuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlDb2RlXHJcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUNvZGVcclxuICAgICAgICB0aGlzLnpweSA9IG5ldyBacHlDb21waWxlKGtleXdvcmRzKVxyXG4gICAgICAgIGlmIChweUNvZGUpIHtcclxuICAgICAgICAgICAgcHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy5weUNvZGUpXHJcbiAgICAgICAgICAgIHRoaXMucHlDb21waWxlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHpweUNvZGUpIHtcclxuICAgICAgICAgICAgenB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMuenB5Q29kZSlcclxuICAgICAgICAgICAgdGhpcy56cHlDb21waWxlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vdXRwdXRFZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dC1jb2RlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb3V0cHV0KGNvZGUpIHtcclxuICAgICAgICB0aGlzLm91dHB1dEVkaXRvci5pbm5lclRleHQgKz0gYFske3RpbWUuZ2V0Q3VycmVudFRpbWUoKX1dOlxcbmBcclxuICAgICAgICB0aGlzLm91dHB1dEVkaXRvci5pbm5lclRleHQgKz0gY29kZSArIFwiXFxuXFxuXCJcclxuICAgIH1cclxuXHJcbiAgICB6cHlSdW4oKSB7XHJcbiAgICAgICAgdGhpcy56cHlDb21waWxlKClcclxuICAgICAgICB0aGlzLnpweS5leGVjKHRoaXMucHlDb2RlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dChgW+e9kee7nOmUmeivr10g5peg5rOV6L+e5o6l5pyN5Yqh5ZmoOiAke2NvbmZpZy5IT1NUfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBweVJ1bigpIHtcclxuICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXHJcbiAgICAgICAgdGhpcy56cHkuZXhlYyh0aGlzLnB5Q29kZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KHJlc3BvbnNlWydkYXRhJ10pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQoYFvnvZHnu5zplJnor69dIOaXoOazlei/nuaOpeacjeWKoeWZqDogJHtjb25maWcuSE9TVH1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgenB5Q29tcGlsZSgpIHtcclxuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlFZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLnB5Q29kZSA9IHRoaXMuenB5LmNvbXBpbGUodGhpcy56cHlDb2RlLCAnenB5JylcclxuICAgICAgICBweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnB5Q29kZSlcclxuICAgIH1cclxuXHJcbiAgICBweUNvbXBpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUVkaXRvci5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuenB5Q29kZSA9IHRoaXMuenB5LmNvbXBpbGUodGhpcy5weUNvZGUsICdweScpXHJcbiAgICAgICAgenB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMuenB5Q29kZSlcclxuICAgIH1cclxufVxyXG5cclxubGV0IHpweUNvZGUgPSBzb3VyY2UuZXhhbXBsZSgpLmNvZGVzWzBdWydzb3VyY2UnXVxyXG5sZXQgaWRlID0gbmV3IElERSh7enB5Q29kZX0pXHJcblxyXG5leHBvcnQge0lERSwgaWRlfSIsImNvbnN0IHJlc2VydmVkV29yZHMgPSB7XHJcbiAgICByZWdleHA6IFwiYC8oPzw9XFxcXFxcXFxzKSR7a2V5fSg/PVtcXFxcXFxcXHM6XSkvZ21gXCIsXHJcbiAgICBzYWZhcmlSZWc6IFwiYC8ke2tleX0oPz1bXFxcXFxcXFxzOl0pL2dtYFwiLFxyXG4gICAgd29yZHM6IHtcclxuICAgICAgICBcImt3X3ByaW50XCIgOiBcIueVgOaIkeedh+S4i1wiLFxyXG4gICAgICAgIFwia3dfZW5kcHJpbnRcIiA6IFwi54K55qC35YWIXCIsXHJcbiAgICAgICAgXCJrd19leGl0XCIgOiBcIuaUtuW3pVwiLFxyXG4gICAgICAgIFwia3dfaW5cIiA6IFwi5Za6XCIsXHJcbiAgICAgICAgXCJrd19lbGlmXCIgOiBcIuWumuezu1wiLFxyXG4gICAgICAgIFwia3dfdHVydGxlX2JlZ1wiIDogXCLogIHkvZzkuIDkuItcIixcclxuICAgICAgICBcImt3X3R5cGVcIiA6IFwi6LW35bqVXCIsXHJcbiAgICAgICAgXCJrd19hc3NpZ25cIiA6IFwi6K6y5ZiiXCIsXHJcbiAgICAgICAgXCJrd19jbGFzc19kZWZcIiA6IFwi5ZKp57O7XCIsXHJcbiAgICAgICAgXCJrd19lbHNlX29yX25vdFwiIDogXCLllJTns7tcIixcclxuICAgICAgICBcImt3X2lzXCIgOiBcIuezu1wiLFxyXG4gICAgICAgIFwia3dfaWZcIiA6IFwi5aaC5p6cXCIsXHJcbiAgICAgICAgXCJrd190aGVuXCIgOiBcIuWYheivnVwiLFxyXG4gICAgICAgIFwia3dfZG9cIiA6IFwiLT5cIixcclxuICAgICAgICBcImt3X2JlZ2luXCIgOiBcIntcIixcclxuICAgICAgICBcImt3X2VuZFwiIDogXCJ9XCIsXHJcbiAgICAgICAgXCJrd19wYXNzXCIgOiBcIuWSqemDveWUlOWBmlwiLFxyXG4gICAgICAgIFwia3dfd2hpbGVfZG9cIiA6IFwi6JC95pON5Zy6546p6LeR5q2lXCIsXHJcbiAgICAgICAgXCJrd19mdW5jdGlvblwiIDogXCIkXCIsXHJcbiAgICAgICAgXCJrd19jYWxsXCIgOiBcIueUqOS4i1wiLFxyXG4gICAgICAgIFwia3dfaW1wb3J0XCIgOiBcIuS9v+S4i1wiLFxyXG4gICAgICAgIFwia3dfZnVuY19iZWdpblwiIDogXCLopoHlgZrlkqlcIixcclxuICAgICAgICBcImt3X2Z1bmNfZW5kXCIgOiBcIuaQnuaOglwiLFxyXG4gICAgICAgIFwia3dfaXNfMlwiIDogXCLlsLFcIixcclxuICAgICAgICBcImt3X2Fzc2VydFwiIDogXCLosILkuItcIixcclxuICAgICAgICBcImt3X2NsYXNzX2Fzc2lnblwiIDogXCLkvaLlmIVcIixcclxuICAgICAgICBcImt3X3doaWxlXCIgOiBcIueOqeWIsFwiLFxyXG4gICAgICAgIFwia3dfd2hpX2VuZFwiIDogXCLkuLrmraJcIixcclxuICAgICAgICBcImt3X3JldHVyblwiIDogXCLov5jmlbBcIixcclxuICAgICAgICBcImt3X3RyeVwiOiBcIuaJp+WYolwiLFxyXG4gICAgICAgIFwia3dfZXhjZXB0XCIgOiBcIuaPvuWIsFwiLFxyXG4gICAgICAgIFwia3dfZmluYWxseVwiIDogXCLmiafmiYvlsL5cIixcclxuICAgICAgICBcImt3X3JhaXNlXCIgOiBcIuaOn+S4qlwiLFxyXG4gICAgICAgIFwia3dfcmFpc2VfZW5kXCIgOiBcIuadpeedh+S4i1wiLFxyXG4gICAgICAgIFwia3dfZnJvbVwiIDogXCLku45cIixcclxuICAgICAgICBcImt3X3RvXCIgOiBcIuihjOWIsFwiLFxyXG4gICAgICAgIFwia3dfZW5kZm9yXCIgOiBcIuihjOaZklwiLFxyXG4gICAgICAgIFwia3dfZXh0ZW5kXCIgOiBcIuS9ouS4quiAgeixhuWPq1wiLFxyXG4gICAgICAgIFwia3dfbWV0aG9kXCIgOiBcIuS9ouivhuW+l1wiLFxyXG4gICAgICAgIFwia3dfZW5kY2xhc3NcIiA6IFwi5piO55m95pyq5ZWKXCIsXHJcbiAgICAgICAgXCJrd19jbWRcIiA6IFwi6JC9T3JkZXJcIixcclxuICAgICAgICBcImt3X2JyZWFrXCIgOiBcIumlruiMtuWFiOWVplwiLFxyXG4gICAgICAgIFwia3dfbHN0X2Fzc2lnblwiIDogXCLmi43kvY/kuIpcIixcclxuICAgICAgICBcImt3X3NldF9hc3NpZ25cIiA6IFwi5Z+L5aCGXCIsXHJcbiAgICAgICAgXCJrd19nbG9iYWxfc2V0XCIgOiBcIlNoYXJl5LiLXCIsXHJcbiAgICAgICAgXCJrd19pc18zXCIgOiBcIuS/glwiLFxyXG4gICAgICAgIFwia3dfZXhpdF8xXCIgOiBcIui+m+iLpuaZkuWVplwiLFxyXG4gICAgICAgIFwia3dfZXhpdF8yXCIgOiBcIuWQjOaIkei6nVwiLFxyXG4gICAgICAgIFwia3dfZmFsc2VcIiA6IFwi5ZSU5ZWxXCIsXHJcbiAgICAgICAgXCJrd190cnVlXCIgOiBcIuWVsVwiLFxyXG4gICAgICAgIFwia3dfbm9uZVwiIDogXCLlhodcIixcclxuICAgICAgICBcImt3X3N0YWNraW5pdFwiIDogXCLmnInmnaHku4booZflj6tcIixcclxuICAgICAgICBcImt3X3B1c2hcIiA6IFwi6aG25L2gXCIsXHJcbiAgICAgICAgXCJrd19wb3BcIiA6IFwi5Lii5L2gXCIsXHJcbiAgICAgICAgXCJrd19tb2RlbFwiIDogXCLll4xcIixcclxuICAgICAgICBcImt3X21vZF9uZXdcIiA6IFwi6L+H5Zqf5Lyw5LiLXCIsXHJcbiAgICAgICAgXCJrd19jbGFzc19pbml0XCIgOiBcIuS9ouacieWVsuWSqVwiLFxyXG4gICAgICAgIFwia3dfc2VsZlwiIDogXCLoh6rlt7HlmIVcIixcclxuICAgICAgICBcImt3X2NhbGxfYmVnaW5cIiA6IFwi5LiLXCIsXHJcbiAgICAgICAgXCJrd19nZXRfdmFsdWVcIiA6IFwiQFwiICxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qga2V5d29yZHMgPSBbcmVzZXJ2ZWRXb3Jkc11cclxuXHJcbmV4cG9ydCB7a2V5d29yZHN9XHJcbiIsImNsYXNzIFNvdXJjZSB7XHJcbiAgICBleGFtcGxlKCkge1xyXG4gICAgICAgIGxldCBlMCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ+aPkuWFpeaOkuW6jycsXHJcbiAgICAgICAgICAgIHNvdXJjZTogYFxyXG4kaW5zZXJ0X3NvcnQgfOaVsOe7hHwg6KaB5YGa5ZKpOlxyXG4gICAgfOe0ouW8lXwg5LuOIDAg6KGM5YiwIHzmlbDnu4Qg5ZiF6ZW/5bqmfFxyXG4gICAgICAgIOiusuWYojogfOW9k+WJjee0ouW8lXwg5L+CIHzntKLlvJUg5YePIDF8XHJcbiAgICAgICAg6K6y5ZiiOiB85b2T5YmN5YWD57SgfCDkv4IgfOaVsOe7hFvntKLlvJVdfFxyXG4gICAgICAgIOiQveaTjeWcuueOqei3keatpVxyXG4gICAgICAgICAgICDorrLlmKI6IHzmlbDnu4Rb5b2T5YmN57Si5byVIOWKoCAxXXwg5L+CIHzmlbDnu4Rb5b2T5YmN57Si5byVXXxcclxuICAgICAgICAgICAg6K6y5ZiiOiB85b2T5YmN57Si5byVfCDkv4IgfOW9k+WJjee0ouW8lSDlh48gMXxcclxuICAgICAgICDnjqnliLAgfOW9k+WJjee0ouW8lSA8IDAg5oiW6ICFIOaVsOe7hFvlvZPliY3ntKLlvJVdIOavlOWUlOS4iiDlvZPliY3lhYPntKB8IOS4uuatolxyXG4gICAgICAgIOiusuWYojogfOaVsOe7hFvlvZPliY3ntKLlvJUg5YqgIDFdfCDkv4IgfOW9k+WJjeWFg+e0oHxcclxuICAgIOihjOaZklxyXG4gICAg55WA5oiR552H5LiLIHzmlbDnu4R8IOeCueagt+WFiD9cclxu5pCe5o6CXHJcbiAgICAgICAgXHJcbueUqOS4iyB8aW5zZXJ0X3NvcnQoWzY0LCAzNCwgMjUsIDEyLCAyMiwgMTEsIDkwXSl8XHJcbueUqOS4iyB8aW5zZXJ0X3NvcnQoWzIxLCAyMiwgOTAsIDEyLCA1NSwgNzcsIDk3XSl8XHJcbmBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGUxID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YaS5rOh5o6S5bqPJyxcclxuICAgICAgICAgICAgc291cmNlOiBgXHJcbiRidWJibGVfc29ydCB85pWw57uEfCDopoHlgZrlkqk6XHJcbiAgICDorrLlmKI6IHzplb/luqZ8IOS/giB85pWw57uEIOWYhemVv+W6pnxcclxuICAgIHxpfCDku44gMSDooYzliLAgfOmVv+W6pnxcclxuICAgICAgICB857Si5byVfCDku44gMCDooYzliLAgfOmVv+W6piDlh48gaXxcclxuICAgICAgICAgICAg5aaC5p6cIHzmlbDnu4Rb57Si5byVIOWKoCAxXSDmr5TllJTkuIog5pWw57uEW+e0ouW8lV18IOWYheivnSAtPiB7XHJcbiAgICAgICAgICAgICAgICDorrLlmKI6IHzkuqTmjaJ8IOS/giB85pWw57uEW+e0ouW8lV18XHJcbiAgICAgICAgICAgICAgICDorrLlmKI6IHzmlbDnu4Rb57Si5byVXXwg5L+CIHzmlbDnu4Rb57Si5byVIOWKoCAxXXxcclxuICAgICAgICAgICAgICAgIOiusuWYojogfOaVsOe7hFvntKLlvJUg5YqgIDFdfCDkv4IgfOS6pOaNonxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIOihjOaZklxyXG4gICAg6KGM5pmSXHJcbiAgICDnlYDmiJHnnYfkuIsgfOaVsOe7hHwg54K55qC35YWIP1xyXG4gICAg5pCe5o6CXHJcbiAgICAgICAgXHJcbmJ1YmJsZV9zb3J0IOS4iyAtPiB8WzY0LCAzNCwgMjUsIDEyLCAyMiwgMTEsIDkwXXxcclxuYnViYmxlX3NvcnQg5LiLIC0+IHxbMjEsIDIyLCA5MCwgMTIsIDU1LCA3NywgOTddfFxyXG5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+S+i+WtkCcsXHJcbiAgICAgICAgICAgICdpZCc6ICdleGFtcGxlJyxcclxuICAgICAgICAgICAgJ2NvZGVzJzogW2UwLCBlMV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBzb3VyY2UgPSBuZXcgU291cmNlKClcclxuXHJcbmV4cG9ydCB7c291cmNlfVxyXG5cclxuIiwiaW1wb3J0IHtsb2d9IGZyb20gXCIuLi8uLi8uLi91dGlscy9sb2dcIjtcclxuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtrZXl3b3Jkc30gZnJvbSBcIi4va2V5d29yZHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBacHlDb21waWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleXdvcmRzKSB7XHJcbiAgICAgICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzXHJcbiAgICAgICAgbG9nLmluZm8odGhpcy5rZXl3b3JkcylcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKGNvZGUsIHR5cGUgPSBcInpweVwiKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBcInpweVwiICYmIHR5cGUgIT09IFwicHlcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21waWxlIGNvZGUgc2hvdWxkIGJlIG9uZSBvZiB6cHksIHB5XCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXl3b3JkIG9mIGtleXdvcmRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHdvcmQgaW4ga2V5d29yZC53b3Jkcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4cFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJyb3dzZXIoKSA9PT0gJ1NhZmFyaScpIHJlZ2V4cCA9IGtleXdvcmQuc2FmYXJpUmVnXHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlZ2V4cCA9IGtleXdvcmQucmVnZXhwXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwienB5XCIpIGNvZGUgPSBjb2RlLnJlcGxhY2UodGhpcy5kaXNwb3NlKHdvcmQsIHJlZ2V4cCksIGtleXdvcmQud29yZHNbd29yZF0pXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInB5XCIpIGNvZGUgPSBjb2RlLnJlcGxhY2UodGhpcy5kaXNwb3NlKGtleXdvcmQud29yZHNbd29yZF0sIHJlZ2V4cCksIHdvcmQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uklF5rWP6KeI5ZmoXHJcbiAgICAgICAgaWYgKGV4cGxvcmVyLmluZGV4T2YoXCJNU0lFXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li6RmlyZWZveOa1j+iniOWZqFxyXG4gICAgICAgIGVsc2UgaWYgKGV4cGxvcmVyLmluZGV4T2YoXCJGaXJlZm94XCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdGaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLpDaHJvbWXmtY/op4jlmahcclxuICAgICAgICBlbHNlIGlmIChleHBsb3Jlci5pbmRleE9mKFwiQ2hyb21lXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdDaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uk9wZXJh5rWP6KeI5ZmoXHJcbiAgICAgICAgZWxzZSBpZiAoZXhwbG9yZXIuaW5kZXhPZihcIk9wZXJhXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdPcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li6U2FmYXJp5rWP6KeI5ZmoXHJcbiAgICAgICAgZWxzZSBpZiAoZXhwbG9yZXIuaW5kZXhPZihcIlNhZmFyaVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnU2FmYXJpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2Uoa2V5LCByZWdleHApIHtcclxuICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IFN0cmluZyhldmFsKHJlZ2V4cCkpXHJcbiAgICAgICAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBleGVjKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBjb25maWcuSE9TVCArIGNvbmZpZy5VUkwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdjb2RlJzogY29kZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlRpbWUiLCJ0aW1lc3RhbXAiLCJhIiwiRGF0ZSIsImdldFRpbWUiLCJkYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiZGF5U3RyaW5nIiwidGltZVN0cmluZyIsImRhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJ6ZXJvRmlsbCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJpIiwidGltZSIsInpweUVkaXRvciIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kZSIsInRoZW1lIiwibGluZU51bWJlcnMiLCJzbWFydEluZGVudCIsImluZGVudFVuaXQiLCJpbmRlbnRXaXRoVGFicyIsImxpbmVXcmFwcGluZyIsImd1dHRlcnMiLCJmb2xkR3V0dGVyIiwiYXV0b2ZvY3VzIiwibWF0Y2hCcmFja2V0cyIsImF1dG9DbG9zZUJyYWNrZXRzIiwic3R5bGVBY3RpdmVMaW5lIiwicHlFZGl0b3IiLCJzZXRTaXplIiwiWnB5Q29tcGlsZSIsImtleXdvcmRzIiwic291cmNlIiwiY29uZmlnIiwiSURFIiwienB5Q29kZSIsInB5Q29kZSIsInpweSIsInNldE9wdGlvbiIsInB5Q29tcGlsZSIsInpweUNvbXBpbGUiLCJvdXRwdXRFZGl0b3IiLCJjb2RlIiwiaW5uZXJUZXh0IiwiZ2V0Q3VycmVudFRpbWUiLCJleGVjIiwidGhlbiIsInJlc3BvbnNlIiwib3V0cHV0IiwiZXJyIiwiSE9TVCIsImdldFZhbHVlIiwiY29tcGlsZSIsImV4YW1wbGUiLCJjb2RlcyIsImlkZSIsInJlc2VydmVkV29yZHMiLCJyZWdleHAiLCJzYWZhcmlSZWciLCJ3b3JkcyIsIlNvdXJjZSIsImUwIiwibmFtZSIsImUxIiwibG9nIiwiaW5mbyIsInR5cGUiLCJFcnJvciIsImtleXdvcmQiLCJ3b3JkIiwiYnJvd3NlciIsInJlcGxhY2UiLCJkaXNwb3NlIiwiZXhwbG9yZXIiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwia2V5IiwiZXhwcmVzc2lvbiIsIlN0cmluZyIsImV2YWwiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIlVSTCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9