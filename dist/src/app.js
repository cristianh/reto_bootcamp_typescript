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
exports.Menu = void 0;
const rols_1 = require("./enum/rols");
const ServiceDB_1 = require("./utils/ServiceDB");
const readline = require('readline');
const consultas = new ServiceDB_1.ServiceDB();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let question = "";
const user1 = {
    username: "",
    password: "",
    nickname: "",
    rol: rols_1.Rol.User
};
const Menu = () => {
    console.log("# Menú Interactivo");
    console.log("1. Registrar Usuario");
    console.log("2. Consultar por nickname");
    console.log("3. Consultar Rol");
    console.log("4. Salir");
    rl.question('Selecciona una opcion: ', (opcion) => {
        switch (opcion) {
            case '1':
                console.log(`opcion, ${opcion}!`);
                registrarUser();
                break;
            case '2':
                console.log(`opcion, ${opcion}!`);
                break;
            case '3':
                console.log(`opcion, ${opcion}!`);
                break;
            case '4':
                process.exit();
                break;
            default:
                break;
        }
        rl.close();
    });
};
exports.Menu = Menu;
/* function solicitarInformacion() {
    return new Promise((resolve, reject) => {
      rl.question('Ingrese su nombre: ', (username:string) => {
        rl.question('Ingrese su contraseña: ', (password:string) => {
          rl.question('Ingrese su apodo (nickname): ', (nickname:string) => {
            user1.username=username
            user1.password=password
            user1.nickname=nickname
            resolve(user1);
          });
        });
      });
    });
  } */
const registrarUser = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Por favor, ingrese la siguiente información:');
    const usuario = yield solicitarInformacion();
    console.log(usuario);
    rl.close();
});
// 1.Mostrar menu
// 2. segun la opcion:
// registrar->pedir información
/*
*/
/* consultas.consultarUser("cami23").then((res) => {
    console.log("Consulta:", res)
}).catch ((error) => {
    console.log(error)
})


consultas.registraruser(user1).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})

function processData(data: string): void {
    console.log("Consultado Rol:", data);
}

consultas.consultarRolByNicknameUsuario("cami23", processData) */
