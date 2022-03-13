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
exports.id = "pages/api/recipe/serves";
exports.ids = ["pages/api/recipe/serves"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./model/recipe/serves.js":
/*!********************************!*\
  !*** ./model/recipe/serves.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema  } = mongoose;\nmongoose.Promise = global.Promise;\nconst recipeServesSchema = new Schema({\n    recipeId: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: \"Recipe\",\n        required: true\n    },\n    numberOfServing: {\n        type: Number,\n        required: true\n    },\n    timeForPrepration: [\n        {\n            // type: { type: String },\n            time: Number,\n            title: String\n        }, \n    ],\n    ingredients: [\n        {\n            quantity: Number,\n            unit: String,\n            description: String\n        }, \n    ],\n    specialEquipments: {\n        type: String\n    }\n});\nmodule.exports = mongoose.models.RecipeServes || mongoose.model(\"RecipeServes\", recipeServesSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9yZWNpcGUvc2VydmVzLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxLQUFLLENBQUNBLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVTtBQUVuQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRixRQUFRO0FBQzNCQSxRQUFRLENBQUNHLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFPO0FBRWpDLEtBQUssQ0FBQ0Usa0JBQWtCLEdBQUcsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztJQUNyQ0ksUUFBUSxFQUFFLENBQUM7UUFDVEMsSUFBSSxFQUFFUCxRQUFRLENBQUNFLE1BQU0sQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxHQUFHLEVBQUUsQ0FBUTtRQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0RDLGVBQWUsRUFBRSxDQUFDO1FBQ2hCTCxJQUFJLEVBQUVNLE1BQU07UUFDWkYsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztJQUNERyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2xCLENBQUM7WUFDQyxFQUEwQjtZQUMxQkMsSUFBSSxFQUFFRixNQUFNO1lBQ1pHLEtBQUssRUFBRUMsTUFBTTtRQUNmLENBQUM7SUFDSCxDQUFDO0lBQ0RDLFdBQVcsRUFBRSxDQUFDO1FBQ1osQ0FBQztZQUNDQyxRQUFRLEVBQUVOLE1BQU07WUFDaEJPLElBQUksRUFBRUgsTUFBTTtZQUNaSSxXQUFXLEVBQUVKLE1BQU07UUFDckIsQ0FBQztJQUNILENBQUM7SUFDREssaUJBQWlCLEVBQUUsQ0FBQztRQUNsQmYsSUFBSSxFQUFFVSxNQUFNO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFFRE0sTUFBTSxDQUFDQyxPQUFPLEdBQ1p4QixRQUFRLENBQUN5QixNQUFNLENBQUNDLFlBQVksSUFDNUIxQixRQUFRLENBQUMyQixLQUFLLENBQUMsQ0FBYyxlQUFFdEIsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGhwcmFjdGljZS8uL21vZGVsL3JlY2lwZS9zZXJ2ZXMuanM/MWQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5jb25zdCByZWNpcGVTZXJ2ZXNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcmVjaXBlSWQ6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiBcIlJlY2lwZVwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBudW1iZXJPZlNlcnZpbmc6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRpbWVGb3JQcmVwcmF0aW9uOiBbXG4gICAge1xuICAgICAgLy8gdHlwZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgIHRpbWU6IE51bWJlcixcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgfSxcbiAgXSxcbiAgaW5ncmVkaWVudHM6IFtcbiAgICB7XG4gICAgICBxdWFudGl0eTogTnVtYmVyLFxuICAgICAgdW5pdDogU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB9LFxuICBdLFxuICBzcGVjaWFsRXF1aXBtZW50czoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIG1vbmdvb3NlLm1vZGVscy5SZWNpcGVTZXJ2ZXMgfHxcbiAgbW9uZ29vc2UubW9kZWwoXCJSZWNpcGVTZXJ2ZXNcIiwgcmVjaXBlU2VydmVzU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJQcm9taXNlIiwiZ2xvYmFsIiwicmVjaXBlU2VydmVzU2NoZW1hIiwicmVjaXBlSWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwibnVtYmVyT2ZTZXJ2aW5nIiwiTnVtYmVyIiwidGltZUZvclByZXByYXRpb24iLCJ0aW1lIiwidGl0bGUiLCJTdHJpbmciLCJpbmdyZWRpZW50cyIsInF1YW50aXR5IiwidW5pdCIsImRlc2NyaXB0aW9uIiwic3BlY2lhbEVxdWlwbWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUmVjaXBlU2VydmVzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/recipe/serves.js\n");

/***/ }),

/***/ "(api)/./pages/api/recipe/serves/index.js":
/*!******************************************!*\
  !*** ./pages/api/recipe/serves/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _model_recipe_serves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/recipe/serves */ \"(api)/./model/recipe/serves.js\");\n/* harmony import */ var _model_recipe_serves__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_recipe_serves__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_sessionProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/sessionProvider */ \"(api)/./utils/sessionProvider.js\");\n/* harmony import */ var _utils_error_errorAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/error/errorAPI */ \"(api)/./utils/error/errorAPI.js\");\n\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            await createServe(req, res);\n            break;\n    }\n});\nconst createServe = async (req, res)=>{\n    try {\n        await (0,_utils_sessionProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req);\n        // console.log(req.body);\n        const newServe = new (_model_recipe_serves__WEBPACK_IMPORTED_MODULE_1___default())({\n            ...req.body\n        });\n        await newServe.save();\n        res.json({\n            msg: \"Success! created a new serve.\",\n            newServe\n        });\n    } catch (err) {\n        (0,_utils_error_errorAPI__WEBPACK_IMPORTED_MODULE_3__.error)(err, res);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjaXBlL3NlcnZlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUNLO0FBQ1A7QUFFeERBLDREQUFTO0FBRVQsaUVBQU0sT0FBZ0JJLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsTUFBTSxDQUFFRCxHQUFHLENBQUNFLE1BQU07UUFDaEIsSUFBSSxDQUFDLENBQU07WUFDVCxLQUFLLENBQUNDLFdBQVcsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHO1lBQzFCLEtBQUs7O0FBRVgsQ0FBQztBQUVELEtBQUssQ0FBQ0UsV0FBVyxVQUFVSCxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDSCxrRUFBZSxDQUFDRSxHQUFHO1FBQ3pCLEVBQXlCO1FBRXpCLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLEdBQUcsQ0FBQ1AsNkRBQVksQ0FBQyxDQUFDO2VBQzlCRyxHQUFHLENBQUNLLElBQUk7UUFDYixDQUFDO1FBQ0QsS0FBSyxDQUFDRCxRQUFRLENBQUNFLElBQUk7UUFDbkJMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQUM7WUFDUkMsR0FBRyxFQUFFLENBQStCO1lBQ3BDSixRQUFRO1FBQ1YsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVLLEdBQUcsRUFBRSxDQUFDO1FBQ2JWLDREQUFLLENBQUNVLEdBQUcsRUFBRVIsR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRocHJhY3RpY2UvLi9wYWdlcy9hcGkvcmVjaXBlL3NlcnZlcy9pbmRleC5qcz8zMzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQlwiO1xuaW1wb3J0IFJlY2lwZVNlcnZlcyBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWwvcmVjaXBlL3NlcnZlc1wiO1xuaW1wb3J0IHNlc3Npb25Qcm92aWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvc2Vzc2lvblByb3ZpZGVyXCI7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9lcnJvci9lcnJvckFQSVwiO1xuXG5kYkNvbm5lY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBhd2FpdCBjcmVhdGVTZXJ2ZShyZXEsIHJlcyk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlU2VydmUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZXNzaW9uUHJvdmlkZXIocmVxKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgICBjb25zdCBuZXdTZXJ2ZSA9IG5ldyBSZWNpcGVTZXJ2ZXMoe1xuICAgICAgLi4ucmVxLmJvZHksXG4gICAgfSk7XG4gICAgYXdhaXQgbmV3U2VydmUuc2F2ZSgpO1xuICAgIHJlcy5qc29uKHtcbiAgICAgIG1zZzogXCJTdWNjZXNzISBjcmVhdGVkIGEgbmV3IHNlcnZlLlwiLFxuICAgICAgbmV3U2VydmUsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVycm9yKGVyciwgcmVzKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJSZWNpcGVTZXJ2ZXMiLCJzZXNzaW9uUHJvdmlkZXIiLCJlcnJvciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNyZWF0ZVNlcnZlIiwibmV3U2VydmUiLCJib2R5Iiwic2F2ZSIsImpzb24iLCJtc2ciLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/recipe/serves/index.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n//###################///////////\n\nconst connection = {\n    isConnected: false\n}; /* creating connection object*/ \nlet uri = process.env.MONGODB_URI_CLOUD;\nif (!uri) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nasync function dbConnect() {\n    let db;\n    if (!connection.isConnected) {\n        db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"-----db isConnected-----\", connection.isConnected);\n    }\n    return db; // IMPORTANT! -- return an instance of the db\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBZ0M7QUFDRDtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQUNDLFdBQVcsRUFBRSxLQUFLO0FBQUMsQ0FBQyxDQUFFLENBQStCO0FBRTFFLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ3ZDLEVBQUUsR0FBR0gsR0FBRyxFQUFFLENBQUM7SUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDSSxLQUFLLENBQ2IsQ0FBc0U7QUFFMUUsQ0FBQztBQUVjLGVBQWVDLFNBQVMsR0FBRyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQ0MsRUFBRTtJQUVOLEVBQUUsR0FBR1IsVUFBVSxDQUFDQyxXQUFXLEVBQUUsQ0FBQztRQUM1Qk8sRUFBRSxHQUFHLEtBQUssQ0FBQ1QsdURBQWdCLENBQUNHLEdBQUcsRUFBRSxDQUFDO1lBQ2hDUSxlQUFlLEVBQUUsSUFBSTtZQUVyQkMsa0JBQWtCLEVBQUUsSUFBSTtRQUMxQixDQUFDO1FBQ0RYLFVBQVUsQ0FBQ0MsV0FBVyxHQUFHTyxFQUFFLENBQUNJLFdBQVcsQ0FBQyxDQUFDLEVBQUVDLFVBQVU7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTBCLDJCQUFFZixVQUFVLENBQUNDLFdBQVc7SUFDaEUsQ0FBQztJQUNELE1BQU0sQ0FBQ08sRUFBRSxDQUFFLENBQTZDO0FBQzFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aHByYWN0aWNlLy4vdXRpbHMvY29ubmVjdERCLmpzP2M2MTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8jIyMjIyMjIyMjIyMjIyMjIyMjLy8vLy8vLy8vLy9cbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdGlvbiA9IHsgaXNDb25uZWN0ZWQ6IGZhbHNlIH07IC8qIGNyZWF0aW5nIGNvbm5lY3Rpb24gb2JqZWN0Ki9cblxubGV0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJX0NMT1VEO1xuaWYgKCF1cmkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGxldCBkYjtcblxuICBpZiAoIWNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG5cbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tZGIgaXNDb25uZWN0ZWQtLS0tLVwiLCBjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcbiAgfVxuICByZXR1cm4gZGI7IC8vIElNUE9SVEFOVCEgLS0gcmV0dXJuIGFuIGluc3RhbmNlIG9mIHRoZSBkYlxufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJX0NMT1VEIiwiRXJyb3IiLCJkYkNvbm5lY3QiLCJkYiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ }),

/***/ "(api)/./utils/error/errorAPI.js":
/*!*********************************!*\
  !*** ./utils/error/errorAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"error\": () => (/* binding */ error)\n/* harmony export */ });\nconst error = (err, res)=>{\n    if (err && err.code === 11000) {\n        return res.json({\n            err: \"Item already exists\"\n        });\n    }\n    return res.status(500).json({\n        err: err.message\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9lcnJvci9lcnJvckFQSS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxLQUFLLElBQUlDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsRUFBRSxFQUFFRCxHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUFDSCxHQUFHLEVBQUUsQ0FBcUI7UUFBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxNQUFNLENBQUNDLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7UUFBQ0gsR0FBRyxFQUFFQSxHQUFHLENBQUNLLE9BQU87SUFBQyxDQUFDO0FBQ2xELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aHByYWN0aWNlLy4vdXRpbHMvZXJyb3IvZXJyb3JBUEkuanM/NGYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXJyb3IgPSAoZXJyLCByZXMpID0+IHtcbiAgaWYgKGVyciAmJiBlcnIuY29kZSA9PT0gMTEwMDApIHtcbiAgICByZXR1cm4gcmVzLmpzb24oeyBlcnI6IFwiSXRlbSBhbHJlYWR5IGV4aXN0c1wiIH0pO1xuICB9XG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XG59O1xuIl0sIm5hbWVzIjpbImVycm9yIiwiZXJyIiwicmVzIiwiY29kZSIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/error/errorAPI.js\n");

/***/ }),

/***/ "(api)/./utils/sessionProvider.js":
/*!**********************************!*\
  !*** ./utils/sessionProvider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sessionProvider = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    // console.log(\"session\", session.accessToken);\n    if (!session.accessToken) {\n        return res.status(401).json({\n            error: \"Unauthenticated user\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9zZXNzaW9uUHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLEtBQUssQ0FBQ0MsZUFBZSxVQUFVQyxHQUFHLEdBQUssQ0FBQztJQUN0QyxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNILDJEQUFVLENBQUMsQ0FBQztRQUFDRSxHQUFHO0lBQUMsQ0FBQztJQUN4QyxFQUErQztJQUMvQyxFQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsV0FBVyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUFzQjtRQUFDLENBQUM7SUFDL0QsQ0FBQztBQUNILENBQUM7QUFDRCxpRUFBZVAsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGhwcmFjdGljZS8uL3V0aWxzL3Nlc3Npb25Qcm92aWRlci5qcz9hNGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmNvbnN0IHNlc3Npb25Qcm92aWRlciA9IGFzeW5jIChyZXEpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIC8vIGNvbnNvbGUubG9nKFwic2Vzc2lvblwiLCBzZXNzaW9uLmFjY2Vzc1Rva2VuKTtcbiAgaWYgKCFzZXNzaW9uLmFjY2Vzc1Rva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwiVW5hdXRoZW50aWNhdGVkIHVzZXJcIiB9KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwic2Vzc2lvblByb3ZpZGVyIiwicmVxIiwic2Vzc2lvbiIsImFjY2Vzc1Rva2VuIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/sessionProvider.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recipe/serves/index.js"));
module.exports = __webpack_exports__;

})();