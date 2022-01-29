"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/auth/SignupComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SignupComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignupComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        password: '',\n        error: '',\n        loading: 'false',\n        message: '',\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    //destructure\n    var name1 = values.name, email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    /////////////////////////SetState Methods///////////////////////////////////////\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log('handle submit');\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    ///////////////////////////SIGNUP FORM /////////////////////////////////////\n    var signupForm = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name1,\n                        onChange: handleChange('name'),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange('email'),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange('password'),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \" Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this1));\n    };\n    ///////////////////////////DISPLAY/////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: signupForm()\n    }, void 0, false, {\n        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, _this));\n};\n_s(SignupComponent, \"g4LoHST4VhPWyIAH9mgYS3EoF+I=\");\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQzs7O0lBQy9CLEdBQUssQ0FBdUJELEdBUTFCLEdBUjBCQSwrQ0FBUSxDQUFDLENBQUM7UUFDbENFLElBQUksRUFBRSxDQUFFO1FBQ1JDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO1FBQ1pDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLE9BQU8sRUFBRSxDQUFPO1FBQ2hCQyxPQUFPLEVBQUUsQ0FBRTtRQUNYQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDLEdBUk1DLE1BQU0sR0FBZVQsR0FRMUIsS0FSYVUsU0FBUyxHQUFJVixHQVExQjtJQUNGLEVBQWE7SUFDYixHQUFLLENBQUVFLEtBQUksR0FBd0RPLE1BQU0sQ0FBbEVQLElBQUksRUFBRUMsS0FBSyxHQUFpRE0sTUFBTSxDQUE1RE4sS0FBSyxFQUFFQyxRQUFRLEdBQXVDSyxNQUFNLENBQXJETCxRQUFRLEVBQUVDLEtBQUssR0FBZ0NJLE1BQU0sQ0FBM0NKLEtBQUssRUFBRUMsT0FBTyxHQUF1QkcsTUFBTSxDQUFwQ0gsT0FBTyxFQUFFQyxPQUFPLEdBQWNFLE1BQU0sQ0FBM0JGLE9BQU8sRUFBRUMsUUFBUSxHQUFJQyxNQUFNLENBQWxCRCxRQUFRO0lBQy9ELEVBQWdGO0lBQ2hGLEdBQUssQ0FBQ0csWUFBWSxHQUFHQyxRQUNwQixDQURvQkEsQ0FBQyxFQUFJLENBQUM7UUFDbkJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtJQUMvQixDQUFDO0lBQ0QsR0FBSyxDQUFDQyxZQUFZLEdBQUdkLFFBQVFVLENBQVJWLElBQUk7UUFBSVUsTUFBTSxDQUFOQSxRQUNoQyxDQURnQ0EsQ0FBQyxFQUFJLENBQUM7WUFDL0JGLFNBQVMsbUJBQUtELE1BQU07Z0JBQUVKLEtBQUssRUFBQyxLQUFLO2VBQUdILElBQUksRUFBR1UsQ0FBQyxDQUFDSyxNQUFNLENBQUNDLEtBQUs7UUFDN0QsQ0FBQzs7SUFDTCxFQUE0RTtJQUN4RSxHQUFLLENBQUNDLFVBQVUsR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQ3RCLE1BQU0sNkVBQ0RDLENBQUk7WUFBQ0MsUUFBUSxFQUFFVixZQUFZOzs0RkFFdkJXLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOzBHQUN0QkMsQ0FBSzt3QkFDTk4sS0FBSyxFQUFJaEIsS0FBSTt3QkFDYnVCLFFBQVEsRUFBRVQsWUFBWSxDQUFDLENBQU07d0JBQzdCVSxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0gsU0FBUyxFQUFDLENBQWM7d0JBQ3BDSSxXQUFXLEVBQUMsQ0FBaUI7Ozs7Ozs7Ozs7OzRGQUVoQ0wsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVk7MEdBQ3RCQyxDQUFLO3dCQUNOTixLQUFLLEVBQUlmLEtBQUs7d0JBQ2RzQixRQUFRLEVBQUVULFlBQVksQ0FBQyxDQUFPO3dCQUM5QlUsSUFBSSxFQUFDLENBQU87d0JBQUNILFNBQVMsRUFBQyxDQUFjO3dCQUNyQ0ksV0FBVyxFQUFDLENBQWtCOzs7Ozs7Ozs7Ozs0RkFFakNMLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOzBHQUN0QkMsQ0FBSzt3QkFDTk4sS0FBSyxFQUFJZCxRQUFRO3dCQUNqQnFCLFFBQVEsRUFBRVQsWUFBWSxDQUFDLENBQVU7d0JBQ2pDVSxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0gsU0FBUyxFQUFDLENBQWM7d0JBQ3hDSSxXQUFXLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7OzRGQUdwQ0wsQ0FBRzswR0FDQ00sQ0FBTTt3QkFBQ0wsU0FBUyxFQUFDLENBQWlCO2tDQUFDLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTTVELENBQUM7SUFDTCxFQUF1RTtJQUVuRSxNQUFNLDZFQUNERCxDQUFHO2tCQUNDSCxVQUFVOzs7Ozs7QUFJdkIsQ0FBQztHQS9ES2xCLGVBQWU7S0FBZkEsZUFBZTtBQWlFckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ251cENvbXBvbmVudC5qcz83YzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTaWdudXBDb21wb25lbnQgPSAoKSA9PiB7XG5jb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgZXJyb3I6ICcnLFxuICAgIGxvYWRpbmc6ICdmYWxzZScsXG4gICAgbWVzc2FnZTogJycsXG4gICAgc2hvd0Zvcm06IHRydWVcbn0pXG4vL2Rlc3RydWN0dXJlXG5jb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm19ID0gdmFsdWVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU2V0U3RhdGUgTWV0aG9kcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBzdWJtaXQnKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcywgZXJyb3I6ZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NJR05VUCBGT1JNIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBzaWdudXBGb3JtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZSBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsIFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmQgXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+IFNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ESVNQTEFZLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICB7c2lnbnVwRm9ybSgpfVxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwQ29tcG9uZW50Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lnbnVwQ29tcG9uZW50IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzaWdudXBGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/SignupComponent.js\n");

/***/ })

});