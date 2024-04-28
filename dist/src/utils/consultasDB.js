"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultasDB = void 0;
const data_1 = require("../db/data");
class ConsultasDB {
    consultarUser(nicknameFind) {
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
    consultarRolByNicknameUsuario(nicknameFind) {
        throw new Error("Method not implemented.");
    }
    registraruser(userDB) {
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
}
exports.ConsultasDB = ConsultasDB;
