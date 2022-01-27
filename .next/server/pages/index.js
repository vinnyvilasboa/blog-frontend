"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__]);\nreactstrap__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n//to use hooks \n\n\n\nconst Header = ()=>{\n    //hook//\n    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            color: \"light\",\n            light: true,\n            expand: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {\n                    href: \"/\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_2__.APP_NAME\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarToggler, {\n                    onClick: toggle\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {\n                    isOpen: isOpen,\n                    navbar: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                        className: \"ml-auto\",\n                        navbar: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                    href: \"/components/\",\n                                    children: \"Components\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                    href: \"https://github.com/reactstrap/reactstrap\",\n                                    children: \"GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Header.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEVBQWU7QUFDaUI7QUFDRTtBQWFmO0FBRW5CLEtBQUssQ0FBQ2EsTUFBTSxPQUFTLENBQUM7SUFDbEIsRUFBUTtJQUNWLEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlmLCtDQUFRLENBQUMsS0FBSztJQUUxQyxLQUFLLENBQUNnQixNQUFNLE9BQVMsQ0FBQztRQUNwQkQsU0FBUyxFQUFFRCxNQUFNO0lBQ25CLENBQUM7SUFFRCxNQUFNLDZFQUNIRyxDQUFHOzhGQUNEZCw4Q0FBTTtZQUFDZSxLQUFLLEVBQUMsQ0FBTztZQUFDQyxLQUFLO1lBQUNDLE1BQU0sRUFBQyxDQUFJOzs0RkFDcENmLG1EQUFXO29CQUFDZ0IsSUFBSSxFQUFDLENBQUc7OEJBQUVwQiw2Q0FBUTs7Ozs7OzRGQUM5QkcscURBQWE7b0JBQUNrQixPQUFPLEVBQUVOLE1BQU07Ozs7Ozs0RkFDN0JkLGdEQUFRO29CQUFDWSxNQUFNLEVBQUVBLE1BQU07b0JBQUVTLE1BQU07MEdBQzdCakIsMkNBQUc7d0JBQUNrQixTQUFTLEVBQUMsQ0FBUzt3QkFBQ0QsTUFBTTs7d0dBQzVCaEIsK0NBQU87c0hBQ0xDLCtDQUFPO29DQUFDYSxJQUFJLEVBQUMsQ0FBYzs4Q0FBQyxDQUFVOzs7Ozs7Ozs7Ozt3R0FFeENkLCtDQUFPO3NIQUNMQywrQ0FBTztvQ0FBQ2EsSUFBSSxFQUFDLENBQTBDOzhDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RSxDQUFDO0FBRUQsaUVBQWVSLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvIHVzZSBob29rcyBcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBUFBfTkFNRX0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW1cbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICAvL2hvb2svL1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+e0FQUF9OQU1FfTwvTmF2YmFyQnJhbmQ+XG4gICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY29tcG9uZW50cy9cIj5Db21wb25lbnRzPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVhY3RzdHJhcC9yZWFjdHN0cmFwXCI+R2l0SHViPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQVBQX05BTUUiLCJDb2xsYXBzZSIsIk5hdmJhciIsIk5hdmJhclRvZ2dsZXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiVW5jb250cm9sbGVkRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIkhlYWRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImRpdiIsImNvbG9yIiwibGlnaHQiLCJleHBhbmQiLCJocmVmIiwib25DbGljayIsIm5hdmJhciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__]);\n_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst Layout = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Layout.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \" FOOTER \"\n            }, void 0, false, {\n                fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/Layout.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUM3QixLQUFLLENBQUNDLE1BQU0sSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQzVCLE1BQU0sNkVBQ0RDLENBQUc7O3dGQUNDSCwrQ0FBTTs7Ozs7WUFDTkUsUUFBUTt3RkFDUkUsQ0FBQzswQkFBQyxDQUFROzs7Ozs7Ozs7Ozs7QUFHdkIsQ0FBQztBQUVELGlFQUFlSCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDxwPiBGT09URVIgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API),\n/* harmony export */   \"APP_NAME\": () => (/* binding */ APP_NAME)\n/* harmony export */ });\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();\nconst API = publicRuntimeConfig.PRODUCTION ? 'http://seoblog.com' : 'http://localhost:8000';\nconst APP_NAME = publicRuntimeConfig.APP_NAME; //this makes it easier to access our API route, just need to bring in API from config file.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUVuQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsbUJBQW1CLEdBQUMsR0FBR0Qsa0RBQVM7QUFFaEMsS0FBSyxDQUFDRSxHQUFHLEdBQUdELG1CQUFtQixDQUFDRSxVQUFVLEdBQUcsQ0FBb0Isc0JBQUcsQ0FBdUI7QUFDM0YsS0FBSyxDQUFDQyxRQUFRLEdBQUdILG1CQUFtQixDQUFDRyxRQUFRLENBRXBELENBQTJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb25maWcuanM/YzJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKVxuXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OID8gJ2h0dHA6Ly9zZW9ibG9nLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJ1xuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTtcblxuLy90aGlzIG1ha2VzIGl0IGVhc2llciB0byBhY2Nlc3Mgb3VyIEFQSSByb3V0ZSwganVzdCBuZWVkIHRvIGJyaW5nIGluIEFQSSBmcm9tIGNvbmZpZyBmaWxlLiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiQVBJIiwiUFJPRFVDVElPTiIsIkFQUF9OQU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n//Home page - Landing page//\n\nconst Index = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \" Index \"\n        }, void 0, false, {\n            fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQTRCO0FBQ2E7QUFFekMsS0FBSyxDQUFDQyxLQUFLLE9BQVMsQ0FBQztJQUVqQixNQUFNLDZFQUNERCwwREFBTTs4RkFDRkUsQ0FBRTtzQkFBQyxDQUFPOzs7Ozs7Ozs7OztBQUd2QixDQUFDO0FBRUQsaUVBQWVELEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0hvbWUgcGFnZSAtIExhbmRpbmcgcGFnZS8vXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDI+IEluZGV4IDwvaDI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIkluZGV4IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();