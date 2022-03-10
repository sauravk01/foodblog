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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_connectDBMongoDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/connectDBMongoDB */ \"(api)/./utils/connectDBMongoDB.js\");\n//simple auth from google\n\n\n\n//mongodb file\n\n// console.log(process.env.AUTH_SECRET);\n// console.log(process.env.NEXTAUTH_URL);\n// console.log(process.env.GOOGLE_CLIENT_ID);\n// console.log(process.env.GOOGLE_CLIENT_SECRET);\n// console.log(process.env.MONGODB_URI_CLOUD);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    jwt: {\n        secret: process.env.AUTH_SECRET\n    },\n    //mongodb\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_utils_connectDBMongoDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    database: process.env.MONGODB_URI_CLOUD,\n    callbacks: {\n        async jwt ({ token , account  }) {\n            if (account) {\n                // console.log(account);\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            session.id = token.sub;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBeUI7QUFDTztBQUN1QjtBQUNJO0FBQzNELEVBQWM7QUFDNkM7QUFDM0QsRUFBd0M7QUFDeEMsRUFBeUM7QUFDekMsRUFBNkM7QUFDN0MsRUFBaUQ7QUFDakQsRUFBOEM7QUFDOUMsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUN2QkksR0FBRyxFQUFFLENBQUM7UUFBQ0MsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztJQUFDLENBQUM7SUFDeEMsRUFBUztJQUNUQyxPQUFPLEVBQUVQLDBFQUFjLENBQUNDLCtEQUFhO0lBQ3JDTyxTQUFTLEVBQUUsQ0FBQztRQUNWVCxpRUFBYyxDQUFDLENBQUM7WUFDZFUsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxvQkFBb0I7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFDREMsT0FBTyxFQUFFLENBQUM7UUFBQ0MsUUFBUSxFQUFFLENBQUs7SUFBQyxDQUFDO0lBQzVCQyxRQUFRLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxpQkFBaUI7SUFDdkNDLFNBQVMsRUFBRSxDQUFDO2NBQ0pmLEdBQUcsRUFBQyxDQUFDLENBQUNnQixLQUFLLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUM3QixFQUFFLEVBQUVBLE9BQU8sRUFBRSxDQUFDO2dCQUNaLEVBQXdCO2dCQUN4QkQsS0FBSyxDQUFDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsWUFBWTtZQUMxQyxDQUFDO1lBRUQsTUFBTSxDQUFDSCxLQUFLO1FBQ2QsQ0FBQztjQUNLTCxPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVLLEtBQUssR0FBRUksSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLEVBQXVFO1lBQ3ZFVCxPQUFPLENBQUNPLFdBQVcsR0FBR0YsS0FBSyxDQUFDRSxXQUFXO1lBQ3ZDUCxPQUFPLENBQUNVLEVBQUUsR0FBR0wsS0FBSyxDQUFDTSxHQUFHO1lBQ3RCLE1BQU0sQ0FBQ1gsT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGhwcmFjdGljZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3NpbXBsZSBhdXRoIGZyb20gZ29vZ2xlXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbi8vbW9uZ29kYiBmaWxlXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCTW9uZ29EQlwiO1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQpO1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKTtcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQpO1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQpO1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTU9OR09EQl9VUklfQ0xPVUQpO1xuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBqd3Q6IHsgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCB9LFxuICAvL21vbmdvZGJcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiB9LFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklfQ0xPVUQsXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50IH0pIHtcbiAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY291bnQpO1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzX3Rva2VuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbjtcbiAgICAgIHNlc3Npb24uaWQgPSB0b2tlbi5zdWI7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImp3dCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX1NFQ1JFVCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsImRhdGFiYXNlIiwiTU9OR09EQl9VUklfQ0xPVUQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInVzZXIiLCJpZCIsInN1YiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/connectDBMongoDB.js":
/*!***********************************!*\
  !*** ./utils/connectDBMongoDB.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nconst uri = process.env.MONGODB_URI_CLOUD;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI_CLOUD) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REJNb25nb0RCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWtHO0FBQzdEO0FBRXJDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ3pDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZUFBZSxFQUFFLElBQUk7QUFDdkIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsTUFBTTtBQUNWLEdBQUcsQ0FBQ0MsYUFBYTtBQUVqQixFQUFFLEdBQUdQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQyxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUF5QztBQUMzRCxDQUFDO0FBRUQsRUFBRSxFQWhCRixJQWdCMEMsRUFBRSxDQUFDO0lBQzNDLEVBQStEO0lBQy9ELEVBQTZFO0lBQzdFLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hDSixNQUFNLEdBQUcsR0FBRyxDQUFDUixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU87UUFDckNNLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTztJQUM3QyxDQUFDO0lBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBbUI7QUFDNUMsQ0FBQyxNQUFNLEVBSU47QUFFRCxFQUFpRTtBQUNqRSxFQUE4RDtBQUM5RCxpRUFBZUgsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGhwcmFjdGljZS8uL3V0aWxzL2Nvbm5lY3REQk1vbmdvREIuanM/MzQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSV9DTE9VRDtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxufTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJX0NMT1VEKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUklfQ0xPVUQiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectDBMongoDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();