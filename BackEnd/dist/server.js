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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Express = __webpack_require__(/*! express */ "express");
var Http = __webpack_require__(/*! http */ "http");
var socketIo = __webpack_require__(/*! socket.io */ "socket.io");
var pg_1 = __webpack_require__(/*! pg */ "pg");
var app = Express();
var http = new Http.Server(app);
var io = socketIo(http);
var PORT = process.env.PORT || 3000;
var path = process.cwd();
var log = [];
var client = new pg_1.Client({
    user: 'pgUser112',
    host: '172.25.59.205',
    database: 'ChatRoom',
    password: 'p@ssPg112',
    port: 5432,
});
client.connect();
app.get('/', function (req, res) {
    console.log(path + " " + req);
    res.sendFile(path + "/dist/index.html");
});
app.get('/ChatRoom/sendReq', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var roomList, sql, logs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roomList = [];
                sql = 'select * from public.roomlist';
                return [4, client.query(sql)
                        .then(function (res) {
                        console.log(res.rows);
                        for (var _i = 0, _a = res.rows; _i < _a.length; _i++) {
                            var val = _a[_i];
                            var value = { roomId: (val.roomid).toString(), roomName: val.roomname };
                            roomList.push(value);
                        }
                    }).catch(function (err) {
                        console.log(err);
                        client.end();
                    })];
            case 1:
                _a.sent();
                logs = JSON.stringify(log);
                console.log(req.body);
                console.log("\u30ED\u30B0\u51FA\u529B:" + log);
                res.send(logs);
                return [2];
        }
    });
}); });
app.get('/ChatRoomList/req', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var roomList, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                roomList = [];
                sql = 'select * from public.roomlist';
                return [4, client.query(sql)
                        .then(function (res) {
                        console.log(res.rows);
                        for (var _i = 0, _a = res.rows; _i < _a.length; _i++) {
                            var val = _a[_i];
                            var value = { roomId: (val.roomid).toString(), roomName: val.roomname };
                            roomList.push(value);
                        }
                    }).catch(function (err) {
                        console.log(err);
                        client.end();
                    })];
            case 1:
                _a.sent();
                res.send(roomList);
                return [2];
        }
    });
}); });
app.use(Express.static(path + "/dist"));
io.on('connection', function (socket) {
    console.log('connected');
    socket.on('ENTER_ROOM', function (id, name, userId) { return __awaiter(_this, void 0, void 0, function () {
        var value, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = [userId, name, id];
                    sql = 'insert into public.userlist (userid,enterroom,roomid) values ($1,$2,$3)';
                    return [4, client.query(sql, value)
                            .then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.log(err);
                            client.end();
                        })];
                case 1:
                    _a.sent();
                    console.log("EntertedRoom : " + id + "\nEntertedRoomname : " + name);
                    return [2];
            }
        });
    }); });
    socket.on('SEND_TODO', function (msg, userId, roomId) { return __awaiter(_this, void 0, void 0, function () {
        var value, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("CatchMessage : " + msg);
                    log.push(msg);
                    value = [userId, msg, roomId];
                    sql = 'insert into chatlog (userid, chatlog, roomid) values($1, $2, $3)';
                    return [4, client.query(sql, value)
                            .then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.log(err);
                            client.end();
                        })];
                case 1:
                    _a.sent();
                    console.log("\u73FE\u5728\u306E\u30ED\u30B0 : " + log);
                    io.emit('RECEIVE_TODO', msg);
                    return [2];
            }
        });
    }); });
    socket.on('REQUEST_ALLLOG', function () {
        console.log('ログを送信します');
        socket.emit('RECEIVE_ALLLOG', log);
    });
    socket.on('UPDATE_TODO', function (name) {
        console.log("NowInput: " + name);
        io.emit('NOWINPUT_TODO', "" + name);
    });
    socket.on('EXIT_CHATROOM', function (userId) { return __awaiter(_this, void 0, void 0, function () {
        var value, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = [userId];
                    sql = 'delete from public.userlist where userid = $1';
                    return [4, client.query(sql, value)
                            .then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.log(err);
                            client.end();
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    socket.on('INFORMATION', function (msg) {
        console.log("[information]:" + msg);
        log.push("[server]:[information]:" + msg);
        io.emit('RECEIVE_TODO', "[server]:[information]:" + msg);
    });
    socket.on('DEBUG', function (msg) {
        console.log(msg);
    });
});
http.listen(PORT, function () {
    console.log("listening server : " + PORT);
});


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map