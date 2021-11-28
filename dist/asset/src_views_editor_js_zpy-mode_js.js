(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_zpy-mode_js"],{

/***/ 969:
/*!*****************************************!*\
  !*** ./src/views/editor/js/zpy-mode.js ***!
  \*****************************************/
/***/ (() => {

CodeMirror.defineSimpleMode("zpy", {
  start: [{
    regex: /"(?:[^\\]|\\.)*?(?:"|$)/,
    token: "string"
  }, {
    regex: /(function)(\s+)([a-z$][\w$]*)/,
    token: ["keyword", null, "variable-2"]
  }, {
    regex: /畀我睇下|点样先|收工|喺|定|老作一下|起底|讲嘢|咩系|唔系|系|如果|嘅话|->|同埋|咩都唔做|落操场玩跑步|$|用下|使下|要做咩|搞掂|就|谂下|佢嘅|玩到|为止|还数|执嘢|揾到|执手尾|掟个|来睇下|从|行到|行晒|佢个老豆叫|佢识得|明白未啊|落Order|饮茶先啦|拍住上|係|比唔上|或者|辛苦晒啦|同我躝|唔啱|啱|冇|有条仆街叫|顶你|丢你|嗌|过嚟估下|佢有啲咩|自己嘅|下|@|埋堆/,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc196cHktbW9kZV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBQSxVQUFVLENBQUNDLGdCQUFYLENBQTRCLEtBQTVCLEVBQW1DO0FBRWpDQyxFQUFBQSxLQUFLLEVBQUUsQ0FFTDtBQUFDQyxJQUFBQSxLQUFLLEVBQUUseUJBQVI7QUFBbUNDLElBQUFBLEtBQUssRUFBRTtBQUExQyxHQUZLLEVBS0w7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLCtCQUFSO0FBQ0NDLElBQUFBLEtBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLFlBQWxCO0FBRFIsR0FMSyxFQVNMO0FBQUNELElBQUFBLEtBQUssRUFBRSxnTkFBUjtBQUEwTkMsSUFBQUEsS0FBSyxFQUFFO0FBQWpPLEdBVEssRUFVTDtBQUFDRCxJQUFBQSxLQUFLLEVBQUUsb0RBQVI7QUFBOERDLElBQUFBLEtBQUssRUFBRTtBQUFyRSxHQVZLLEVBV0w7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLElBQUFBLEtBQUssRUFBRTtBQUF2QixHQVhLLEVBWUw7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLHFCQUFSO0FBQStCQyxJQUFBQSxLQUFLLEVBQUU7QUFBdEMsR0FaSyxFQWNMO0FBQUNELElBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxJQUFBQSxLQUFLLEVBQUUsU0FBdkI7QUFBa0NDLElBQUFBLElBQUksRUFBRTtBQUF4QyxHQWRLLEVBZUw7QUFBQ0YsSUFBQUEsS0FBSyxFQUFFLGNBQVI7QUFBd0JDLElBQUFBLEtBQUssRUFBRTtBQUEvQixHQWZLLEVBaUJMO0FBQUNELElBQUFBLEtBQUssRUFBRSxVQUFSO0FBQW9CRyxJQUFBQSxNQUFNLEVBQUU7QUFBNUIsR0FqQkssRUFrQkw7QUFBQ0gsSUFBQUEsS0FBSyxFQUFFLFVBQVI7QUFBb0JJLElBQUFBLE1BQU0sRUFBRTtBQUE1QixHQWxCSyxFQW1CTDtBQUFDSixJQUFBQSxLQUFLLEVBQUUsY0FBUjtBQUF3QkMsSUFBQUEsS0FBSyxFQUFFO0FBQS9CLEdBbkJLLEVBdUJMO0FBQUNELElBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNDLElBQUFBLEtBQUssRUFBRSxNQUFyQjtBQUE2QkksSUFBQUEsSUFBSSxFQUFFO0FBQUNDLE1BQUFBLElBQUksRUFBRSxLQUFQO0FBQWNDLE1BQUFBLEdBQUcsRUFBRTtBQUFuQjtBQUFuQyxHQXZCSyxDQUYwQjtBQTRCakNDLEVBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUNSLElBQUFBLEtBQUssRUFBRSxTQUFSO0FBQW1CQyxJQUFBQSxLQUFLLEVBQUUsU0FBMUI7QUFBcUNDLElBQUFBLElBQUksRUFBRTtBQUEzQyxHQURPLEVBRVA7QUFBQ0YsSUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0MsSUFBQUEsS0FBSyxFQUFFO0FBQXJCLEdBRk8sQ0E1QndCO0FBb0NqQ1EsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGdCQUFnQixFQUFFLENBQUMsU0FBRCxDQURkO0FBRUpDLElBQUFBLFdBQVcsRUFBRTtBQUZUO0FBcEMyQixDQUFuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3pweS1tb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEV4YW1wbGUgZGVmaW5pdGlvbiBvZiBhIHNpbXBsZSBtb2RlIHRoYXQgdW5kZXJzdGFuZHMgYSBzdWJzZXQgb2ZcclxuICogSmF2YVNjcmlwdDpcclxuICovXHJcblxyXG5Db2RlTWlycm9yLmRlZmluZVNpbXBsZU1vZGUoXCJ6cHlcIiwge1xyXG4gIC8vIFRoZSBzdGFydCBzdGF0ZSBjb250YWlucyB0aGUgcnVsZXMgdGhhdCBhcmUgaW5pdGlhbGx5IHVzZWRcclxuICBzdGFydDogW1xyXG4gICAgLy8gVGhlIHJlZ2V4IG1hdGNoZXMgdGhlIHRva2VuLCB0aGUgdG9rZW4gcHJvcGVydHkgY29udGFpbnMgdGhlIHR5cGVcclxuICAgIHtyZWdleDogL1wiKD86W15cXFxcXXxcXFxcLikqPyg/OlwifCQpLywgdG9rZW46IFwic3RyaW5nXCJ9LFxyXG4gICAgLy8gWW91IGNhbiBtYXRjaCBtdWx0aXBsZSB0b2tlbnMgYXQgb25jZS4gTm90ZSB0aGF0IHRoZSBjYXB0dXJlZFxyXG4gICAgLy8gZ3JvdXBzIG11c3Qgc3BhbiB0aGUgd2hvbGUgc3RyaW5nIGluIHRoaXMgY2FzZVxyXG4gICAge3JlZ2V4OiAvKGZ1bmN0aW9uKShcXHMrKShbYS16JF1bXFx3JF0qKS8sXHJcbiAgICAgdG9rZW46IFtcImtleXdvcmRcIiwgbnVsbCwgXCJ2YXJpYWJsZS0yXCJdfSxcclxuICAgIC8vIFJ1bGVzIGFyZSBtYXRjaGVkIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFwcGVhciwgc28gdGhlcmUgaXNcclxuICAgIC8vIG5vIGFtYmlndWl0eSBiZXR3ZWVuIHRoaXMgb25lIGFuZCB0aGUgb25lIGFib3ZlXHJcbiAgICB7cmVnZXg6IC/nlYDmiJHnnYfkuIt854K55qC35YWIfOaUtuW3pXzllrp85a6afOiAgeS9nOS4gOS4i3zotbflupV86K6y5ZiifOWSqeezu3zllJTns7t857O7fOWmguaenHzlmIXor518LT585ZCM5Z+LfOWSqemDveWUlOWBmnzokL3mk43lnLrnjqnot5HmraV8JHznlKjkuIt85L2/5LiLfOimgeWBmuWSqXzmkJ7mjoJ85bCxfOiwguS4i3zkvaLlmIV8546p5YiwfOS4uuatonzov5jmlbB85omn5ZiifOaPvuWIsHzmiafmiYvlsL585o6f5LiqfOadpeedh+S4i3zku4586KGM5YiwfOihjOaZknzkvaLkuKrogIHosYblj6t85L2i6K+G5b6XfOaYjueZveacquWVinzokL1PcmRlcnzppa7ojLblhYjllaZ85ouN5L2P5LiKfOS/gnzmr5TllJTkuIp85oiW6ICFfOi+m+iLpuaZkuWVpnzlkIzmiJHoup185ZSU5ZWxfOWVsXzlhod85pyJ5p2h5LuG6KGX5Y+rfOmhtuS9oHzkuKLkvaB85ZeMfOi/h+Wan+S8sOS4i3zkvaLmnInllbLlkql86Ieq5bex5ZiFfOS4i3xAfOWfi+Wghi8sIHRva2VuOiBcImtleXdvcmRcIn0sXHJcbiAgICB7cmVnZXg6IC8weFthLWZcXGRdK3xbLStdPyg/OlxcLlxcZCt8XFxkK1xcLj9cXGQqKSg/OmVbLStdP1xcZCspPy9pLCB0b2tlbjogXCJudW1iZXJcIn0sXHJcbiAgICB7cmVnZXg6IC9eIy4qLywgdG9rZW46IFwiY29tbWVudFwifSxcclxuICAgIHtyZWdleDogL1xcLyg/OlteXFxcXF18XFxcXC4pKj9cXC8vLCB0b2tlbjogXCJ2YXJpYWJsZS0zXCJ9LFxyXG4gICAgLy8gQSBuZXh0IHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlIG1vZGUgdG8gbW92ZSB0byBhIGRpZmZlcmVudCBzdGF0ZVxyXG4gICAge3JlZ2V4OiAvXFwvXFwqLywgdG9rZW46IFwiY29tbWVudFwiLCBuZXh0OiBcImNvbW1lbnRcIn0sXHJcbiAgICB7cmVnZXg6IC9bLStcXC8qPTw+IV0rLywgdG9rZW46IFwib3BlcmF0b3JcIn0sXHJcbiAgICAvLyBpbmRlbnQgYW5kIGRlZGVudCBwcm9wZXJ0aWVzIGd1aWRlIGF1dG9pbmRlbnRhdGlvblxyXG4gICAge3JlZ2V4OiAvW1xce1xcW1xcKF0vLCBpbmRlbnQ6IHRydWV9LFxyXG4gICAge3JlZ2V4OiAvW1xcfVxcXVxcKV0vLCBkZWRlbnQ6IHRydWV9LFxyXG4gICAge3JlZ2V4OiAvW2EteiRdW1xcdyRdKi8sIHRva2VuOiBcInZhcmlhYmxlXCJ9LFxyXG4gICAgLy8gWW91IGNhbiBlbWJlZCBvdGhlciBtb2RlcyB3aXRoIHRoZSBtb2RlIHByb3BlcnR5LiBUaGlzIHJ1bGVcclxuICAgIC8vIGNhdXNlcyBhbGwgY29kZSBiZXR3ZWVuIDw8IGFuZCA+PiB0byBiZSBoaWdobGlnaHRlZCB3aXRoIHRoZSBYTUxcclxuICAgIC8vIG1vZGUuXHJcbiAgICB7cmVnZXg6IC88PC8sIHRva2VuOiBcIm1ldGFcIiwgbW9kZToge3NwZWM6IFwieG1sXCIsIGVuZDogLz4+L319XHJcbiAgXSxcclxuICAvLyBUaGUgbXVsdGktbGluZSBjb21tZW50IHN0YXRlLlxyXG4gIGNvbW1lbnQ6IFtcclxuICAgIHtyZWdleDogLy4qP1xcKlxcLy8sIHRva2VuOiBcImNvbW1lbnRcIiwgbmV4dDogXCJzdGFydFwifSxcclxuICAgIHtyZWdleDogLy4qLywgdG9rZW46IFwiY29tbWVudFwifVxyXG4gIF0sXHJcbiAgLy8gVGhlIG1ldGEgcHJvcGVydHkgY29udGFpbnMgZ2xvYmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtb2RlLiBJdFxyXG4gIC8vIGNhbiBjb250YWluIHByb3BlcnRpZXMgbGlrZSBsaW5lQ29tbWVudCwgd2hpY2ggYXJlIHN1cHBvcnRlZCBieVxyXG4gIC8vIGFsbCBtb2RlcywgYW5kIGFsc28gZGlyZWN0aXZlcyBsaWtlIGRvbnRJbmRlbnRTdGF0ZXMsIHdoaWNoIGFyZVxyXG4gIC8vIHNwZWNpZmljIHRvIHNpbXBsZSBtb2Rlcy5cclxuICBtZXRhOiB7XHJcbiAgICBkb250SW5kZW50U3RhdGVzOiBbXCJjb21tZW50XCJdLFxyXG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIlxyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lU2ltcGxlTW9kZSIsInN0YXJ0IiwicmVnZXgiLCJ0b2tlbiIsIm5leHQiLCJpbmRlbnQiLCJkZWRlbnQiLCJtb2RlIiwic3BlYyIsImVuZCIsImNvbW1lbnQiLCJtZXRhIiwiZG9udEluZGVudFN0YXRlcyIsImxpbmVDb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==