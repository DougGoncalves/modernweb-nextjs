module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/douglasgoncalves/Downloads/MBA - FIAP/Modern Web/todo-nextjs/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    0: todos,\n    1: setTodos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(['todo 1', 'todo 2']);\n  const {\n    0: todo,\n    1: setTodo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const removeTodo = todo => {\n    setTodos(todos.filter(t => t !== todo));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2821066343\",\n    __self: undefined\n  }, \"body{background-color:#000;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnbGFzZ29uY2FsdmVzL0Rvd25sb2Fkcy9NQkEgLSBGSUFQL01vZGVybiBXZWIvdG9kby1uZXh0anMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTBCLEFBRytCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvZG91Z2xhc2dvbmNhbHZlcy9Eb3dubG9hZHMvTUJBIC0gRklBUC9Nb2Rlcm4gV2ViL3RvZG8tbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFsndG9kbyAxJywndG9kbyAyJ10pXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIodCA9PiB0ICE9PSB0b2RvKSlcbiAgfVxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlbGxvfT5cbiAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pkxpc3RhIGRlIFRhcmVmYXM8L2gxPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXt0b2RvfSBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKT0+IHNldFRvZG9zKFsuLi50b2RvcywgdG9kb10pfT4gKyBOb3ZhIFRhcmVmYTwvYnV0dG9uPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4oXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51bH0+IFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGl9PlxuICAgICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZX0gb25DbGljaz17KCk9PiByZW1vdmVUb2RvKHRvZG8pfT5SZW1vdmVyPC9idXR0b24+XG4gICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdfQ== */\\n/*@ sourceURL=/Users/douglasgoncalves/Downloads/MBA - FIAP/Modern Web/todo-nextjs/pages/index.js */\"), __jsx(\"div\", {\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hello || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 8\n    }\n  }, \"Lista de Tarefas\"), __jsx(\"input\", {\n    value: todo,\n    onChange: e => setTodo(e.target.value),\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: () => setTodos([...todos, todo]),\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \" + Nova Tarefa\"), todos.map(todo => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"ul\", {\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ul || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.li || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, todo), __jsx(\"button\", {\n    onClick: () => removeTodo(todo),\n    className: \"jsx-2821066343\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.remove || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, \"Remover\"))))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VTdGF0ZSIsInRvZG8iLCJzZXRUb2RvIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsInQiLCJzdHlsZXMiLCJoZWxsbyIsInRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJidXR0b24iLCJtYXAiLCJ1bCIsImxpIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSxxRUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0EsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBQyxRQUFELEVBQVUsUUFBVixDQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7O0FBQ0EsUUFBTUcsVUFBVSxHQUFJRixJQUFELElBQVU7QUFDM0JGLFlBQVEsQ0FBQ0QsS0FBSyxDQUFDTSxNQUFOLENBQWFDLENBQUMsSUFBSUEsQ0FBQyxLQUFLSixJQUF4QixDQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUEsbzlEQU1FO0FBQUEseUNBQWdCSyx5REFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQSx5Q0FBZUQseURBQU0sQ0FBQ0UsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxFQUVFO0FBQWdDLFNBQUssRUFBRVAsSUFBdkM7QUFBNkMsWUFBUSxFQUFHUSxDQUFELElBQU9QLE9BQU8sQ0FBQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckU7QUFBQSx5Q0FBa0JMLHlEQUFNLENBQUNNLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQWtDLFdBQU8sRUFBRSxNQUFLYixRQUFRLENBQUMsQ0FBQyxHQUFHRCxLQUFKLEVBQVdHLElBQVgsQ0FBRCxDQUF4RDtBQUFBLHlDQUFtQksseURBQU0sQ0FBQ08sTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixFQUlHZixLQUFLLENBQUNnQixHQUFOLENBQVViLElBQUksSUFDYixtRUFDRTtBQUFBLHlDQUFlSyx5REFBTSxDQUFDUyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx5Q0FBZVQseURBQU0sQ0FBQ1UsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixJQURILENBREYsRUFLRTtBQUFrQyxXQUFPLEVBQUUsTUFBS0UsVUFBVSxDQUFDRixJQUFELENBQTFEO0FBQUEseUNBQW1CSyx5REFBTSxDQUFDVyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQURELENBSkgsQ0FORixDQURGO0FBeUJELENBL0JEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMubW9kdWxlLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoWyd0b2RvIDEnLCd0b2RvIDInXSlcbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcih0ID0+IHQgIT09IHRvZG8pKVxuICB9XG4gIHJldHVybihcbiAgICA8PlxuICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVsbG99PlxuICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+TGlzdGEgZGUgVGFyZWZhczwvaDE+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3RvZG99IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kbyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpPT4gc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvXSl9PiArIE5vdmEgVGFyZWZhPC9idXR0b24+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PihcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT4gXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saX0+XG4gICAgICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlfSBvbkNsaWNrPXsoKT0+IHJlbW92ZVRvZG8odG9kbyl9PlJlbW92ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgIDwvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles.module.css":
/*!***************************!*\
  !*** ./styles.module.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"hello\": \"styles_hello__3Bw1s\",\n\t\"title\": \"styles_title__3iMGj\",\n\t\"input\": \"styles_input__2_Iq8\",\n\t\"button\": \"styles_button__Q8s17\",\n\t\"ul\": \"styles_ul__37kKv\",\n\t\"li\": \"styles_li__1N5TT\",\n\t\"remove\": \"styles_remove__2t4Gi\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMubW9kdWxlLmNzcz84MmEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxsb1wiOiBcInN0eWxlc19oZWxsb19fM0J3MXNcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fM2lNR2pcIixcblx0XCJpbnB1dFwiOiBcInN0eWxlc19pbnB1dF9fMl9JcThcIixcblx0XCJidXR0b25cIjogXCJzdHlsZXNfYnV0dG9uX19ROHMxN1wiLFxuXHRcInVsXCI6IFwic3R5bGVzX3VsX18zN2tLdlwiLFxuXHRcImxpXCI6IFwic3R5bGVzX2xpX18xTjVUVFwiLFxuXHRcInJlbW92ZVwiOiBcInN0eWxlc19yZW1vdmVfXzJ0NEdpXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });