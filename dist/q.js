/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());



/***/ }),

/***/ "./src/module.ts":
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Module": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.ts");

var Module = /** @class */ (function () {
    function Module(name, routes) {
        this.name = name;
        this.router = new _router__WEBPACK_IMPORTED_MODULE_0__.Router(this, routes);
    }
    return Module;
}());



/***/ }),

/***/ "./src/route.ts":
/*!**********************!*\
  !*** ./src/route.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Route = /** @class */ (function () {
    function Route(router, id, config) {
        this.router = router;
        this.id = id;
        this.path = config.path;
        this.templateUrl = config.templateUrl;
        this.controller = config.controller ? new config.controller() : new _controller__WEBPACK_IMPORTED_MODULE_0__.Controller();
        this.templateString = config.templateString ? config.templateString : "";
        this.childrenIds = [];
        this.parentId = config.parentId ? config.parentId : undefined;
    }
    Route.getTemplate = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchTemplate, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        fetchTemplate = _a.sent();
                        if (!fetchTemplate.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetchTemplate.text()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw Error();
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, "Template file \"" + url + "\" not found."];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Route.build = function (router, id, config) {
        return __awaiter(this, void 0, void 0, function () {
            var templateString, newroute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Route.getTemplate(config.templateUrl)];
                    case 1:
                        templateString = _a.sent();
                        newroute = new Route(router, id, __assign(__assign({}, config), { templateString: templateString }));
                        router.routes.push(newroute);
                        return [2 /*return*/, newroute];
                }
            });
        });
    };
    Object.defineProperty(Route.prototype, "hasParent", {
        get: function () {
            return this.parentId ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "parent", {
        get: function () {
            return this.router.findRouteById(this.parentId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "stack", {
        get: function () {
            if (this.hasParent)
                return __spreadArray(__spreadArray([], this.parent.stack, true), [this], false);
            return [this];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "template", {
        get: function () {
            if (!this.virtualdom) {
                this.virtualdom = document.createElement("div");
                this.virtualdom.innerHTML = this.templateString;
            }
            return this.virtualdom.innerHTML;
        },
        enumerable: false,
        configurable: true
    });
    return Route;
}());



/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ "./src/route.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Router = /** @class */ (function () {
    function Router(module, routes) {
        var _this = this;
        this.module = module;
        this.routes = [];
        this.buildRoutes(routes, function () {
            _this.init();
        });
    }
    Router.prototype.buildRoutes = function (routes, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, routes_1, route, newroute, _a, _b, child, childroute;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, routes_1 = routes;
                        _c.label = 1;
                    case 1:
                        if (!(_i < routes_1.length)) return [3 /*break*/, 7];
                        route = routes_1[_i];
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, route)];
                    case 2:
                        newroute = _c.sent();
                        if (!route.children) return [3 /*break*/, 6];
                        _a = 0, _b = route.children;
                        _c.label = 3;
                    case 3:
                        if (!(_a < _b.length)) return [3 /*break*/, 6];
                        child = _b[_a];
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, __assign(__assign({}, child), { parentId: newroute.id }))];
                    case 4:
                        childroute = _c.sent();
                        newroute.childrenIds.push(childroute.id);
                        _c.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        console.log(this.routes);
                        callback();
                        return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.findRoute = function (path) {
        return this.routes.find(function (route) { return route.path === path; });
    };
    Router.prototype.findRouteById = function (id) {
        return this.routes[id];
    };
    Router.prototype.navigate = function (path) {
        var route = this.findRoute(path);
        if (route) {
            if (window.location.pathname !== path)
                window.history.pushState({}, "", path);
            this.renderView(route);
            this.currentRoute = route;
        }
        else {
            if (this.findRoute("/404")) {
                this.navigate('/404');
            }
            else {
                document.body.innerHTML = "404 not found.";
            }
        }
    };
    Router.prototype.init = function () {
        this.navigate(window.location.pathname);
    };
    Router.prototype.renderView = function (route) {
        if (!route.hasParent) {
            var root = document.getElementById("root");
            root.innerHTML = route.template;
        }
        console.log(route.stack);
    };
    return Router;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.ts");

// @ts-ignore
window.QModule = _module__WEBPACK_IMPORTED_MODULE_0__.Module;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLGdCQUFnQixDQUFDO2FBQzNDO1NBQ0Q7SUFDRixDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDaEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDbkVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFFbEMsYUFBYTtBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsMkNBQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Fqcy8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Fqcy8uL3NyYy9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vcWpzLy4vc3JjL3JvdXRlLnRzIiwid2VicGFjazovL3Fqcy8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vcWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Fqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcWpzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHsgfSIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IHsgSVJvdXRlIH0gZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGNsYXNzIE1vZHVsZSB7XG5cdG5hbWU6IHN0cmluZztcblx0cm91dGVyOiBSb3V0ZXI7XG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCByb3V0ZXM6IElSb3V0ZVtdKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIodGhpcywgcm91dGVzKTtcblx0fVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlIHtcblx0aWQ6IG51bWJlcjtcblx0cGF0aDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXHRjb250cm9sbGVyOiBDb250cm9sbGVyO1xuXHR0aXRsZT86IHN0cmluZztcblx0Y2hpbGRyZW5JZHM/OiBudW1iZXJbXTtcblx0cGFyZW50SWQ/OiBudW1iZXI7XG5cdHJlZGlyZWN0VG8/OiBzdHJpbmc7XG5cdGFsbG93Pzogc3RyaW5nW107XG5cblx0dGVtcGxhdGVTdHJpbmc6IHN0cmluZztcblx0dmlydHVhbGRvbT86IEhUTUxEaXZFbGVtZW50O1xuXG5cdHJvdXRlcjogUm91dGVyO1xuXG5cdGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBpZDogbnVtYmVyLCBjb25maWc6IElSb3V0ZSkge1xuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuXHRcdHRoaXMudGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmw7XG5cdFx0dGhpcy5jb250cm9sbGVyID0gY29uZmlnLmNvbnRyb2xsZXIgPyBuZXcgY29uZmlnLmNvbnRyb2xsZXIoKSA6IG5ldyBDb250cm9sbGVyKCk7XG5cdFx0dGhpcy50ZW1wbGF0ZVN0cmluZyA9IGNvbmZpZy50ZW1wbGF0ZVN0cmluZyA/IGNvbmZpZy50ZW1wbGF0ZVN0cmluZyA6IFwiXCI7XG5cblx0XHR0aGlzLmNoaWxkcmVuSWRzID0gW107XG5cdFx0dGhpcy5wYXJlbnRJZCA9IGNvbmZpZy5wYXJlbnRJZCA/IGNvbmZpZy5wYXJlbnRJZCA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRUZW1wbGF0ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGZldGNoVGVtcGxhdGUgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRcdFx0aWYgKGZldGNoVGVtcGxhdGUub2spIHJldHVybiBhd2FpdCBmZXRjaFRlbXBsYXRlLnRleHQoKTtcblx0XHRcdHRocm93IEVycm9yKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBgVGVtcGxhdGUgZmlsZSBcIiR7dXJsfVwiIG5vdCBmb3VuZC5gO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBidWlsZChyb3V0ZXI6IFJvdXRlciwgaWQ6IG51bWJlciwgY29uZmlnOiBJUm91dGUpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZVN0cmluZyA9IGF3YWl0IFJvdXRlLmdldFRlbXBsYXRlKGNvbmZpZy50ZW1wbGF0ZVVybCk7XG5cdFx0Y29uc3QgbmV3cm91dGUgPSBuZXcgUm91dGUocm91dGVyLCBpZCwgeyAuLi5jb25maWcsIHRlbXBsYXRlU3RyaW5nIH0pO1xuXHRcdHJvdXRlci5yb3V0ZXMucHVzaChuZXdyb3V0ZSk7XG5cdFx0cmV0dXJuIG5ld3JvdXRlO1xuXHR9XG5cblx0Z2V0IGhhc1BhcmVudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnRJZCA/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdGdldCBwYXJlbnQoKTogUm91dGUge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlci5maW5kUm91dGVCeUlkKHRoaXMucGFyZW50SWQpO1xuXHR9XG5cblx0Z2V0IHN0YWNrKCk6IFJvdXRlW10ge1xuXHRcdGlmICh0aGlzLmhhc1BhcmVudCkgcmV0dXJuIFsuLi50aGlzLnBhcmVudC5zdGFjaywgdGhpc107XG5cdFx0cmV0dXJuIFt0aGlzXTtcblx0fVxuXG5cdGdldCB0ZW1wbGF0ZSgpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy52aXJ0dWFsZG9tKSB7XG5cdFx0XHR0aGlzLnZpcnR1YWxkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dGhpcy52aXJ0dWFsZG9tLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGVTdHJpbmc7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZpcnR1YWxkb20uaW5uZXJIVE1MO1xuXHR9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm91dGUge1xuXHRwYXRoOiBzdHJpbmc7XG5cdHRlbXBsYXRlVXJsOiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRyZWRpcmVjdFRvPzogc3RyaW5nO1xuXHRhbGxvdz86IHN0cmluZ1tdO1xuXHRjaGlsZHJlbj86IElSb3V0ZVtdO1xuXHRwYXJlbnRJZD86IG51bWJlcjtcblx0Y29udHJvbGxlcj86IHR5cGVvZiBDb250cm9sbGVyO1xuXHR0ZW1wbGF0ZVN0cmluZz86IHN0cmluZztcbn0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcbmltcG9ydCB7IElSb3V0ZSwgUm91dGUgfSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcblx0bW9kdWxlOiBNb2R1bGU7XG5cdHJvdXRlczogUm91dGVbXTtcblx0Y3VycmVudFJvdXRlPzogUm91dGU7XG5cblx0Y29uc3RydWN0b3IobW9kdWxlOiBNb2R1bGUsIHJvdXRlczogSVJvdXRlW10pIHtcblx0XHR0aGlzLm1vZHVsZSA9IG1vZHVsZTtcblx0XHR0aGlzLnJvdXRlcyA9IFtdO1xuXHRcdHRoaXMuYnVpbGRSb3V0ZXMocm91dGVzLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIGJ1aWxkUm91dGVzKHJvdXRlczogSVJvdXRlW10sIGNhbGxiYWNrOiBhbnkpIHtcblx0XHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuXHRcdFx0bGV0IG5ld3JvdXRlID0gYXdhaXQgUm91dGUuYnVpbGQodGhpcywgdGhpcy5yb3V0ZXMubGVuZ3RoLCByb3V0ZSk7XG5cdFx0XHRpZiAocm91dGUuY2hpbGRyZW4pIHtcblx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiByb3V0ZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGxldCBjaGlsZHJvdXRlID0gYXdhaXQgUm91dGUuYnVpbGQodGhpcywgdGhpcy5yb3V0ZXMubGVuZ3RoLCB7XG5cdFx0XHRcdFx0XHQuLi5jaGlsZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBuZXdyb3V0ZS5pZFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5ld3JvdXRlLmNoaWxkcmVuSWRzLnB1c2goY2hpbGRyb3V0ZS5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5sb2codGhpcy5yb3V0ZXMpO1xuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuXHRmaW5kUm91dGUocGF0aDogc3RyaW5nKTogUm91dGUge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09IHBhdGgpO1xuXHR9XG5cblx0ZmluZFJvdXRlQnlJZChpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVzW2lkXTtcblx0fVxuXG5cdG5hdmlnYXRlKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHJvdXRlID0gdGhpcy5maW5kUm91dGUocGF0aCk7XG5cdFx0aWYgKHJvdXRlKSB7XG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwYXRoKSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHBhdGgpO1xuXHRcdFx0dGhpcy5yZW5kZXJWaWV3KHJvdXRlKTtcblx0XHRcdHRoaXMuY3VycmVudFJvdXRlID0gcm91dGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLmZpbmRSb3V0ZShcIi80MDRcIikpIHtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZSgnLzQwNCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIjQwNCBub3QgZm91bmQuXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLm5hdmlnYXRlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG5cdH1cblxuXHRyZW5kZXJWaWV3KHJvdXRlOiBSb3V0ZSkge1xuXHRcdGlmICghcm91dGUuaGFzUGFyZW50KSB7XG5cdFx0XHRsZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblx0XHRcdHJvb3QuaW5uZXJIVE1MID0gcm91dGUudGVtcGxhdGU7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHJvdXRlLnN0YWNrKTtcblx0fVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSBcIi4vbW9kdWxlXCI7XG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy5RTW9kdWxlID0gTW9kdWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==