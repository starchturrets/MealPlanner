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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*  \nOn clicking the Add Meal button:\n\t1. Grab the value of each input and assign to a variable - DONE!\n\t2. Use those input values to create a new meal object\n\t\ta. Do both inputs have a value? - DONE!\n\t\t\ti. Yes: proceed with adding the meal\n\t\t\tii. No: alert user and bail\n\t\tb. Does the item name already exist?\n\t\t\ti. Yes: do not validate, prompt user to change name\n\t\t\tii. No: then create the meal obj\n\t3. Populate the mealList array with the new meal object - DONE!\n*/\n\nvar mealList = [];\n\n// Meal object proto\nconst Meal = function(meal_name, meal_type) {\n\tthis.meal_name = meal_name,\n\tthis.meal_type = meal_type;\n}\n\ndocument.addEventListener('click', function (event) {\n\n\t// !!! querySelectorAll returned undefined - not sure why but would like to find out\n\tvar meal_name = document.querySelector('input[name=\"meal_name\"]').value,\n\t\tmeal_type = document.querySelector('input[name=\"meal_type\"]').value;\n\n\tif (event.target.matches('#AddMealBtn')) {\n\t\t// console.log(\"Meal Name: \" + meal_name);\n\t\t// console.log(\"Meal Type: \" + meal_type);\n\n\t\t// If the name & type both have values then proceed\n\t\tif (!meal_type == \"\" && !meal_name == \"\") {\n\n\t\t\tvar listLength = mealList.length,\n\t\t\t\tnewMeal = new  Meal(meal_name, meal_type);\n\n\t\t\t// Add meal to array\n\t\t\tmealList.push(newMeal);\n\t\t}\n\t\t// alert the user inputs cannot be empty and bail\n\t\telse { \n\t\t\twindow.alert(\"Inputs cannot be blank\");\n\t\t\treturn;\n\t\t}\n\t}\n\t// If it doesn't match do nothing\n\t// I don't think I need this but will leave it for now\n\telse { return; }\n\n\t// Kill the default behavior\n\tevent.preventDefault();\n\n\t// Log the clicked element in the console\n\tconsole.log(event.target);\n\n}, false);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });