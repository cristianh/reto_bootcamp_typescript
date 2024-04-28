"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarUserRol = exports.consultarUser = exports.loginUser = exports.registrarUser = void 0;
const rols_1 = require("./enum/rols");
const menu_1 = require("./menu");
const Logs_1 = require("./utils/Logs");
const Questions_1 = require("./utils/Questions");
const ServiceDB_1 = require("./utils/ServiceDB");
const colorts_1 = __importDefault(require("colorts"));
const consultas = new ServiceDB_1.ServiceDB();
const user1 = {
    username: "",
    password: "",
    nickname: "",
    rol: rols_1.Rol.User
};
const registrarUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user1.username = yield (0, Questions_1.questionUserName)();
        user1.nickname = yield (0, Questions_1.questionNickName)();
        user1.password = yield (0, Questions_1.questionPassword)();
        const rol = yield (0, Questions_1.questionRol)();
        if (rol == '1') {
            user1.rol = rols_1.Rol.User;
        }
        else {
            user1.rol = rols_1.Rol.Admin;
        }
        const result = yield consultas.registraruser(user1);
        if (result.status == 'ok') {
            (0, Logs_1.logsout)((0, colorts_1.default)(result.mensaje).green + "");
            /* rl.close(); */
            (0, menu_1.Menu)();
        }
    }
    catch (error) {
        (0, Logs_1.logsout)((0, colorts_1.default)(`Error: ${error}`).red + "");
        (0, menu_1.Menu)();
    }
});
exports.registrarUser = registrarUser;
const loginUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userNickmane = yield (0, Questions_1.questionNickName)();
        let password = yield (0, Questions_1.questionPassword)();
        const result = yield consultas.loginuser(userNickmane, password);
        if (result.status == 'ok') {
            (0, Logs_1.logsout)((0, colorts_1.default)(result.mensaje).green + "");
            (0, menu_1.Menu)();
        }
        else {
            (0, Logs_1.logsout)((0, colorts_1.default)(result.mensaje).green + "");
            (0, menu_1.Menu)();
        }
    }
    catch (error) {
        (0, Logs_1.logsout)((0, colorts_1.default)(`Error: ${error}`).red + "");
    }
    /* rl.close(); */
});
exports.loginUser = loginUser;
const consultarUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nickname = yield (0, Questions_1.questionNickNameQuery)();
        const result = yield consultas.consultarUser(nickname);
        if (result) {
            let user = result;
            (0, Logs_1.logsout)('\n');
            (0, Logs_1.logsout)((0, colorts_1.default)('/////////////////// Usuario encontrado ////////////////').yellow + "");
            (0, Logs_1.logsout)("Nickname: " + (0, colorts_1.default)(user.nickname).green + "");
            (0, Logs_1.logsout)("Username: " + (0, colorts_1.default)(user.username).green + "");
            (0, Logs_1.logsout)("Rol: " + (0, colorts_1.default)(user.rol).green + "");
            (0, menu_1.Menu)();
        }
    }
    catch (error) {
        (0, Logs_1.logsout)((0, colorts_1.default)(`Error: ${error}`).red + "");
        (0, menu_1.Menu)();
    }
    /* rl.close(); */
});
exports.consultarUser = consultarUser;
function queryData(data) {
    (0, Logs_1.logsout)((0, colorts_1.default)('Consultado Rol:').green + data);
    (0, menu_1.Menu)();
}
const consultarUserRol = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nickname = yield (0, Questions_1.questionNickNameQuery)();
        consultas.consultarRolByNicknameUsuario(nickname, queryData);
    }
    catch (error) {
        (0, Logs_1.logsout)((0, colorts_1.default)(`Error: ${error}`).red + "");
        (0, menu_1.Menu)();
    }
    /* rl.close(); */
});
exports.consultarUserRol = consultarUserRol;
