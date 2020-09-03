webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/douglasgoncalves/Downloads/MBA - FIAP/Modern Web/todo-nextjs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(['todo 1', 'todo 2']),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      todo = _useState2[0],\n      setTodo = _useState2[1];\n\n  var removeTodo = function removeTodo(todo) {\n    setTodos(todos.filter(function (t) {\n      return t !== todo;\n    }));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hello,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, \"Lista de Tarefas\"), __jsx(\"input\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,\n    value: todo,\n    onChange: function onChange(e) {\n      return setTodo(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n    onClick: function onClick() {\n      return setTodos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos), [todo]));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \" + Nova Tarefa\"), todos.map(function (todo) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"ul\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ul,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, __jsx(\"li\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.li,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, todo, __jsx(\"button\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.remove,\n      onClick: function onClick() {\n        return removeTodo(todo);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }\n    }, \"Remover\"))));\n  })));\n}, \"u2GK9rnidWhUmU1JlewRrJDarx8=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvIiwic2V0VG9kbyIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJ0Iiwic3R5bGVzIiwiaGVsbG8iLCJ0aXRsZSIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwibWFwIiwidWwiLCJsaSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR2UsOEVBQU07QUFBQTs7QUFBQSxrQkFDT0Esc0RBQVEsQ0FBQyxDQUFDLFFBQUQsRUFBVSxRQUFWLENBQUQsQ0FEZjtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUduQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixJQUFELEVBQVU7QUFDM0JELFlBQVEsQ0FBQ0QsS0FBSyxDQUFDSyxNQUFOLENBQWEsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsS0FBS0osSUFBVjtBQUFBLEtBQWQsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFSyx5REFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUVELHlEQUFNLENBQUNFLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsRUFFRTtBQUFPLGFBQVMsRUFBRUYseURBQU0sQ0FBQ0csS0FBekI7QUFBZ0MsU0FBSyxFQUFFUixJQUF2QztBQUE2QyxZQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxhQUFPUixPQUFPLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFRLGFBQVMsRUFBRU4seURBQU0sQ0FBQ08sTUFBMUI7QUFBa0MsV0FBTyxFQUFFO0FBQUEsYUFBS2IsUUFBUSx3R0FBS0QsS0FBTCxJQUFZRSxJQUFaLEdBQWI7QUFBQSxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLEVBSUdGLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUFiLElBQUk7QUFBQSxXQUNiLG1FQUNFO0FBQUksZUFBUyxFQUFFSyx5REFBTSxDQUFDUyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUVULHlEQUFNLENBQUNVLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2YsSUFESCxFQUVFO0FBQVEsZUFBUyxFQUFFSyx5REFBTSxDQUFDVyxNQUExQjtBQUFrQyxhQUFPLEVBQUU7QUFBQSxlQUFLZCxVQUFVLENBQUNGLElBQUQsQ0FBZjtBQUFBLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsQ0FERixDQURGLENBRGE7QUFBQSxHQUFkLENBSkgsQ0FERixDQURGO0FBbUJELENBekJEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMubW9kdWxlLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoWyd0b2RvIDEnLCd0b2RvIDInXSlcbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcih0ID0+IHQgIT09IHRvZG8pKVxuICB9XG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWxsb30+XG4gICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5MaXN0YSBkZSBUYXJlZmFzPC9oMT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17dG9kb30gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCk9PiBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9dKX0+ICsgTm92YSBUYXJlZmE8L2J1dHRvbj5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+KFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWx9PiBcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT5cbiAgICAgICAgICAgICAgICB7dG9kb31cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZX0gb25DbGljaz17KCk9PiByZW1vdmVUb2RvKHRvZG8pfT5SZW1vdmVyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})