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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignupComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        password: '',\n        error: '',\n        loading: 'false',\n        message: '',\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    /////////////////////////SetState Methods///////////////////////////////////////\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log('handle submit');\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    //destructure\n    var name1 = values.name, email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    ///////////////////////////SIGNUP FORM /////////////////////////////////////\n    var signupForm = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name1,\n                        onChange: handleChange('name'),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange('email'),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange('password'),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \" Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this1));\n    };\n    ///////////////////////////DISPLAY/////////////////////////////////////\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: signupForm()\n    }, void 0, false, {\n        fileName: \"/Users/vinnyvilasboa/Desktop/dev/MERN/seoblog/frontend/components/auth/SignupComponent.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, _this));\n};\n_s(SignupComponent, \"g4LoHST4VhPWyIAH9mgYS3EoF+I=\");\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQzs7O0lBQy9CLEdBQUssQ0FBdUJELEdBUTFCLEdBUjBCQSwrQ0FBUSxDQUFDLENBQUM7UUFDbENFLElBQUksRUFBRSxDQUFFO1FBQ1JDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO1FBQ1pDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLE9BQU8sRUFBRSxDQUFPO1FBQ2hCQyxPQUFPLEVBQUUsQ0FBRTtRQUNYQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDLEdBUk1DLE1BQU0sR0FBZVQsR0FRMUIsS0FSYVUsU0FBUyxHQUFJVixHQVExQjtJQUNGLEVBQWdGO0lBQ2hGLEdBQUssQ0FBQ1csWUFBWSxHQUFHQyxRQUNwQixDQURvQkEsQ0FBQyxFQUFJLENBQUM7UUFDbkJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtJQUMvQixDQUFDO0lBQ0QsR0FBSyxDQUFDQyxZQUFZLEdBQUdkLFFBQVFVLENBQVJWLElBQUk7UUFBSVUsTUFBTSxDQUFOQSxRQUNoQyxDQURnQ0EsQ0FBQyxFQUFJLENBQUM7WUFDL0JGLFNBQVMsbUJBQUtELE1BQU07Z0JBQUVKLEtBQUssRUFBQyxLQUFLO2VBQUdILElBQUksRUFBR1UsQ0FBQyxDQUFDSyxNQUFNLENBQUNDLEtBQUs7UUFDN0QsQ0FBQzs7SUFDTCxFQUFhO0lBQ1QsR0FBSyxDQUFFaEIsS0FBSSxHQUF3RE8sTUFBTSxDQUFsRVAsSUFBSSxFQUFFQyxLQUFLLEdBQWlETSxNQUFNLENBQTVETixLQUFLLEVBQUVDLFFBQVEsR0FBdUNLLE1BQU0sQ0FBckRMLFFBQVEsRUFBRUMsS0FBSyxHQUFnQ0ksTUFBTSxDQUEzQ0osS0FBSyxFQUFFQyxPQUFPLEdBQXVCRyxNQUFNLENBQXBDSCxPQUFPLEVBQUVDLE9BQU8sR0FBY0UsTUFBTSxDQUEzQkYsT0FBTyxFQUFFQyxRQUFRLEdBQUlDLE1BQU0sQ0FBbEJELFFBQVE7SUFDbkUsRUFBNEU7SUFDeEUsR0FBSyxDQUFDVyxVQUFVLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUN0QixNQUFNLDZFQUNEQyxDQUFJO1lBQUNDLFFBQVEsRUFBRVYsWUFBWTs7NEZBRXZCVyxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBWTswR0FDdEJDLENBQUs7d0JBQ05OLEtBQUssRUFBSWhCLEtBQUk7d0JBQ2J1QixRQUFRLEVBQUVULFlBQVksQ0FBQyxDQUFNO3dCQUM3QlUsSUFBSSxFQUFDLENBQU07d0JBQUNILFNBQVMsRUFBQyxDQUFjO3dCQUNwQ0ksV0FBVyxFQUFDLENBQWlCOzs7Ozs7Ozs7Ozs0RkFFaENMLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOzBHQUN0QkMsQ0FBSzt3QkFDTk4sS0FBSyxFQUFJZixLQUFLO3dCQUNkc0IsUUFBUSxFQUFFVCxZQUFZLENBQUMsQ0FBTzt3QkFDOUJVLElBQUksRUFBQyxDQUFPO3dCQUFDSCxTQUFTLEVBQUMsQ0FBYzt3QkFDckNJLFdBQVcsRUFBQyxDQUFrQjs7Ozs7Ozs7Ozs7NEZBRWpDTCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBWTswR0FDdEJDLENBQUs7d0JBQ05OLEtBQUssRUFBSWQsUUFBUTt3QkFDakJxQixRQUFRLEVBQUVULFlBQVksQ0FBQyxDQUFVO3dCQUNqQ1UsSUFBSSxFQUFDLENBQVU7d0JBQUNILFNBQVMsRUFBQyxDQUFjO3dCQUN4Q0ksV0FBVyxFQUFDLENBQXFCOzs7Ozs7Ozs7Ozs0RkFHcENMLENBQUc7MEdBQ0NNLENBQU07d0JBQUNMLFNBQVMsRUFBQyxDQUFpQjtrQ0FBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7OztJQU01RCxDQUFDO0lBQ0wsRUFBdUU7SUFFbkUsTUFBTSw2RUFDREQsQ0FBRztrQkFDQ0gsVUFBVTs7Ozs7O0FBSXZCLENBQUM7R0EvREtsQixlQUFlO0tBQWZBLGVBQWU7QUFpRXJCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9TaWdudXBDb21wb25lbnQuanM/N2MxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2lnbnVwQ29tcG9uZW50ID0gKCkgPT4ge1xuY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGVycm9yOiAnJyxcbiAgICBsb2FkaW5nOiAnZmFsc2UnLFxuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHNob3dGb3JtOiB0cnVlXG59KVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NldFN0YXRlIE1ldGhvZHMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgc3VibWl0JylcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGVycm9yOmZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG4vL2Rlc3RydWN0dXJlXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtfSA9IHZhbHVlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU0lHTlVQIEZPUk0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHNpZ251cEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lIFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWwgXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZCBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj4gU2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RJU1BMQVkvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIHtzaWdudXBGb3JtKCl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBDb21wb25lbnQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTaWdudXBDb21wb25lbnQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNpZ251cEZvcm0iLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/SignupComponent.js\n");

/***/ })

});