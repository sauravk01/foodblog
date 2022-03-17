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
exports.id = "pages/testing";
exports.ids = ["pages/testing"];
exports.modules = {

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetchData */ \"./utils/fetchData.js\");\n\n\nconst testing = ({ recipe  })=>{\n    console.log(\"recipe\", recipe[0]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testing);\nasync function getServerSideProps(context) {\n    let recipes = await (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_1__.getData)(\"recipe\");\n    // let recipe = recipes.data.filter((recipe) => recipe._id == query);\n    return {\n        props: {\n            recipe: recipes.data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU1QyxLQUFLLENBQUNDLE9BQU8sSUFBSSxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFRixNQUFNLENBQUMsQ0FBQztJQUM5QixNQUFNO0FBQ1IsQ0FBQztBQUVELGlFQUFlRCxPQUFPLEVBQUM7QUFDaEIsZUFBZUksa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ1AseURBQU8sQ0FBQyxDQUFRO0lBRXBDLEVBQXFFO0lBRXJFLE1BQU0sQ0FBQyxDQUFDO1FBQ05RLEtBQUssRUFBRSxDQUFDO1lBQ05OLE1BQU0sRUFBRUssT0FBTyxDQUFDRSxJQUFJO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRocHJhY3RpY2UvLi9wYWdlcy90ZXN0aW5nLmpzP2EwYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuLi91dGlscy9mZXRjaERhdGFcIjtcblxuY29uc3QgdGVzdGluZyA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicmVjaXBlXCIsIHJlY2lwZVswXSk7XG4gIHJldHVybiA8PjwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlc3Rpbmc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgbGV0IHJlY2lwZXMgPSBhd2FpdCBnZXREYXRhKFwicmVjaXBlXCIpO1xuXG4gIC8vIGxldCByZWNpcGUgPSByZWNpcGVzLmRhdGEuZmlsdGVyKChyZWNpcGUpID0+IHJlY2lwZS5faWQgPT0gcXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlY2lwZTogcmVjaXBlcy5kYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0RGF0YSIsInRlc3RpbmciLCJyZWNpcGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlY2lwZXMiLCJwcm9wcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData),\n/* harmony export */   \"putData\": () => (/* binding */ putData),\n/* harmony export */   \"patchData\": () => (/* binding */ patchData),\n/* harmony export */   \"deleteData\": () => (/* binding */ deleteData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nlet BASE_URL = \"http://localhost:3000\";\nconst getData = async (url, token)=>{\n    console.log(\"url\", `${BASE_URL}/api/${url}`);\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE_URL}/api/${url}`);\n    const data = await res.data;\n    return data;\n};\nconst postData = async (url, post, token)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/api/${url}`, post, {\n        headers: {\n            Authorization: token\n        }\n    });\n    const data = await res.data;\n    return data;\n};\nconst putData = async (url, post, token)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${BASE_URL}/api/${url}`, post, {\n        headers: {\n            Authorization: token\n        }\n    });\n    const data = await res.data;\n    return data;\n};\nconst patchData = async (url, post, token)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${BASE_URL}/api/${url}`, post, {\n        headers: {\n            Authorization: token\n        }\n    });\n    const data = await res.data;\n    return data;\n};\nconst deleteData = async (url, token)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](`${BASE_URL}/api/${url}`, {\n        headers: {\n            Authorization: token\n        }\n    });\n    const data = await res.data;\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZXRjaERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QjtBQUR6QixHQUFHLENBQUNDLFFBQVEsR0FBR0MsdUJBQWdDO0FBR3hDLEtBQUssQ0FBQ0csT0FBTyxVQUFVQyxHQUFHLEVBQUVDLEtBQUssR0FBSyxDQUFDO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFLLFNBQUtSLFFBQVEsQ0FBQyxLQUFLLEVBQUVLLEdBQUc7SUFDekMsS0FBSyxDQUFDSSxHQUFHLEdBQUcsS0FBSyxDQUFDVixnREFBUyxJQUFJQyxRQUFRLENBQUMsS0FBSyxFQUFFSyxHQUFHO0lBQ2xELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRSxJQUFJO0lBQzNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUNiLENBQUM7QUFFTSxLQUFLLENBQUNDLFFBQVEsVUFBVVAsR0FBRyxFQUFFUSxJQUFJLEVBQUVQLEtBQUssR0FBSyxDQUFDO0lBQ25ELEtBQUssQ0FBQ0csR0FBRyxHQUFHLEtBQUssQ0FBQ1YsaURBQVUsSUFBSUMsUUFBUSxDQUFDLEtBQUssRUFBRUssR0FBRyxJQUFJUSxJQUFJLEVBQUUsQ0FBQztRQUM1REMsT0FBTyxFQUFFLENBQUM7WUFDUkMsYUFBYSxFQUFFVCxLQUFLO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDSyxJQUFJLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNFLElBQUk7SUFDM0IsTUFBTSxDQUFDQSxJQUFJO0FBQ2IsQ0FBQztBQUVNLEtBQUssQ0FBQ0ssT0FBTyxVQUFVWCxHQUFHLEVBQUVRLElBQUksRUFBRVAsS0FBSyxHQUFLLENBQUM7SUFDbEQsS0FBSyxDQUFDRyxHQUFHLEdBQUcsS0FBSyxDQUFDVixnREFBUyxJQUFJQyxRQUFRLENBQUMsS0FBSyxFQUFFSyxHQUFHLElBQUlRLElBQUksRUFBRSxDQUFDO1FBQzNEQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxhQUFhLEVBQUVULEtBQUs7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNLLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0UsSUFBSTtJQUMzQixNQUFNLENBQUNBLElBQUk7QUFDYixDQUFDO0FBRU0sS0FBSyxDQUFDTyxTQUFTLFVBQVViLEdBQUcsRUFBRVEsSUFBSSxFQUFFUCxLQUFLLEdBQUssQ0FBQztJQUNwRCxLQUFLLENBQUNHLEdBQUcsR0FBRyxLQUFLLENBQUNWLGtEQUFXLElBQUlDLFFBQVEsQ0FBQyxLQUFLLEVBQUVLLEdBQUcsSUFBSVEsSUFBSSxFQUFFLENBQUM7UUFDN0RDLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLGFBQWEsRUFBRVQsS0FBSztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQ0ssSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRSxJQUFJO0lBQzNCLE1BQU0sQ0FBQ0EsSUFBSTtBQUNiLENBQUM7QUFFTSxLQUFLLENBQUNTLFVBQVUsVUFBVWYsR0FBRyxFQUFFQyxLQUFLLEdBQUssQ0FBQztJQUMvQyxLQUFLLENBQUNHLEdBQUcsR0FBRyxLQUFLLENBQUNWLHNEQUFZLElBQUlDLFFBQVEsQ0FBQyxLQUFLLEVBQUVLLEdBQUcsSUFBSSxDQUFDO1FBQ3hEUyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxhQUFhLEVBQUVULEtBQUs7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLENBQUNLLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0UsSUFBSTtJQUMzQixNQUFNLENBQUNBLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGhwcmFjdGljZS8uL3V0aWxzL2ZldGNoRGF0YS5qcz84NGM0Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidXJsXCIsIGAke0JBU0VfVVJMfS9hcGkvJHt1cmx9YCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vYXBpLyR7dXJsfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXBpLyR7dXJsfWAsIHBvc3QsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXREYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0JBU0VfVVJMfS9hcGkvJHt1cmx9YCwgcG9zdCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goYCR7QkFTRV9VUkx9L2FwaS8ke3VybH1gLCBwb3N0LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtCQVNFX1VSTH0vYXBpLyR7dXJsfWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJnZXQiLCJkYXRhIiwicG9zdERhdGEiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwdXREYXRhIiwicHV0IiwicGF0Y2hEYXRhIiwicGF0Y2giLCJkZWxldGVEYXRhIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/fetchData.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/testing.js"));
module.exports = __webpack_exports__;

})();