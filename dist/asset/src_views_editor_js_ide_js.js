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

/* unused harmony export CantoneseEditor */
var CantoneseEditor = CodeMirror.fromTextArea(document.getElementById("cantonese-code"), {
  mode: 'Cantonese',
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
CantoneseEditor.setSize(null, "63vh");


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
      this.pyCode = this.zpy.compile(this.zpyCode, 'Cantonese');
      _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.setOption("value", this.pyCode);
    }
  }, {
    key: "pyCompile",
    value: function pyCompile() {
      this.pyCode = _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.getValue();
      this.zpyCode = this.zpy.compile(this.pyCode, 'Cantonese');
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
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Cantonese";

      if (type !== "Cantonese") {
        throw new Error("Compile code should be one of Cantonese");
      }

      var _iterator = _createForOfIteratorHelper(_keywords__WEBPACK_IMPORTED_MODULE_6__.keywords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyword = _step.value;

          for (var word in keyword.words) {
            var regexp = void 0;
            if (this.browser() === 'Safari') regexp = keyword.safariReg;else regexp = keyword.regexp;
            if (type === "Cantonese") code = code.replace(this.dispose(word, regexp), keyword.words[word]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEMsZUFBTyxRQUFQO0FBQ0gsT0FGSSxNQUVFO0FBQ0gsZUFBTyxNQUFQO0FBQ0g7QUFDSjtBQWpETDtBQUFBO0FBQUEsV0FtREksaUJBQVFDLEdBQVIsRUFBYXhCLE1BQWIsRUFBcUI7QUFDakIsVUFBSXlCLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUMzQixNQUFELENBQUwsQ0FBdkI7QUFDQSxhQUFPMkIsSUFBSSxDQUFDRixVQUFELENBQVg7QUFDSDtBQXRETDtBQUFBO0FBQUE7QUFBQSw2S0F3REksaUJBQVd4QyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFDVzJDLEtBQUssQ0FBQztBQUNUQyxrQkFBQUEsTUFBTSxFQUFFLE1BREM7QUFFVEMsa0JBQUFBLEdBQUcsRUFBRXRELHNEQUFBLEdBQWNBLHFEQUZWO0FBR1R3RCxrQkFBQUEsSUFBSSxFQUFFO0FBQ0YsNEJBQVEvQztBQUROO0FBSEcsaUJBQUQsQ0FEaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F4REo7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy91dGlscy90aW1lLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9pZGUuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMva2V5d29yZHMuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvc291cmNlLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3pweS1jb21waWxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaW1lIHtcclxuICAgIHRyYW5zZm9ybVRpbWVzdGFtcCh0aW1lc3RhbXApIHtcclxuICAgICAgICAvL+WwhuKAnDIwMjEtMDctMDZUMDY6MjM6NTcuMDAwKzAwOjAw4oCdIO+8jOi9rOaNouS4ujIwMjEtMDctMDYgMTQ6MjM6NTdcclxuICAgICAgICBsZXQgYSA9IG5ldyBEYXRlKHRpbWVzdGFtcCkuZ2V0VGltZSgpXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGEpXHJcbiAgICAgICAgY29uc3QgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJ1xyXG4gICAgICAgIGNvbnN0IE0gPSAoZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwID8gJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLSdcclxuICAgICAgICBjb25zdCBEID0gKGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBkYXRlLmdldERhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpKVxyXG4gICAgICAgIGNvbnN0IGggPSAoZGF0ZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldEhvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCkpICsgJzonXHJcbiAgICAgICAgY29uc3QgbSA9IChkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnICsgZGF0ZS5nZXRNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKSkgKyAnOidcclxuICAgICAgICBjb25zdCBzID0gKGRhdGUuZ2V0U2Vjb25kcygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldFNlY29uZHMoKSA6IGRhdGUuZ2V0U2Vjb25kcygpKVxyXG4gICAgICAgIGNvbnN0IGRheVN0cmluZyA9IFkgKyBNICsgRFxyXG4gICAgICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBoICsgbSArIHNcclxuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF5U3RyaW5nICsgJyAgJyArIHRpbWVTdHJpbmdcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZVN0cmluZycsIGRhdGVTdHJpbmcpIC8vID4gZGF0ZVN0cmluZyAyMDIxLTA3LTA2IDE0OjIzOjU3XHJcbiAgICAgICAgcmV0dXJuIHtkYXlTdHJpbmcsIHRpbWVTdHJpbmcsIGRhdGVTdHJpbmd9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFRpbWUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpOy8v5b2T5YmN5pe26Ze0XHJcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICBsZXQgbW9udGggPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0TW9udGgoKSArIDEpOy8v5pyIXHJcbiAgICAgICAgbGV0IGRheSA9IHRoaXMuemVyb0ZpbGwoZGF0ZS5nZXREYXRlKCkpOy8v5pelXHJcbiAgICAgICAgbGV0IGhvdXIgPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0SG91cnMoKSk7Ly/ml7ZcclxuICAgICAgICBsZXQgbWludXRlID0gdGhpcy56ZXJvRmlsbChkYXRlLmdldE1pbnV0ZXMoKSk7Ly/liIZcclxuICAgICAgICBsZXQgc2Vjb25kID0gdGhpcy56ZXJvRmlsbChkYXRlLmdldFNlY29uZHMoKSk7Ly/np5JcclxuXHJcbiAgICAgICAgLy/lvZPliY3ml7bpl7RcclxuICAgICAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheVxyXG4gICAgICAgICAgICArIFwiIFwiICsgaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgemVyb0ZpbGwoaSkge1xyXG4gICAgICAgIC8vIOihpembtlxyXG4gICAgICAgIGlmIChpID49IDAgJiYgaSA8PSA5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjBcIiArIGk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0aW1lID0gbmV3IFRpbWUoKVxyXG5cclxuZXhwb3J0IHt0aW1lfSIsImxldCBDYW50b25lc2VFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnRvbmVzZS1jb2RlXCIpLCB7XHJcbiAgICBtb2RlOiAnQ2FudG9uZXNlJywgLy8g6K+t6KiA5qih5byPXHJcbiAgICB0aGVtZTogXCJzb2xhcml6ZWRcIiwgLy8g5Li76aKYXHJcbiAgICAvLyBrZXlNYXA6IFwic3VibGltZVwiLCAvLyDlv6vplK7plK7po47moLxcclxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyDmmL7npLrooYzlj7dcclxuICAgIHNtYXJ0SW5kZW50OiB0cnVlLCAvLyDmmbrog73nvKnov5tcclxuICAgIGluZGVudFVuaXQ6IDQsIC8vIOaZuuiDvee8qei/m+WNleS9jeS4ujTkuKrnqbrmoLzplb/luqZcclxuICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLCAvLyDkvb/nlKjliLbooajnrKbov5vooYzmmbrog73nvKnov5tcclxuICAgIGxpbmVXcmFwcGluZzogdHJ1ZSwgLy8gXHJcbiAgICAvLyDlnKjooYzmp73kuK3mt7vliqDooYzlj7fmmL7npLrlmajjgIHmipjlj6DlmajjgIHor63ms5Xmo4DmtYvlmahcclxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbnQtbWFya2Vyc1wiXSwgXHJcbiAgICBmb2xkR3V0dGVyOiB0cnVlLCAvLyDlkK/nlKjooYzmp73kuK3nmoTku6PnoIHmipjlj6BcclxuICAgIGF1dG9mb2N1czogdHJ1ZSwgLy8g6Ieq5Yqo6IGa54SmXHJcbiAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLCAvLyDljLnphY3nu5PmnZ/nrKblj7fvvIzmr5TlpoJcIl3jgIF9XCJcclxuICAgIGF1dG9DbG9zZUJyYWNrZXRzOiB0cnVlLCAvLyDoh6rliqjpl63lkIjnrKblj7dcclxuICAgIHN0eWxlQWN0aXZlTGluZTogdHJ1ZSwgLy8g5pi+56S66YCJ5Lit6KGM55qE5qC35byPXHJcbn0pO1xyXG5cclxuQ2FudG9uZXNlRWRpdG9yLnNldFNpemUobnVsbCwgXCI2M3ZoXCIpO1xyXG5cclxuZXhwb3J0IHtDYW50b25lc2VFZGl0b3J9IiwiaW1wb3J0IHtacHlDb21waWxlfSBmcm9tIFwiLi96cHktY29tcGlsZXJcIlxyXG5pbXBvcnQge2tleXdvcmRzfSBmcm9tIFwiLi9rZXl3b3Jkc1wiXHJcbmltcG9ydCB7enB5RWRpdG9yLCBweUVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yXCJcclxuaW1wb3J0IHtzb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uZmlnXCJcclxuaW1wb3J0IHt0aW1lfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZVwiXHJcblxyXG5jbGFzcyBJREUge1xyXG4gICAgY29uc3RydWN0b3Ioe3pweUNvZGUsIHB5Q29kZX0pIHtcclxuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlDb2RlXHJcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUNvZGVcclxuICAgICAgICB0aGlzLnpweSA9IG5ldyBacHlDb21waWxlKGtleXdvcmRzKVxyXG4gICAgICAgIGlmIChweUNvZGUpIHtcclxuICAgICAgICAgICAgcHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy5weUNvZGUpXHJcbiAgICAgICAgICAgIHRoaXMucHlDb21waWxlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHpweUNvZGUpIHtcclxuICAgICAgICAgICAgenB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMuenB5Q29kZSlcclxuICAgICAgICAgICAgdGhpcy56cHlDb21waWxlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vdXRwdXRFZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dC1jb2RlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb3V0cHV0KGNvZGUpIHtcclxuICAgICAgICB0aGlzLm91dHB1dEVkaXRvci5pbm5lclRleHQgKz0gYFske3RpbWUuZ2V0Q3VycmVudFRpbWUoKX1dOlxcbmBcclxuICAgICAgICB0aGlzLm91dHB1dEVkaXRvci5pbm5lclRleHQgKz0gY29kZSArIFwiXFxuXFxuXCJcclxuICAgIH1cclxuXHJcbiAgICB6cHlSdW4oKSB7XHJcbiAgICAgICAgdGhpcy56cHlDb21waWxlKClcclxuICAgICAgICB0aGlzLnpweS5leGVjKHRoaXMucHlDb2RlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dChgW+e9kee7nOmUmeivr10g5peg5rOV6L+e5o6l5pyN5Yqh5ZmoOiAke2NvbmZpZy5IT1NUfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBweVJ1bigpIHtcclxuICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXHJcbiAgICAgICAgdGhpcy56cHkuZXhlYyh0aGlzLnB5Q29kZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KHJlc3BvbnNlWydkYXRhJ10pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQoYFvnvZHnu5zplJnor69dIOaXoOazlei/nuaOpeacjeWKoeWZqDogJHtjb25maWcuSE9TVH1gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgenB5Q29tcGlsZSgpIHtcclxuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlFZGl0b3IuZ2V0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLnB5Q29kZSA9IHRoaXMuenB5LmNvbXBpbGUodGhpcy56cHlDb2RlLCAnQ2FudG9uZXNlJylcclxuICAgICAgICBweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnB5Q29kZSlcclxuICAgIH1cclxuXHJcbiAgICBweUNvbXBpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUVkaXRvci5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuenB5Q29kZSA9IHRoaXMuenB5LmNvbXBpbGUodGhpcy5weUNvZGUsICdDYW50b25lc2UnKVxyXG4gICAgICAgIHpweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnpweUNvZGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB6cHlDb2RlID0gc291cmNlLmV4YW1wbGUoKS5jb2Rlc1swXVsnc291cmNlJ11cclxubGV0IGlkZSA9IG5ldyBJREUoe3pweUNvZGV9KVxyXG5cclxuZXhwb3J0IHtJREUsIGlkZX0iLCJjb25zdCByZXNlcnZlZFdvcmRzID0ge1xyXG4gICAgcmVnZXhwOiBcImAvKD88PVxcXFxcXFxccykke2tleX0oPz1bXFxcXFxcXFxzOl0pL2dtYFwiLFxyXG4gICAgc2FmYXJpUmVnOiBcImAvJHtrZXl9KD89W1xcXFxcXFxcczpdKS9nbWBcIixcclxuICAgIHdvcmRzOiB7XHJcbiAgICAgICAgXCJrd19wcmludFwiIDogXCLnlYDmiJHnnYfkuItcIixcclxuICAgICAgICBcImt3X2VuZHByaW50XCIgOiBcIueCueagt+WFiFwiLFxyXG4gICAgICAgIFwia3dfZXhpdFwiIDogXCLmlLblt6VcIixcclxuICAgICAgICBcImt3X2luXCIgOiBcIuWWulwiLFxyXG4gICAgICAgIFwia3dfZWxpZlwiIDogXCLlrprns7tcIixcclxuICAgICAgICBcImt3X3R1cnRsZV9iZWdcIiA6IFwi6ICB5L2c5LiA5LiLXCIsXHJcbiAgICAgICAgXCJrd190eXBlXCIgOiBcIui1t+W6lVwiLFxyXG4gICAgICAgIFwia3dfYXNzaWduXCIgOiBcIuiusuWYolwiLFxyXG4gICAgICAgIFwia3dfY2xhc3NfZGVmXCIgOiBcIuWSqeezu1wiLFxyXG4gICAgICAgIFwia3dfZWxzZV9vcl9ub3RcIiA6IFwi5ZSU57O7XCIsXHJcbiAgICAgICAgXCJrd19pc1wiIDogXCLns7tcIixcclxuICAgICAgICBcImt3X2lmXCIgOiBcIuWmguaenFwiLFxyXG4gICAgICAgIFwia3dfdGhlblwiIDogXCLlmIXor51cIixcclxuICAgICAgICBcImt3X2RvXCIgOiBcIi0+XCIsXHJcbiAgICAgICAgXCJrd19iZWdpblwiIDogXCJ7XCIsXHJcbiAgICAgICAgXCJrd19lbmRcIiA6IFwifVwiLFxyXG4gICAgICAgIFwia3dfcGFzc1wiIDogXCLlkqnpg73llJTlgZpcIixcclxuICAgICAgICBcImt3X3doaWxlX2RvXCIgOiBcIuiQveaTjeWcuueOqei3keatpVwiLFxyXG4gICAgICAgIFwia3dfZnVuY3Rpb25cIiA6IFwiJFwiLFxyXG4gICAgICAgIFwia3dfY2FsbFwiIDogXCLnlKjkuItcIixcclxuICAgICAgICBcImt3X2ltcG9ydFwiIDogXCLkvb/kuItcIixcclxuICAgICAgICBcImt3X2Z1bmNfYmVnaW5cIiA6IFwi6KaB5YGa5ZKpXCIsXHJcbiAgICAgICAgXCJrd19mdW5jX2VuZFwiIDogXCLmkJ7mjoJcIixcclxuICAgICAgICBcImt3X2lzXzJcIiA6IFwi5bCxXCIsXHJcbiAgICAgICAgXCJrd19hc3NlcnRcIiA6IFwi6LCC5LiLXCIsXHJcbiAgICAgICAgXCJrd19jbGFzc19hc3NpZ25cIiA6IFwi5L2i5ZiFXCIsXHJcbiAgICAgICAgXCJrd193aGlsZVwiIDogXCLnjqnliLBcIixcclxuICAgICAgICBcImt3X3doaV9lbmRcIiA6IFwi5Li65q2iXCIsXHJcbiAgICAgICAgXCJrd19yZXR1cm5cIiA6IFwi6L+Y5pWwXCIsXHJcbiAgICAgICAgXCJrd190cnlcIjogXCLmiaflmKJcIixcclxuICAgICAgICBcImt3X2V4Y2VwdFwiIDogXCLmj77liLBcIixcclxuICAgICAgICBcImt3X2ZpbmFsbHlcIiA6IFwi5omn5omL5bC+XCIsXHJcbiAgICAgICAgXCJrd19yYWlzZVwiIDogXCLmjp/kuKpcIixcclxuICAgICAgICBcImt3X3JhaXNlX2VuZFwiIDogXCLmnaXnnYfkuItcIixcclxuICAgICAgICBcImt3X2Zyb21cIiA6IFwi5LuOXCIsXHJcbiAgICAgICAgXCJrd190b1wiIDogXCLooYzliLBcIixcclxuICAgICAgICBcImt3X2VuZGZvclwiIDogXCLooYzmmZJcIixcclxuICAgICAgICBcImt3X2V4dGVuZFwiIDogXCLkvaLkuKrogIHosYblj6tcIixcclxuICAgICAgICBcImt3X21ldGhvZFwiIDogXCLkvaLor4blvpdcIixcclxuICAgICAgICBcImt3X2VuZGNsYXNzXCIgOiBcIuaYjueZveacquWVilwiLFxyXG4gICAgICAgIFwia3dfY21kXCIgOiBcIuiQvU9yZGVyXCIsXHJcbiAgICAgICAgXCJrd19icmVha1wiIDogXCLppa7ojLblhYjllaZcIixcclxuICAgICAgICBcImt3X2xzdF9hc3NpZ25cIiA6IFwi5ouN5L2P5LiKXCIsXHJcbiAgICAgICAgXCJrd19zZXRfYXNzaWduXCIgOiBcIuWfi+WghlwiLFxyXG4gICAgICAgIFwia3dfZ2xvYmFsX3NldFwiIDogXCJTaGFyZeS4i1wiLFxyXG4gICAgICAgIFwia3dfaXNfM1wiIDogXCLkv4JcIixcclxuICAgICAgICBcImt3X2V4aXRfMVwiIDogXCLovpvoi6bmmZLllaZcIixcclxuICAgICAgICBcImt3X2V4aXRfMlwiIDogXCLlkIzmiJHoup1cIixcclxuICAgICAgICBcImt3X2ZhbHNlXCIgOiBcIuWUlOWVsVwiLFxyXG4gICAgICAgIFwia3dfdHJ1ZVwiIDogXCLllbFcIixcclxuICAgICAgICBcImt3X25vbmVcIiA6IFwi5YaHXCIsXHJcbiAgICAgICAgXCJrd19zdGFja2luaXRcIiA6IFwi5pyJ5p2h5LuG6KGX5Y+rXCIsXHJcbiAgICAgICAgXCJrd19wdXNoXCIgOiBcIumhtuS9oFwiLFxyXG4gICAgICAgIFwia3dfcG9wXCIgOiBcIuS4ouS9oFwiLFxyXG4gICAgICAgIFwia3dfbW9kZWxcIiA6IFwi5ZeMXCIsXHJcbiAgICAgICAgXCJrd19tb2RfbmV3XCIgOiBcIui/h+Wan+S8sOS4i1wiLFxyXG4gICAgICAgIFwia3dfY2xhc3NfaW5pdFwiIDogXCLkvaLmnInllbLlkqlcIixcclxuICAgICAgICBcImt3X3NlbGZcIiA6IFwi6Ieq5bex5ZiFXCIsXHJcbiAgICAgICAgXCJrd19jYWxsX2JlZ2luXCIgOiBcIuS4i1wiLFxyXG4gICAgICAgIFwia3dfZ2V0X3ZhbHVlXCIgOiBcIkBcIiAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGtleXdvcmRzID0gW3Jlc2VydmVkV29yZHNdXHJcblxyXG5leHBvcnQge2tleXdvcmRzfVxyXG4iLCJjbGFzcyBTb3VyY2Uge1xyXG4gICAgZXhhbXBsZSgpIHtcclxuICAgICAgICBsZXQgZTAgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfmj5LlhaXmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOaPkuWFpeaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KDAsIOmVvyjnm67moIfmlbDnu4QpIC0gMSk6XHJcbiAgICAgICAg6L+Z5LiqID0g55uu5qCH5pWw57uEW+e0ouW8leS4gF1cclxuICAgICAgICDkuYvlkI4gPSDnm67moIfmlbDnu4Rb57Si5byV5LiAICsgMV1cclxuICAgICAgICDlpoLmnpwg6L+Z5LiqID4g5LmL5ZCOOlxyXG4gICAgICAgICAgICDmm7/mjaIgPSDkuYvlkI5cclxuICAgICAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwgLTEsIC0xKTpcclxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMXVxyXG4gICAgICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdIDwg5pu/5o2iOlxyXG4gICAgICAgICAgICAgICAgICAgIOe7iOatolxyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXHJcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0gMCDkuI4g55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPj0g5pu/5o2iOlxyXG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOebruagh+aVsOe7hFvntKLlvJXkuoxdXHJcbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0gMVxyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjmj5LlhaXmjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZTEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfluIzlsJTmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOW4jOWwlOaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5q2l6ZW/ID0g6ZW/KOebruagh+aVsOe7hClcclxuICAgIOW9kyDmraXplb8gPiAwOlxyXG4gICAgICAgIOatpemVvyAvLz0gMlxyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjmraXplb8sIOmVvyjnm67moIfmlbDnu4QpKTpcclxuICAgICAgICAgICAg5pu/5o2iID0g55uu5qCH5pWw57uEW+e0ouW8leS4gF1cclxuICAgICAgICAgICAg57Si5byV5LqMID0g57Si5byV5LiAXHJcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0g5q2l6ZW/IOS4jiDmm7/mjaIgPCDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv106XHJcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOebruagh+aVsOe7hFvntKLlvJXkuowt5q2l6ZW/XVxyXG4gICAgICAgICAgICAgICAg57Si5byV5LqMIC09IOatpemVv1xyXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOabv+aNolxyXG4gICAg6L+U5ZueIOebruagh+aVsOe7hFxyXG4gICAgXHJcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxyXG7miZPljbAo5biM5bCU5o6S5bqPKOa1i+ivleaVsOe7hCkpXHJcbmBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGUyID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YaS5rOh5o6S5bqPJyxcclxuICAgICAgICAgICAgc291cmNlOiBgXHJcbuWHveaVsCDlhpLms6HmjpLluo8o55uu5qCH5pWw57uEKTpcclxuICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjplb8o55uu5qCH5pWw57uEKSwgMCwgLTEpOlxyXG4gICAgICAgIOagh+iusCA9IOmUmVxyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuowg5ZyoIOiMg+WbtCgwLCDntKLlvJXkuIAgLSAxKTpcclxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdID4g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXTpcclxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdLCDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jF1cclxuICAgICAgICDlpoLmnpwg5qCH6K6wOlxyXG4gICAgICAgICAgICDnu4jmraJcclxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcclxuICAgIFxyXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cclxu5omT5Y2wKOWGkuazoeaOkuW6jyjmtYvor5XmlbDnu4QpKVxyXG5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlMyA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ+W/q+mAn+aOkuW6jycsXHJcbiAgICAgICAgICAgIHNvdXJjZTogYFxyXG7lh73mlbAg5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCk6XHJcbiAgICDlh73mlbAgX+W/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QsIOW3puaMh+mSiCwg5Y+z5oyH6ZKIKTpcclxuICAgICAgICDmnqLovbQgPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxyXG4gICAgICAgIOWOn+W3puaMh+mSiCA9IOW3puaMh+mSiFxyXG4gICAgICAgIOWOn+WPs+aMh+mSiCA9IOWPs+aMh+mSiFxyXG4gICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDAgICMg5bem5oyH6ZKI5Li656m6XHJcbiAgICAgICAg5b2TIOW3puaMh+mSiCAhPSDlj7PmjIfpkog6XHJcbiAgICAgICAgICAgIOWmguaenCDlt6bmjIfpkojnqbrmoIforrA6XHJcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlt6bmjIfpkohdID49IOaeoui9tCk6XHJcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxyXG4gICAgICAgICAgICAgICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDBcclxuICAgICAgICAgICAgICAgIOWQpuWImTpcclxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkoggKz0gMVxyXG4gICAgICAgICAgICDlkKbliJk6XHJcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlj7PmjIfpkohdIDwg5p6i6L20KTpcclxuICAgICAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXSA9IOebruagh+aVsOe7hFvlj7PmjIfpkohdXHJcbiAgICAgICAgICAgICAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMVxyXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxyXG4gICAgICAgICAgICAgICAgICAgIOWPs+aMh+mSiCAtPSAxXHJcbiAgICAgICAg5Lit5oyH6ZKIID0g5bem5oyH6ZKIXHJcbiAgICAgICAg55uu5qCH5pWw57uEW+S4reaMh+mSiF0gPSDmnqLovbRcclxuICAgICAgICDlpoLmnpwg5Y6f5bem5oyH6ZKIIDwg5Lit5oyH6ZKIIC0gMTpcclxuICAgICAgICAgICAgX+W/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QsIOWOn+W3puaMh+mSiCwg5Lit5oyH6ZKIIC0gMSlcclxuICAgICAgICDlpoLmnpwg5Lit5oyH6ZKIKzEgPCDljp/lj7PmjIfpkog6XHJcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDkuK3mjIfpkogrMSwg5Y6f5Y+z5oyH6ZKIKVxyXG4gICAg5bem5oyH6ZKIID0gMFxyXG4gICAg5Y+z5oyH6ZKIID0g6ZW/KOebruagh+aVsOe7hCkgLSAxXHJcbiAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjlv6vpgJ/mjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZTQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfpgInmi6nmjpLluo8nLFxyXG4gICAgICAgICAgICBzb3VyY2U6IGBcclxu5Ye95pWwIOmAieaLqeaOkuW6jyjnm67moIfmlbDnu4QpOlxyXG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpKTpcclxuICAgICAgICDmnIDlsI/mlbDlgLwgPSDntKLlvJXkuIBcclxuICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7Qo57Si5byV5LiALCDplb8o55uu5qCH5pWw57uEKSk6XHJcbiAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdOlxyXG4gICAgICAgICAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LqMXHJcbiAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS4gF0sIOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdID0g55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF0sIOebruagh+aVsOe7hFvntKLlvJXkuIBdXHJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXHJcbiAgICBcclxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXHJcbuaJk+WNsCjpgInmi6nmjpLluo8o5rWL6K+V5pWw57uEKSlcclxuYFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfkvovlrZAnLFxyXG4gICAgICAgICAgICAnaWQnOiAnZXhhbXBsZScsXHJcbiAgICAgICAgICAgICdjb2Rlcyc6IFtlMCwgZTEsIGUyLCBlMywgZTRdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc291cmNlID0gbmV3IFNvdXJjZSgpXHJcblxyXG5leHBvcnQge3NvdXJjZX1cclxuXHJcbiIsImltcG9ydCB7bG9nfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbG9nXCI7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7a2V5d29yZHN9IGZyb20gXCIuL2tleXdvcmRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWnB5Q29tcGlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3Jkcykge1xyXG4gICAgICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkc1xyXG4gICAgICAgIGxvZy5pbmZvKHRoaXMua2V5d29yZHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShjb2RlLCB0eXBlID0gXCJDYW50b25lc2VcIikge1xyXG5cclxuICAgICAgICBpZiAodHlwZSAhPT0gXCJDYW50b25lc2VcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21waWxlIGNvZGUgc2hvdWxkIGJlIG9uZSBvZiBDYW50b25lc2VcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleXdvcmQgb2Yga2V5d29yZHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgd29yZCBpbiBrZXl3b3JkLndvcmRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXhwXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYnJvd3NlcigpID09PSAnU2FmYXJpJykgcmVnZXhwID0ga2V5d29yZC5zYWZhcmlSZWdcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVnZXhwID0ga2V5d29yZC5yZWdleHBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiQ2FudG9uZXNlXCIpIGNvZGUgPSBjb2RlLnJlcGxhY2UodGhpcy5kaXNwb3NlKHdvcmQsIHJlZ2V4cCksIGtleXdvcmQud29yZHNbd29yZF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBicm93c2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uklF5rWP6KeI5ZmoXHJcbiAgICAgICAgaWYgKGV4cGxvcmVyLmluZGV4T2YoXCJNU0lFXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li6RmlyZWZveOa1j+iniOWZqFxyXG4gICAgICAgIGVsc2UgaWYgKGV4cGxvcmVyLmluZGV4T2YoXCJGaXJlZm94XCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdGaXJlZm94JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLpDaHJvbWXmtY/op4jlmahcclxuICAgICAgICBlbHNlIGlmIChleHBsb3Jlci5pbmRleE9mKFwiQ2hyb21lXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdDaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uk9wZXJh5rWP6KeI5ZmoXHJcbiAgICAgICAgZWxzZSBpZiAoZXhwbG9yZXIuaW5kZXhPZihcIk9wZXJhXCIpID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdPcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5Li6U2FmYXJp5rWP6KeI5ZmoXHJcbiAgICAgICAgZWxzZSBpZiAoZXhwbG9yZXIuaW5kZXhPZihcIlNhZmFyaVwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnU2FmYXJpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2Uoa2V5LCByZWdleHApIHtcclxuICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IFN0cmluZyhldmFsKHJlZ2V4cCkpXHJcbiAgICAgICAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbilcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBleGVjKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBjb25maWcuSE9TVCArIGNvbmZpZy5VUkwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICdjb2RlJzogY29kZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlRpbWUiLCJ0aW1lc3RhbXAiLCJhIiwiRGF0ZSIsImdldFRpbWUiLCJkYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiZGF5U3RyaW5nIiwidGltZVN0cmluZyIsImRhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJ6ZXJvRmlsbCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJpIiwidGltZSIsIkNhbnRvbmVzZUVkaXRvciIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kZSIsInRoZW1lIiwibGluZU51bWJlcnMiLCJzbWFydEluZGVudCIsImluZGVudFVuaXQiLCJpbmRlbnRXaXRoVGFicyIsImxpbmVXcmFwcGluZyIsImd1dHRlcnMiLCJmb2xkR3V0dGVyIiwiYXV0b2ZvY3VzIiwibWF0Y2hCcmFja2V0cyIsImF1dG9DbG9zZUJyYWNrZXRzIiwic3R5bGVBY3RpdmVMaW5lIiwic2V0U2l6ZSIsIlpweUNvbXBpbGUiLCJrZXl3b3JkcyIsInpweUVkaXRvciIsInB5RWRpdG9yIiwic291cmNlIiwiY29uZmlnIiwiSURFIiwienB5Q29kZSIsInB5Q29kZSIsInpweSIsInNldE9wdGlvbiIsInB5Q29tcGlsZSIsInpweUNvbXBpbGUiLCJvdXRwdXRFZGl0b3IiLCJjb2RlIiwiaW5uZXJUZXh0IiwiZ2V0Q3VycmVudFRpbWUiLCJleGVjIiwidGhlbiIsInJlc3BvbnNlIiwib3V0cHV0IiwiZXJyIiwiSE9TVCIsImdldFZhbHVlIiwiY29tcGlsZSIsImV4YW1wbGUiLCJjb2RlcyIsImlkZSIsInJlc2VydmVkV29yZHMiLCJyZWdleHAiLCJzYWZhcmlSZWciLCJ3b3JkcyIsIlNvdXJjZSIsImUwIiwibmFtZSIsImUxIiwiZTIiLCJlMyIsImU0IiwibG9nIiwiaW5mbyIsInR5cGUiLCJFcnJvciIsImtleXdvcmQiLCJ3b3JkIiwiYnJvd3NlciIsInJlcGxhY2UiLCJkaXNwb3NlIiwiZXhwbG9yZXIiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwia2V5IiwiZXhwcmVzc2lvbiIsIlN0cmluZyIsImV2YWwiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIlVSTCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9