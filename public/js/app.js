/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/ec2-user/environment/blog/resources/js/app.js: Identifier 'app' has already been declared. (39:6)\n\n\u001b[0m \u001b[90m 37 |\u001b[39m \u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 |\u001b[39m \u001b[36mconst\u001b[39m app \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mVue\u001b[39m({\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m     el\u001b[33m:\u001b[39m \u001b[32m'#app'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 |\u001b[39m\u001b[0m\n    at Parser._raise (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:476:17)\n    at Parser.raiseWithData (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:469:17)\n    at Parser.raise (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:430:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:1720:12)\n    at ScopeHandler.declareName (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:1686:12)\n    at Parser.checkLVal (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:11626:24)\n    at Parser.parseVarId (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14852:10)\n    at Parser.parseVar (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14823:12)\n    at Parser.parseVarStatement (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14630:10)\n    at Parser.parseStatementContent (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14188:21)\n    at Parser.parseStatement (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14113:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14739:25)\n    at Parser.parseBlockBody (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14730:10)\n    at Parser.parseProgram (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14032:10)\n    at Parser.parseTopLevel (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:14019:25)\n    at Parser.parse (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:15940:10)\n    at parse (/home/ec2-user/environment/blog/node_modules/@babel/parser/lib/index.js:15992:38)\n    at parser (/home/ec2-user/environment/blog/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/ec2-user/environment/blog/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/ec2-user/environment/blog/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/ec2-user/environment/blog/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/home/ec2-user/environment/blog/node_modules/gensync/index.js:261:32)\n    at /home/ec2-user/environment/blog/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/ec2-user/environment/blog/node_modules/gensync/index.js:223:11)\n    at /home/ec2-user/environment/blog/node_modules/gensync/index.js:189:28\n    at /home/ec2-user/environment/blog/node_modules/@babel/core/lib/gensync-utils/async.js:74:7\n    at /home/ec2-user/environment/blog/node_modules/gensync/index.js:113:33\n    at step (/home/ec2-user/environment/blog/node_modules/gensync/index.js:287:14)\n    at /home/ec2-user/environment/blog/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/ec2-user/environment/blog/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ec2-user/environment/blog/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/ec2-user/environment/blog/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });