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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"../node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/useAuth */ \"./pages/utils/useAuth.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const AuthenticatedComponent = (0,_utils_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Component);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticatedComponent, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/root/E/panel/resources/pages/_app.jsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ0k7QUFFdEMsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyx5QkFBeUJKLDBEQUFPQSxDQUFDRTtJQUN2QyxxQkFBTyw4REFBQ0U7UUFBd0IsR0FBR0QsU0FBUzs7Ozs7O0FBQzlDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBhdXRoSG9jIGZyb20gJy4vdXRpbHMvdXNlQXV0aCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBBdXRoZW50aWNhdGVkQ29tcG9uZW50ID0gYXV0aEhvYyhDb21wb25lbnQpO1xuICByZXR1cm4gPEF1dGhlbnRpY2F0ZWRDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImF1dGhIb2MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkF1dGhlbnRpY2F0ZWRDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./pages/utils/useAuth.js":
/*!********************************!*\
  !*** ./pages/utils/useAuth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authHoc = (WrappedComponent)=>{\n    const AuthHoc = (props)=>{\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n            const checkAuth = async ()=>{\n                try {\n                    const res = await fetch(\"/check-session\", {\n                        method: \"POST\",\n                        credentials: \"include\"\n                    });\n                    const data = await res.json();\n                    if (!data.loggedIn && ![\n                        \"/login\",\n                        \"/register\",\n                        \"/\",\n                        \"/404\",\n                        \"/400\",\n                        \"/_error\",\n                        \"/blacklist\"\n                    ].includes(router.pathname)) {\n                        router.push(\"/login\");\n                    }\n                } catch  {\n                    router.push(\"/login\");\n                }\n            };\n            checkAuth();\n        }, [\n            router\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/root/E/panel/resources/pages/utils/useAuth.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    };\n    return AuthHoc;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authHoc);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy91c2VBdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFFeEMsTUFBTUUsVUFBVSxDQUFDQztJQUNmLE1BQU1DLFVBQVUsQ0FBQ0M7UUFDZixNQUFNQyxTQUFTTCxzREFBU0E7UUFFeEJELHNEQUFlLENBQUM7WUFDZCxNQUFNUSxZQUFZO2dCQUNoQixJQUFJO29CQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxrQkFBa0I7d0JBQ3hDQyxRQUFRO3dCQUNSQyxhQUFhO29CQUNmO29CQUNBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtvQkFFM0IsSUFBSSxDQUFDRCxLQUFLRSxRQUFRLElBQUksQ0FBQzt3QkFBQzt3QkFBVTt3QkFBYTt3QkFBSzt3QkFBUTt3QkFBUTt3QkFBVztxQkFBYSxDQUFDQyxRQUFRLENBQUNWLE9BQU9XLFFBQVEsR0FBRzt3QkFDdEhYLE9BQU9ZLElBQUksQ0FBQztvQkFDZDtnQkFDRixFQUFFLE9BQU07b0JBQ05aLE9BQU9ZLElBQUksQ0FBQztnQkFDZDtZQUNGO1lBRUFWO1FBQ0YsR0FBRztZQUFDRjtTQUFPO1FBRVgscUJBQU8sOERBQUNIO1lBQWtCLEdBQUdFLEtBQUs7Ozs7OztJQUNwQztJQUVBLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZUYsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3V0aWxzL3VzZUF1dGguanM/M2VkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBhdXRoSG9jID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgY29uc3QgQXV0aEhvYyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2NoZWNrLXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKCFkYXRhLmxvZ2dlZEluICYmICFbJy9sb2dpbicsICcvcmVnaXN0ZXInLCAnLycsICcvNDA0JywgJy80MDAnLCAnL19lcnJvcicsICcvYmxhY2tsaXN0J10uaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjaGVja0F1dGgoKTtcbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICByZXR1cm4gQXV0aEhvYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhIb2M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoSG9jIiwiV3JhcHBlZENvbXBvbmVudCIsIkF1dGhIb2MiLCJwcm9wcyIsInJvdXRlciIsInVzZUVmZmVjdCIsImNoZWNrQXV0aCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJkYXRhIiwianNvbiIsImxvZ2dlZEluIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/utils/useAuth.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/tailwindcss"], () => (__webpack_exec__("./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();