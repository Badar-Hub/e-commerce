"use strict";
const __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __generator = (this && this.__generator) || function (thisArg, body) {
    let _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
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
exports.__esModule = true;
const inversify_1 = require("inversify");
const vue_1 = require("vue");
const axios_1 = require("axios");
const vue_axios_1 = require("vue-axios");
const services_1 = require("@/services");
require("reflect-metadata");
const ApiService = /** @class */ (function () {
    function ApiService() {
        vue_1["default"].use(vue_axios_1["default"], axios_1["default"]);
        vue_1["default"].axios.defaults.baseURL = services_1.API_URL;
        vue_1["default"].axios.defaults.withCredentials = false;
    }
    ApiService.prototype.mapCustomConfigToAxios = function (config) {
        const result = {
            url: config.url,
            method: config.method,
            baseURL: config.baseURL,
            headers: config.headers,
            params: config.params,
            data: config.data
        };
        return result;
    };
    ApiService.prototype.get = function (resource, config) {
        return __awaiter(this, void 0, Promise, function () {
            let axiosConfig, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axiosConfig = {};
                        if (config)
                            axiosConfig = this.mapCustomConfigToAxios(config);
                        return [4 /*yield*/, vue_1["default"].axios.get(resource, axiosConfig)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    ApiService.prototype.getPaged = function (resource, page) {
        return __awaiter(this, void 0, Promise, function () {
            let result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, vue_1["default"].axios.get(resource, {
                            params: page.buildParams()
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    ApiService.prototype.post = function (resource, data, config) {
        if (data === void 0) { data = null; }
        return __awaiter(this, void 0, Promise, function () {
            let axiosConfig, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axiosConfig = {};
                        if (config)
                            axiosConfig = this.mapCustomConfigToAxios(config);
                        return [4 /*yield*/, vue_1["default"].axios.post(resource, data, axiosConfig)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    ApiService.prototype.put = function (resource, data, config) {
        if (data === void 0) { data = null; }
        return __awaiter(this, void 0, Promise, function () {
            let axiosConfig, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axiosConfig = {};
                        if (config)
                            axiosConfig = this.mapCustomConfigToAxios(config);
                        return [4 /*yield*/, vue_1["default"].axios.put(resource, data, axiosConfig)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    ApiService.prototype["delete"] = function (resource, config) {
        return __awaiter(this, void 0, Promise, function () {
            let axiosConfig, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axiosConfig = {};
                        if (config)
                            axiosConfig = this.mapCustomConfigToAxios(config);
                        return [4 /*yield*/, vue_1["default"].axios["delete"](resource, axiosConfig)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    ApiService.prototype.handleError = function (error) {
        throw new Error("ApiService " + error);
    };
    ApiService.prototype.addInterceptor = function (interceptor) {
        vue_1["default"].axios.interceptors.request.use(interceptor);
    };
    ApiService = __decorate([
        inversify_1.injectable()
    ], ApiService);
    return ApiService;
}());
exports["default"] = ApiService;
