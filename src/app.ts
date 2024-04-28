import { Rol } from "./enum/rols";
import { Person } from "./models/Person";
import { ServiceDB } from "./utils/ServiceDB";
const readline = require('readline')
const consultas: ServiceDB = new ServiceDB();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let  question:string=""

const user1: Person = {
    username: "",
    password: "",
    nickname: "",
    rol: Rol.User
}
export const Menu = () => {
    console.log("# Menú Interactivo");
    console.log("1. Registrar Usuario");
    console.log("2. Consultar por nickname");
    console.log("3. Consultar Rol");
    console.log("4. Salir");
    rl.question('Selecciona una opcion: ', (opcion: string) => {

        switch (opcion) {
            case '1':
                console.log(`opcion, ${opcion}!`);
                registrarUser()
                
                break;
            case '2':
                console.log(`opcion, ${opcion}!`);
                break;
            case '3':
                console.log(`opcion, ${opcion}!`);
                break;
            case '4':
                process.exit()
                break;

            default:
                break;
        }
        rl.close();
    });
}

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

const registrarUser = async () =>{
    console.log('Por favor, ingrese la siguiente información:');
    const usuario = await solicitarInformacion();
    console.log(usuario);
    rl.close();
}










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
