"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const colorts_1 = __importDefault(require("colorts"));
const Logs_1 = require("./utils/Logs");
const app_1 = require("./app");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const Menu = () => {
    (0, Logs_1.logsout)('\n');
    (0, Logs_1.logsout)((0, colorts_1.default)('/////////////////// Menú Interactivo////////////////').red + "");
    (0, Logs_1.logsout)((0, colorts_1.default)("1. ").green + "Registrar Usuario");
    (0, Logs_1.logsout)((0, colorts_1.default)("2. ").green + "Login");
    (0, Logs_1.logsout)((0, colorts_1.default)("3. ").green + "Consultar por nickname");
    (0, Logs_1.logsout)((0, colorts_1.default)("4. ").green + "Consultar Rol");
    (0, Logs_1.logsout)((0, colorts_1.default)("5. ").green + "Salir");
    rl.question('Selecciona una opcion: ', (opcion) => {
        switch (opcion) {
            case '1':
                (0, app_1.registrarUser)();
                break;
            case '2':
                (0, app_1.loginUser)();
                break;
            case '3':
                (0, app_1.consultarUser)();
                break;
            case '4':
                (0, app_1.consultarUserRol)();
                break;
            case '5':
                process.exit();
                break;
            default:
                console.log((0, colorts_1.default)('Opcion no valida\n').red + "");
                (0, exports.Menu)();
                break;
        }
    });
};
exports.Menu = Menu;
