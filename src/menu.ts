import colors from "colorts";
import { logsout } from "./utils/Logs";
import { registrarUser, loginUser, consultarUser, consultarUserRol } from "./app";

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

export const Menu = () => {
    logsout('\n')
    logsout(colors('/////////////////// Menú Interactivo////////////////').red + ""); 
    logsout(colors("1. ").green +"Registrar Usuario");
    logsout(colors("2. ").green + "Login");
    logsout(colors("3. ").green + "Consultar por nickname");
    logsout(colors("4. ").green + "Consultar Rol");
    logsout(colors("5. ").green + "Salir");
    rl.question('Selecciona una opcion: ', (opcion: string) => {
        switch (opcion) {
            case '1':
                registrarUser()
                
                break;
            case '2':
                loginUser()
                break;
            case '3':
                consultarUser()
                break;
            case '4':
                consultarUserRol()
                break;
            case '5':
                process.exit()
                break;

            default:
                console.log(colors('Opcion no valida\n').red + "");  
                Menu()
                break;
        }

    });
     
}