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
                        return [4 /*yield*/, _route__WEBPACK_IMPORTED_MODULE_0__.Route.build(this, this.routes.length, __assign(__assign({}, child), { path: newroute.path + child.path, parentId: newroute.id }))];
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
            this.currentRoute = route;
            this.renderView(route);
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
            if (!root) {
                root = document.createElement("div");
                root.id = "root";
                document.body.appendChild(root);
            }
            this.setInnerHTML(root, route.template);
            root.setAttribute("p-route", route.id.toString());
        }
        else {
            this.renderView(route.parent);
            var parentElement = document.querySelector("[p-route=\"" + route.parentId + "\"]");
            if (parentElement) {
                var slot = parentElement.querySelector("[slot]");
                if (!slot) {
                    slot = document.createElement("div");
                    slot.setAttribute("slot", "");
                    parentElement.appendChild(slot);
                }
                this.setInnerHTML(slot, route.template);
                slot.setAttribute("p-route", route.id.toString());
            }
        }
    };
    Router.prototype.setInnerHTML = function (container, content) {
        container.innerHTML = content;
        this.initElements();
    };
    Router.prototype.initElements = function () {
        var _this = this;
        // Initialize anchor tags
        document.querySelectorAll("a").forEach(function (a) {
            // Add/remove "active" class
            a.classList.remove("active");
            console.log(a.href);
            if (a.href === window.location.href)
                a.classList.add("active");
            // Handle click event
            a.addEventListener("click", function (e) {
                e.preventDefault();
                // Same origin
                if (a.host === window.location.host) {
                    // Hash
                    if (a.pathname[0] === "#") {
                        console.log("hash routing");
                    }
                    // Internal routing
                    else {
                        _this.navigate(a.pathname);
                    }
                }
                // External origin
                else {
                    window.open(a.href, "_blank").focus();
                }
            });
        });
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
window.Q = _module__WEBPACK_IMPORTED_MODULE_0__.Module;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDNUI7b0JBQ0QsbUJBQW1CO3lCQUNkO3dCQUNKLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUMxQjtpQkFDRDtnQkFDRCxrQkFBa0I7cUJBQ2I7b0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN0QztZQUVGLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUdGLGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQzdIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBRWxDLGFBQWE7QUFDYixNQUFNLENBQUMsQ0FBQyxHQUFHLDJDQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW1wYW0vLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wYW1wYW0vLi9zcmMvbW9kdWxlLnRzIiwid2VicGFjazovL3BhbXBhbS8uL3NyYy9yb3V0ZS50cyIsIndlYnBhY2s6Ly9wYW1wYW0vLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3BhbXBhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYW1wYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhbXBhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhbXBhbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhbXBhbS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7IH0iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuL3JvdXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGUge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHJvdXRlcjogUm91dGVyO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcm91dGVzOiBJUm91dGVbXSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKHRoaXMsIHJvdXRlcyk7XG5cdH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZSB7XG5cdGlkOiBudW1iZXI7XG5cdHBhdGg6IHN0cmluZztcblx0dGVtcGxhdGVVcmw6IHN0cmluZztcblx0Y29udHJvbGxlcjogQ29udHJvbGxlcjtcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGNoaWxkcmVuSWRzPzogbnVtYmVyW107XG5cdHBhcmVudElkPzogbnVtYmVyO1xuXHRyZWRpcmVjdFRvPzogc3RyaW5nO1xuXHRhbGxvdz86IHN0cmluZ1tdO1xuXG5cdHRlbXBsYXRlU3RyaW5nOiBzdHJpbmc7XG5cdHZpcnR1YWxkb20/OiBIVE1MRGl2RWxlbWVudDtcblxuXHRyb3V0ZXI6IFJvdXRlcjtcblxuXHRjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgaWQ6IG51bWJlciwgY29uZmlnOiBJUm91dGUpIHtcblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblxuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnBhdGggPSBjb25maWcucGF0aDtcblx0XHR0aGlzLnRlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsO1xuXHRcdHRoaXMuY29udHJvbGxlciA9IGNvbmZpZy5jb250cm9sbGVyID8gbmV3IGNvbmZpZy5jb250cm9sbGVyKCkgOiBuZXcgQ29udHJvbGxlcigpO1xuXHRcdHRoaXMudGVtcGxhdGVTdHJpbmcgPSBjb25maWcudGVtcGxhdGVTdHJpbmcgPyBjb25maWcudGVtcGxhdGVTdHJpbmcgOiBcIlwiO1xuXG5cdFx0dGhpcy5jaGlsZHJlbklkcyA9IFtdO1xuXHRcdHRoaXMucGFyZW50SWQgPSBjb25maWcucGFyZW50SWQgPyBjb25maWcucGFyZW50SWQgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0VGVtcGxhdGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBmZXRjaFRlbXBsYXRlID0gYXdhaXQgZmV0Y2godXJsKTtcblx0XHRcdGlmIChmZXRjaFRlbXBsYXRlLm9rKSByZXR1cm4gYXdhaXQgZmV0Y2hUZW1wbGF0ZS50ZXh0KCk7XG5cdFx0XHR0aHJvdyBFcnJvcigpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gYFRlbXBsYXRlIGZpbGUgXCIke3VybH1cIiBub3QgZm91bmQuYDtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgYnVpbGQocm91dGVyOiBSb3V0ZXIsIGlkOiBudW1iZXIsIGNvbmZpZzogSVJvdXRlKSB7XG5cdFx0Y29uc3QgdGVtcGxhdGVTdHJpbmcgPSBhd2FpdCBSb3V0ZS5nZXRUZW1wbGF0ZShjb25maWcudGVtcGxhdGVVcmwpO1xuXHRcdGNvbnN0IG5ld3JvdXRlID0gbmV3IFJvdXRlKHJvdXRlciwgaWQsIHsgLi4uY29uZmlnLCB0ZW1wbGF0ZVN0cmluZyB9KTtcblx0XHRyb3V0ZXIucm91dGVzLnB1c2gobmV3cm91dGUpO1xuXHRcdHJldHVybiBuZXdyb3V0ZTtcblx0fVxuXG5cdGdldCBoYXNQYXJlbnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50SWQgPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHRnZXQgcGFyZW50KCk6IFJvdXRlIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXIuZmluZFJvdXRlQnlJZCh0aGlzLnBhcmVudElkKTtcblx0fVxuXG5cdGdldCBzdGFjaygpOiBSb3V0ZVtdIHtcblx0XHRpZiAodGhpcy5oYXNQYXJlbnQpIHJldHVybiBbLi4udGhpcy5wYXJlbnQuc3RhY2ssIHRoaXNdO1xuXHRcdHJldHVybiBbdGhpc107XG5cdH1cblxuXHRnZXQgdGVtcGxhdGUoKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMudmlydHVhbGRvbSkge1xuXHRcdFx0dGhpcy52aXJ0dWFsZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHRoaXMudmlydHVhbGRvbS5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlU3RyaW5nO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52aXJ0dWFsZG9tLmlubmVySFRNTDtcblx0fVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlIHtcblx0cGF0aDogc3RyaW5nO1xuXHR0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0cmVkaXJlY3RUbz86IHN0cmluZztcblx0YWxsb3c/OiBzdHJpbmdbXTtcblx0Y2hpbGRyZW4/OiBJUm91dGVbXTtcblx0cGFyZW50SWQ/OiBudW1iZXI7XG5cdGNvbnRyb2xsZXI/OiB0eXBlb2YgQ29udHJvbGxlcjtcblx0dGVtcGxhdGVTdHJpbmc/OiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSBcIi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBJUm91dGUsIFJvdXRlIH0gZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG5cdG1vZHVsZTogTW9kdWxlO1xuXHRyb3V0ZXM6IFJvdXRlW107XG5cdGN1cnJlbnRSb3V0ZT86IFJvdXRlO1xuXG5cdGNvbnN0cnVjdG9yKG1vZHVsZTogTW9kdWxlLCByb3V0ZXM6IElSb3V0ZVtdKSB7XG5cdFx0dGhpcy5tb2R1bGUgPSBtb2R1bGU7XG5cdFx0dGhpcy5yb3V0ZXMgPSBbXTtcblx0XHR0aGlzLmJ1aWxkUm91dGVzKHJvdXRlcywgKCkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRhc3luYyBidWlsZFJvdXRlcyhyb3V0ZXM6IElSb3V0ZVtdLCBjYWxsYmFjazogYW55KSB7XG5cdFx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcblx0XHRcdGxldCBuZXdyb3V0ZSA9IGF3YWl0IFJvdXRlLmJ1aWxkKHRoaXMsIHRoaXMucm91dGVzLmxlbmd0aCwgcm91dGUpO1xuXHRcdFx0aWYgKHJvdXRlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2Ygcm91dGUuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRsZXQgY2hpbGRyb3V0ZSA9IGF3YWl0IFJvdXRlLmJ1aWxkKHRoaXMsIHRoaXMucm91dGVzLmxlbmd0aCwge1xuXHRcdFx0XHRcdFx0Li4uY2hpbGQsXG5cdFx0XHRcdFx0XHRwYXRoOiBuZXdyb3V0ZS5wYXRoICsgY2hpbGQucGF0aCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBuZXdyb3V0ZS5pZFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5ld3JvdXRlLmNoaWxkcmVuSWRzLnB1c2goY2hpbGRyb3V0ZS5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxuXG5cdGZpbmRSb3V0ZShwYXRoOiBzdHJpbmcpOiBSb3V0ZSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gcGF0aCk7XG5cdH1cblxuXHRmaW5kUm91dGVCeUlkKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXNbaWRdO1xuXHR9XG5cblx0bmF2aWdhdGUocGF0aDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3Qgcm91dGUgPSB0aGlzLmZpbmRSb3V0ZShwYXRoKTtcblx0XHRpZiAocm91dGUpIHtcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IHBhdGgpIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgcGF0aCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuXHRcdFx0dGhpcy5yZW5kZXJWaWV3KHJvdXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuZmluZFJvdXRlKFwiLzQwNFwiKSkge1xuXHRcdFx0XHR0aGlzLm5hdmlnYXRlKCcvNDA0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiNDA0IG5vdCBmb3VuZC5cIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMubmF2aWdhdGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblx0fVxuXG5cdHJlbmRlclZpZXcocm91dGU6IFJvdXRlKSB7XG5cdFx0aWYgKCFyb3V0ZS5oYXNQYXJlbnQpIHtcblx0XHRcdGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXHRcdFx0aWYgKCFyb290KSB7XG5cdFx0XHRcdHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRyb290LmlkID0gXCJyb290XCI7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldElubmVySFRNTChyb290LCByb3V0ZS50ZW1wbGF0ZSk7XG5cdFx0XHRyb290LnNldEF0dHJpYnV0ZShcInAtcm91dGVcIiwgcm91dGUuaWQudG9TdHJpbmcoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyVmlldyhyb3V0ZS5wYXJlbnQpO1xuXHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtwLXJvdXRlPVwiJHtyb3V0ZS5wYXJlbnRJZH1cIl1gKTtcblx0XHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdGxldCBzbG90ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbc2xvdF1gKTtcblx0XHRcdFx0aWYgKCFzbG90KSB7XG5cdFx0XHRcdFx0c2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0c2xvdC5zZXRBdHRyaWJ1dGUoXCJzbG90XCIsIFwiXCIpO1xuXHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xvdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRJbm5lckhUTUwoc2xvdCwgcm91dGUudGVtcGxhdGUpO1xuXHRcdFx0XHRzbG90LnNldEF0dHJpYnV0ZShcInAtcm91dGVcIiwgcm91dGUuaWQudG9TdHJpbmcoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0SW5uZXJIVE1MKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBFbGVtZW50LCBjb250ZW50OiBzdHJpbmcpIHtcblx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudDtcblx0XHR0aGlzLmluaXRFbGVtZW50cygpO1xuXHR9XG5cblx0aW5pdEVsZW1lbnRzKCkge1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBhbmNob3IgdGFnc1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmZvckVhY2goYSA9PiB7XG5cdFx0XHQvLyBBZGQvcmVtb3ZlIFwiYWN0aXZlXCIgY2xhc3Ncblx0XHRcdGEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRcdGNvbnNvbGUubG9nKGEuaHJlZik7XG5cblx0XHRcdGlmIChhLmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0XHQvLyBIYW5kbGUgY2xpY2sgZXZlbnRcblx0XHRcdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gU2FtZSBvcmlnaW5cblx0XHRcdFx0aWYgKGEuaG9zdCA9PT0gd2luZG93LmxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHQvLyBIYXNoXG5cdFx0XHRcdFx0aWYgKGEucGF0aG5hbWVbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImhhc2ggcm91dGluZ1wiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSW50ZXJuYWwgcm91dGluZ1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZShhLnBhdGhuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRXh0ZXJuYWwgb3JpZ2luXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHdpbmRvdy5vcGVuKGEuaHJlZiwgXCJfYmxhbmtcIikuZm9jdXMoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdH1cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcblxuLy8gQHRzLWlnbm9yZVxud2luZG93LlEgPSBNb2R1bGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9