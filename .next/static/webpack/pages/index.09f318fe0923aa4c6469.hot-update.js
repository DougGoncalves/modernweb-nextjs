webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/douglasgoncalves/Downloads/MBA - FIAP/Modern Web/todo-nextjs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(['todo 1', 'todo 2']),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      todo = _useState2[0],\n      setTodo = _useState2[1];\n\n  var removeTodo = function removeTodo(todo) {\n    setTodos(todos.filter(function (t) {\n      return t !== todo;\n    }));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hello,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, \"Lista de Tarefas\"), __jsx(\"input\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n    value: todo,\n    onChange: function onChange(e) {\n      return setTodo(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setTodos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos), [todo]));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Adicionar\"), todos.map(function (todo) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, todo), __jsx(\"button\", {\n      onClick: function onClick() {\n        return removeTodo(todo);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, \" Remover\"));\n  })));\n}, \"u2GK9rnidWhUmU1JlewRrJDarx8=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvIiwic2V0VG9kbyIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJ0Iiwic3R5bGVzIiwiaGVsbG8iLCJ0aXRsZSIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSw4RUFBTTtBQUFBOztBQUFBLGtCQUNPQSxzREFBUSxDQUFDLENBQUMsUUFBRCxFQUFVLFFBQVYsQ0FBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFWkcsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBR25CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLElBQUQsRUFBVTtBQUMzQkQsWUFBUSxDQUFDRCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLSixJQUFWO0FBQUEsS0FBZCxDQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVLLHlEQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxFQUVFO0FBQU8sYUFBUyxFQUFFRix5REFBTSxDQUFDRyxLQUF6QjtBQUErQixTQUFLLEVBQUVSLElBQXRDO0FBQTRDLFlBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLGFBQU9SLE9BQU8sQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBS1osUUFBUSx3R0FBS0QsS0FBTCxJQUFZRSxJQUFaLEdBQWI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUdGLEtBQUssQ0FBQ2MsR0FBTixDQUFVLFVBQUFaLElBQUk7QUFBQSxXQUNiLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQURGLEVBRUU7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFLRSxVQUFVLENBQUNGLElBQUQsQ0FBZjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsQ0FEYTtBQUFBLEdBQWQsQ0FKSCxDQURGLENBREY7QUFlRCxDQXJCRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFsndG9kbyAxJywndG9kbyAyJ10pXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIodCA9PiB0ICE9PSB0b2RvKSlcbiAgfVxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVsbG99PlxuICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+TGlzdGEgZGUgVGFyZWZhczwvaDE+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH12YWx1ZT17dG9kb30gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvXSl9PkFkaWNpb25hcjwvYnV0dG9uPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4oXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57dG9kb308L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHJlbW92ZVRvZG8odG9kbyl9PiBSZW1vdmVyPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})