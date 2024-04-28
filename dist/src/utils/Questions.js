"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRol = exports.questionNickNameQuery = exports.questionNickName = exports.questionPassword = exports.questionUserName = void 0;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function questionUserName() {
    return new Promise((resolve) => {
        rl.question('Ingresa el nombre:', (answer) => {
            resolve(answer.trim());
        });
    });
}
exports.questionUserName = questionUserName;
function questionPassword() {
    return new Promise((resolve) => {
        rl.question('Ingresa el password:', (answer) => {
            resolve(answer.trim());
        });
    });
}
exports.questionPassword = questionPassword;
function questionNickName() {
    return new Promise((resolve) => {
        rl.question('Ingresa el nickname:', (answer) => {
            resolve(answer.trim());
        });
    });
}
exports.questionNickName = questionNickName;
function questionNickNameQuery() {
    return new Promise((resolve) => {
        rl.question('Ingresa el nickname usuario a consultar:', (answer) => {
            resolve(answer.trim());
        });
    });
}
exports.questionNickNameQuery = questionNickNameQuery;
function questionRol() {
    return new Promise((resolve) => {
        rl.question('Ingresa rol usuario (1:admin,2:user):', (answer) => {
            resolve(answer.trim());
        });
    });
}
exports.questionRol = questionRol;
