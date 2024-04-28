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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDB = void 0;
const data_1 = require("../db/data");
const Logs_1 = require("./Logs");
class ServiceDB {
    loginuser(nicknameUser, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield data_1.usersDb.find((user) => {
                    if (user.nickname == nicknameUser && user.password == password) {
                        return user;
                    }
                });
                if (respuesta) {
                    return { mensaje: `Bienvenido  ${JSON.stringify(respuesta.username)}`, status: 'ok' };
                }
                else {
                    return { mensaje: `Usuario con Nickname "${nicknameUser}", no se encuentra registrado.`, status: 'fail' };
                }
            }
            catch (error) {
                (0, Logs_1.logsout)(`Error:  ${error}`);
            }
        });
    }
    registraruser(userDB) {
        (0, Logs_1.logsout)("Guardando...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let userfind = data_1.usersDb.find((user) => { return user.username == userDB.username; });
                if (userfind) {
                    reject(`El usuario "${userDB.username}", ya se encuentra regitrado`);
                }
                else {
                    data_1.usersDb.push(userDB);
                    const resp = { mensaje: `El usuario "${userDB.username}", ha sido registrado`, status: 'ok' };
                    resolve(resp);
                }
            }, 2000);
        });
    }
    consultarRolByNicknameUsuario(nicknameFind, callback) {
        let result;
        setTimeout(() => {
            let userfind = data_1.usersDb.find((user) => user.nickname == nicknameFind);
            if (userfind === null || userfind === void 0 ? void 0 : userfind.username) {
                result = `El usuario "${nicknameFind}" tiene el rol- '${userfind.rol}'`;
            }
            else {
                result = `Nickname "${nicknameFind}",no exitse`;
            }
            callback(result);
        }, 2000);
    }
    consultarUser(nicknameFind) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield data_1.usersDb.find((user) => { return user.nickname == nicknameFind; });
                if (respuesta) {
                    return respuesta;
                }
                else {
                    return `Usuario con Nickname "${nicknameFind}", no encontrado`;
                }
            }
            catch (error) {
                (0, Logs_1.logsout)(`Error:  ${error}`);
            }
        });
    }
}
exports.ServiceDB = ServiceDB;
