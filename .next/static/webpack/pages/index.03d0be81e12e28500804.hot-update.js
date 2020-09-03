webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/douglasgoncalves/Downloads/MBA - FIAP/Modern Web/todo-nextjs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(['todo 1', 'todo 2']),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      todo = _useState2[0],\n      setTodo = _useState2[1];\n\n  var removeTodo = function removeTodo(todo) {\n    setTodos(todos.filter(function (t) {\n      return t !== todo;\n    }));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hello,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, \"Lista de Tarefas\"), __jsx(\"input\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n    value: todo,\n    onChange: function onChange(e) {\n      return setTodo(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n    onClick: function onClick() {\n      return setTodos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos), [todo]));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \" + Nova Tarefa\"), todos.map(function (todo) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, todo), __jsx(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.remove,\n      onClick: function onClick() {\n        return removeTodo(todo);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, \" Remover\"));\n  })));\n}, \"u2GK9rnidWhUmU1JlewRrJDarx8=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvIiwic2V0VG9kbyIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJ0Iiwic3R5bGVzIiwiaGVsbG8iLCJ0aXRsZSIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwibWFwIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSw4RUFBTTtBQUFBOztBQUFBLGtCQUNPQSxzREFBUSxDQUFDLENBQUMsUUFBRCxFQUFVLFFBQVYsQ0FBRCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFWkcsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBR25CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLElBQUQsRUFBVTtBQUMzQkQsWUFBUSxDQUFDRCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLSixJQUFWO0FBQUEsS0FBZCxDQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVLLHlEQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxFQUVFO0FBQU8sYUFBUyxFQUFFRix5REFBTSxDQUFDRyxLQUF6QjtBQUFnQyxTQUFLLEVBQUVSLElBQXZDO0FBQTZDLFlBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLGFBQU9SLE9BQU8sQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVEsYUFBUyxFQUFFTix5REFBTSxDQUFDTyxNQUExQjtBQUFrQyxXQUFPLEVBQUU7QUFBQSxhQUFLYixRQUFRLHdHQUFLRCxLQUFMLElBQVlFLElBQVosR0FBYjtBQUFBLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsRUFJR0YsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQWIsSUFBSTtBQUFBLFdBQ2IsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFMLENBREYsRUFFRTtBQUFRLGVBQVMsRUFBRUsseURBQU0sQ0FBQ1MsTUFBMUI7QUFBa0MsYUFBTyxFQUFFO0FBQUEsZUFBS1osVUFBVSxDQUFDRixJQUFELENBQWY7QUFBQSxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBRGE7QUFBQSxHQUFkLENBSkgsQ0FERixDQURGO0FBZUQsQ0FyQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbJ3RvZG8gMScsJ3RvZG8gMiddKVxuICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKHQgPT4gdCAhPT0gdG9kbykpXG4gIH1cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlbGxvfT5cbiAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pkxpc3RhIGRlIFRhcmVmYXM8L2gxPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXt0b2RvfSBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKT0+IHNldFRvZG9zKFsuLi50b2RvcywgdG9kb10pfT4gKyBOb3ZhIFRhcmVmYTwvYnV0dG9uPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4oXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57dG9kb308L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmV9IG9uQ2xpY2s9eygpPT4gcmVtb3ZlVG9kbyh0b2RvKX0+IFJlbW92ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})