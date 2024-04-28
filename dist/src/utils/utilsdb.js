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
exports.registarUser = exports.InsertarUserdb = exports.consultarUserByNickname = void 0;
const data_1 = require("../db/data");
function consultarUserByNickname(nicknameFind) {
    return new Promise((resolve, reject) => {
        console.log(`Buscando.......Nickname: ${nicknameFind}`);
        setTimeout(() => {
            let userfind = data_1.usersDb.find((user) => { return user.nickname == nicknameFind; });
            if (userfind) {
                resolve(userfind);
            }
            else {
                reject(`Usuario con Nickname "${nicknameFind}", no encontrado`);
            }
        }, 2000);
    });
}
exports.consultarUserByNickname = consultarUserByNickname;
function InsertarUserdb(userDB) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userfind = data_1.usersDb.find((user) => { return user.username == userDB.username; });
            if (userfind) {
                reject(`El usuario "${userDB.username}", ya se encuentra regitrado`);
            }
            else {
                data_1.usersDb.push(userDB);
                resolve(`El usuario "${userDB.username}", ha sido registrado`);
            }
        }, 2000);
    });
}
exports.InsertarUserdb = InsertarUserdb;
function registarUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield InsertarUserdb(user);
        }
        catch (error) {
            return `Error :${error}`;
        }
    });
}
exports.registarUser = registarUser;
