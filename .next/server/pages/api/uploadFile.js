module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/uploadFile.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/uploadFile.tsx":
/*!**********************************!*\
  !*** ./pages/api/uploadFile.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  Octokit\n} = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n\nconst {\n  Base64\n} = __webpack_require__(/*! js-base64 */ \"js-base64\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst octokit = new Octokit({\n  auth: process.env.GITHUB_ACCESS_TOKEN\n}); //to upload file by providing just hash as we are naming the file with hash\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    //set as header and send whatever the hash u r sending\n    const filePath = req.body.filepath;\n    const hash = req.body.hash;\n    const content = fs.readFileSync(filePath, \"utf-8\");\n    const contentEncoded = Base64.encode(content);\n    const {\n      data\n    } = await octokit.repos.createOrUpdateFileContents({\n      // replace the owner and email with your own details\n      owner: \"manjularachana\",\n      repo: \"githubApiUsageToUploadDownload\",\n      path: hash,\n      message: \"feat: Added OUTPUT.md programatically\",\n      content: contentEncoded\n    });\n    res.status(200).json({\n      data\n    });\n  } catch (err) {\n    console.error(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkRmlsZS50c3g/MjZkNSJdLCJuYW1lcyI6WyJPY3Rva2l0IiwicmVxdWlyZSIsIkJhc2U2NCIsImZzIiwiY29uZmlnIiwib2N0b2tpdCIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0FDQ0VTU19UT0tFTiIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiYm9keSIsImZpbGVwYXRoIiwiaGFzaCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJjb250ZW50RW5jb2RlZCIsImVuY29kZSIsImRhdGEiLCJyZXBvcyIsImNyZWF0ZU9yVXBkYXRlRmlsZUNvbnRlbnRzIiwib3duZXIiLCJyZXBvIiwicGF0aCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFjQyxtQkFBTyxDQUFDLG9DQUFELENBQTNCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFhRCxtQkFBTyxDQUFDLDRCQUFELENBQTFCOztBQUNBLE1BQU1FLEVBQUUsR0FBR0YsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUdBQSxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JHLE1BQWxCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxJQUFJTCxPQUFKLENBQVk7QUFDMUJNLE1BQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRFEsQ0FBWixDQUFoQixDLENBSUE7O0FBQ2Usc0VBQU9DLEdBQVAsRUFBMkJDLEdBQTNCLEtBQWtEO0FBQzdELE1BQUk7QUFDQTtBQUNBLFVBQU1DLFFBQVEsR0FBSUYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLFFBQTNCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNHLElBQUosQ0FBU0UsSUFBdEI7QUFHQSxVQUFNQyxPQUFPLEdBQUdiLEVBQUUsQ0FBQ2MsWUFBSCxDQUFnQkwsUUFBaEIsRUFBMEIsT0FBMUIsQ0FBaEI7QUFDQSxVQUFNTSxjQUFjLEdBQUdoQixNQUFNLENBQUNpQixNQUFQLENBQWNILE9BQWQsQ0FBdkI7QUFFQSxVQUFNO0FBQUVJO0FBQUYsUUFBVyxNQUFNZixPQUFPLENBQUNnQixLQUFSLENBQWNDLDBCQUFkLENBQXlDO0FBQzlEO0FBQ0FDLFdBQUssRUFBRSxnQkFGdUQ7QUFHOURDLFVBQUksRUFBRSxnQ0FId0Q7QUFJOURDLFVBQUksRUFBRVYsSUFKd0Q7QUFLOURXLGFBQU8sRUFBRSx1Q0FMcUQ7QUFNOURWLGFBQU8sRUFBRUU7QUFOcUQsS0FBekMsQ0FBdkI7QUFRSlAsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNSO0FBQUQsS0FBckI7QUFDRyxHQWxCSCxDQWtCSSxPQUFPUyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRDtBQUNOLENBdEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VwbG9hZEZpbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmNvbnN0IHsgT2N0b2tpdCB9ID0gcmVxdWlyZShcIkBvY3Rva2l0L3Jlc3RcIilcbmNvbnN0IHsgQmFzZTY0IH0gPSByZXF1aXJlKFwianMtYmFzZTY0XCIpXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKVxuXG5cbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKClcblxuY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcbiAgYXV0aDogcHJvY2Vzcy5lbnYuR0lUSFVCX0FDQ0VTU19UT0tFTixcbn0pXG5cbi8vdG8gdXBsb2FkIGZpbGUgYnkgcHJvdmlkaW5nIGp1c3QgaGFzaCBhcyB3ZSBhcmUgbmFtaW5nIHRoZSBmaWxlIHdpdGggaGFzaFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZSk9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy9zZXQgYXMgaGVhZGVyIGFuZCBzZW5kIHdoYXRldmVyIHRoZSBoYXNoIHUgciBzZW5kaW5nXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoICA9IHJlcS5ib2R5LmZpbGVwYXRoIDtcbiAgICAgICAgY29uc3QgaGFzaCA9IHJlcS5ib2R5Lmhhc2g7XG5cblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbmNvZGVkID0gQmFzZTY0LmVuY29kZShjb250ZW50KVxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgb2N0b2tpdC5yZXBvcy5jcmVhdGVPclVwZGF0ZUZpbGVDb250ZW50cyh7XG4gICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb3duZXIgYW5kIGVtYWlsIHdpdGggeW91ciBvd24gZGV0YWlsc1xuICAgICAgICAgIG93bmVyOiBcIm1hbmp1bGFyYWNoYW5hXCIsXG4gICAgICAgICAgcmVwbzogXCJnaXRodWJBcGlVc2FnZVRvVXBsb2FkRG93bmxvYWRcIixcbiAgICAgICAgICBwYXRoOiBoYXNoLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiZmVhdDogQWRkZWQgT1VUUFVULm1kIHByb2dyYW1hdGljYWxseVwiLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRFbmNvZGVkLFxuICAgICAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtkYXRhfSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/uploadFile.tsx\n");

/***/ }),

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@octokit/rest\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAb2N0b2tpdC9yZXN0XCI/ZDEzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAb2N0b2tpdC9yZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG9jdG9raXQvcmVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@octokit/rest\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-base64\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1iYXNlNjRcIj8yYTg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWJhc2U2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWJhc2U2NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-base64\n");

/***/ })

/******/ });