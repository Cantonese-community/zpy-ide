(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_cantonese-mode_js"],{

/***/ 98:
/*!***********************************************!*\
  !*** ./src/views/editor/js/cantonese-mode.js ***!
  \***********************************************/
/***/ (() => {

CodeMirror.defineSimpleMode("Cantonese", {
  start: [{
    regex: /"(?:[^\\]|\\.)*?(?:"|$)/,
    token: "string"
  }, {
    regex: /(function)(\s+)([a-z$][\w$]*)/,
    token: ["keyword", null, "variable-2"]
  }, {
    regex: /畀我睇下|点样先|收工|喺|定|老作一下|起底|讲嘢|咩系|唔系|系|如果|嘅话|->|同埋|咩都唔做|落操场玩跑步|$|用下|使下|要做咩|搞掂|就|谂下|佢嘅|玩到|为止|还数|执嘢|揾到|执手尾|掟个|来睇下|从|行到|行晒|佢个老豆叫|佢识得|明白未啊|落Order|饮茶先啦|拍住上|係|比唔上|或者|辛苦晒啦|同我躝|唔啱|啱|冇|有条仆街叫|顶你|丢你|嗌|过嚟估下|佢有啲咩|自己嘅|下|@|埋堆|/,
    token: "keyword"
  }, {
    regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
    token: "number"
  }, {
    regex: /^#.*/,
    token: "comment"
  }, {
    regex: /\/(?:[^\\]|\\.)*?\//,
    token: "variable-3"
  }, {
    regex: /\/\*/,
    token: "comment",
    next: "comment"
  }, {
    regex: /[-+\/*=<>!]+/,
    token: "operator"
  }, {
    regex: /[\{\[\(]/,
    indent: true
  }, {
    regex: /[\}\]\)]/,
    dedent: true
  }, {
    regex: /[a-z$][\w$]*/,
    token: "variable"
  }, {
    regex: /<</,
    token: "meta",
    mode: {
      spec: "xml",
      end: />>/
    }
  }],
  comment: [{
    regex: /.*?\*\//,
    token: "comment",
    next: "start"
  }, {
    regex: /.*/,
    token: "comment"
  }],
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "//"
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc19jYW50b25lc2UtbW9kZV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBQSxVQUFVLENBQUNDLGdCQUFYLENBQTRCLFdBQTVCLEVBQXlDO0FBRXZDQyxFQUFBQSxLQUFLLEVBQUUsQ0FFTDtBQUFDQyxJQUFBQSxLQUFLLEVBQUUseUJBQVI7QUFBbUNDLElBQUFBLEtBQUssRUFBRTtBQUExQyxHQUZLLEVBS0w7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLCtCQUFSO0FBQ0NDLElBQUFBLEtBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLFlBQWxCO0FBRFIsR0FMSyxFQVNMO0FBQUNELElBQUFBLEtBQUssRUFDRixpTkFESjtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQVRLLEVBWUw7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLG9EQUFSO0FBQThEQyxJQUFBQSxLQUFLLEVBQUU7QUFBckUsR0FaSyxFQWFMO0FBQUNELElBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxJQUFBQSxLQUFLLEVBQUU7QUFBdkIsR0FiSyxFQWNMO0FBQUNELElBQUFBLEtBQUssRUFBRSxxQkFBUjtBQUErQkMsSUFBQUEsS0FBSyxFQUFFO0FBQXRDLEdBZEssRUFnQkw7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLElBQUFBLEtBQUssRUFBRSxTQUF2QjtBQUFrQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQXhDLEdBaEJLLEVBaUJMO0FBQUNGLElBQUFBLEtBQUssRUFBRSxjQUFSO0FBQXdCQyxJQUFBQSxLQUFLLEVBQUU7QUFBL0IsR0FqQkssRUFtQkw7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLFVBQVI7QUFBb0JHLElBQUFBLE1BQU0sRUFBRTtBQUE1QixHQW5CSyxFQW9CTDtBQUFDSCxJQUFBQSxLQUFLLEVBQUUsVUFBUjtBQUFvQkksSUFBQUEsTUFBTSxFQUFFO0FBQTVCLEdBcEJLLEVBcUJMO0FBQUNKLElBQUFBLEtBQUssRUFBRSxjQUFSO0FBQXdCQyxJQUFBQSxLQUFLLEVBQUU7QUFBL0IsR0FyQkssRUF5Qkw7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0MsSUFBQUEsS0FBSyxFQUFFLE1BQXJCO0FBQTZCSSxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFLEtBQVA7QUFBY0MsTUFBQUEsR0FBRyxFQUFFO0FBQW5CO0FBQW5DLEdBekJLLENBRmdDO0FBOEJ2Q0MsRUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFBQ1IsSUFBQUEsS0FBSyxFQUFFLFNBQVI7QUFBbUJDLElBQUFBLEtBQUssRUFBRSxTQUExQjtBQUFxQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQTNDLEdBRE8sRUFFUDtBQUFDRixJQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjQyxJQUFBQSxLQUFLLEVBQUU7QUFBckIsR0FGTyxDQTlCOEI7QUFzQ3ZDUSxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFELENBRGQ7QUFFSkMsSUFBQUEsV0FBVyxFQUFFO0FBRlQ7QUF0Q2lDLENBQXpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvY2FudG9uZXNlLW1vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogRXhhbXBsZSBkZWZpbml0aW9uIG9mIGEgc2ltcGxlIG1vZGUgdGhhdCB1bmRlcnN0YW5kcyBhIHN1YnNldCBvZlxyXG4gKiBKYXZhU2NyaXB0OlxyXG4gKi9cclxuXHJcbkNvZGVNaXJyb3IuZGVmaW5lU2ltcGxlTW9kZShcIkNhbnRvbmVzZVwiLCB7XHJcbiAgLy8gVGhlIHN0YXJ0IHN0YXRlIGNvbnRhaW5zIHRoZSBydWxlcyB0aGF0IGFyZSBpbml0aWFsbHkgdXNlZFxyXG4gIHN0YXJ0OiBbXHJcbiAgICAvLyBUaGUgcmVnZXggbWF0Y2hlcyB0aGUgdG9rZW4sIHRoZSB0b2tlbiBwcm9wZXJ0eSBjb250YWlucyB0aGUgdHlwZVxyXG4gICAge3JlZ2V4OiAvXCIoPzpbXlxcXFxdfFxcXFwuKSo/KD86XCJ8JCkvLCB0b2tlbjogXCJzdHJpbmdcIn0sXHJcbiAgICAvLyBZb3UgY2FuIG1hdGNoIG11bHRpcGxlIHRva2VucyBhdCBvbmNlLiBOb3RlIHRoYXQgdGhlIGNhcHR1cmVkXHJcbiAgICAvLyBncm91cHMgbXVzdCBzcGFuIHRoZSB3aG9sZSBzdHJpbmcgaW4gdGhpcyBjYXNlXHJcbiAgICB7cmVnZXg6IC8oZnVuY3Rpb24pKFxccyspKFthLXokXVtcXHckXSopLyxcclxuICAgICB0b2tlbjogW1wia2V5d29yZFwiLCBudWxsLCBcInZhcmlhYmxlLTJcIl19LFxyXG4gICAgLy8gUnVsZXMgYXJlIG1hdGNoZWQgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgYXBwZWFyLCBzbyB0aGVyZSBpc1xyXG4gICAgLy8gbm8gYW1iaWd1aXR5IGJldHdlZW4gdGhpcyBvbmUgYW5kIHRoZSBvbmUgYWJvdmVcclxuICAgIHtyZWdleDogXHJcbiAgICAgICAgL+eVgOaIkeedh+S4i3zngrnmoLflhYh85pS25belfOWWunzlrpp86ICB5L2c5LiA5LiLfOi1t+W6lXzorrLlmKJ85ZKp57O7fOWUlOezu3zns7t85aaC5p6cfOWYheivnXwtPnzlkIzln4t85ZKp6YO95ZSU5YGafOiQveaTjeWcuueOqei3keatpXwkfOeUqOS4i3zkvb/kuIt86KaB5YGa5ZKpfOaQnuaOgnzlsLF86LCC5LiLfOS9ouWYhXznjqnliLB85Li65q2ifOi/mOaVsHzmiaflmKJ85o++5YiwfOaJp+aJi+Wwvnzmjp/kuKp85p2l552H5LiLfOS7jnzooYzliLB86KGM5pmSfOS9ouS4quiAgeixhuWPq3zkvaLor4blvpd85piO55m95pyq5ZWKfOiQvU9yZGVyfOmlruiMtuWFiOWVpnzmi43kvY/kuIp85L+CfOavlOWUlOS4inzmiJbogIV86L6b6Ium5pmS5ZWmfOWQjOaIkei6nXzllJTllbF85ZWxfOWGh3zmnInmnaHku4booZflj6t86aG25L2gfOS4ouS9oHzll4x86L+H5Zqf5Lyw5LiLfOS9ouacieWVsuWSqXzoh6rlt7HlmIV85LiLfEB85Z+L5aCGfC8sIFxyXG4gICAgICB0b2tlbjogXCJrZXl3b3JkXCJ9LFxyXG4gICAge3JlZ2V4OiAvMHhbYS1mXFxkXSt8Wy0rXT8oPzpcXC5cXGQrfFxcZCtcXC4/XFxkKikoPzplWy0rXT9cXGQrKT8vaSwgdG9rZW46IFwibnVtYmVyXCJ9LFxyXG4gICAge3JlZ2V4OiAvXiMuKi8sIHRva2VuOiBcImNvbW1lbnRcIn0sXHJcbiAgICB7cmVnZXg6IC9cXC8oPzpbXlxcXFxdfFxcXFwuKSo/XFwvLywgdG9rZW46IFwidmFyaWFibGUtM1wifSxcclxuICAgIC8vIEEgbmV4dCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBtb2RlIHRvIG1vdmUgdG8gYSBkaWZmZXJlbnQgc3RhdGVcclxuICAgIHtyZWdleDogL1xcL1xcKi8sIHRva2VuOiBcImNvbW1lbnRcIiwgbmV4dDogXCJjb21tZW50XCJ9LFxyXG4gICAge3JlZ2V4OiAvWy0rXFwvKj08PiFdKy8sIHRva2VuOiBcIm9wZXJhdG9yXCJ9LFxyXG4gICAgLy8gaW5kZW50IGFuZCBkZWRlbnQgcHJvcGVydGllcyBndWlkZSBhdXRvaW5kZW50YXRpb25cclxuICAgIHtyZWdleDogL1tcXHtcXFtcXChdLywgaW5kZW50OiB0cnVlfSxcclxuICAgIHtyZWdleDogL1tcXH1cXF1cXCldLywgZGVkZW50OiB0cnVlfSxcclxuICAgIHtyZWdleDogL1thLXokXVtcXHckXSovLCB0b2tlbjogXCJ2YXJpYWJsZVwifSxcclxuICAgIC8vIFlvdSBjYW4gZW1iZWQgb3RoZXIgbW9kZXMgd2l0aCB0aGUgbW9kZSBwcm9wZXJ0eS4gVGhpcyBydWxlXHJcbiAgICAvLyBjYXVzZXMgYWxsIGNvZGUgYmV0d2VlbiA8PCBhbmQgPj4gdG8gYmUgaGlnaGxpZ2h0ZWQgd2l0aCB0aGUgWE1MXHJcbiAgICAvLyBtb2RlLlxyXG4gICAge3JlZ2V4OiAvPDwvLCB0b2tlbjogXCJtZXRhXCIsIG1vZGU6IHtzcGVjOiBcInhtbFwiLCBlbmQ6IC8+Pi99fVxyXG4gIF0sXHJcbiAgLy8gVGhlIG11bHRpLWxpbmUgY29tbWVudCBzdGF0ZS5cclxuICBjb21tZW50OiBbXHJcbiAgICB7cmVnZXg6IC8uKj9cXCpcXC8vLCB0b2tlbjogXCJjb21tZW50XCIsIG5leHQ6IFwic3RhcnRcIn0sXHJcbiAgICB7cmVnZXg6IC8uKi8sIHRva2VuOiBcImNvbW1lbnRcIn1cclxuICBdLFxyXG4gIC8vIFRoZSBtZXRhIHByb3BlcnR5IGNvbnRhaW5zIGdsb2JhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbW9kZS4gSXRcclxuICAvLyBjYW4gY29udGFpbiBwcm9wZXJ0aWVzIGxpa2UgbGluZUNvbW1lbnQsIHdoaWNoIGFyZSBzdXBwb3J0ZWQgYnlcclxuICAvLyBhbGwgbW9kZXMsIGFuZCBhbHNvIGRpcmVjdGl2ZXMgbGlrZSBkb250SW5kZW50U3RhdGVzLCB3aGljaCBhcmVcclxuICAvLyBzcGVjaWZpYyB0byBzaW1wbGUgbW9kZXMuXHJcbiAgbWV0YToge1xyXG4gICAgZG9udEluZGVudFN0YXRlczogW1wiY29tbWVudFwiXSxcclxuICAgIGxpbmVDb21tZW50OiBcIi8vXCJcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsImRlZmluZVNpbXBsZU1vZGUiLCJzdGFydCIsInJlZ2V4IiwidG9rZW4iLCJuZXh0IiwiaW5kZW50IiwiZGVkZW50IiwibW9kZSIsInNwZWMiLCJlbmQiLCJjb21tZW50IiwibWV0YSIsImRvbnRJbmRlbnRTdGF0ZXMiLCJsaW5lQ29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=