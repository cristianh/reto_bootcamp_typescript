import { Rol } from './enum/rols';
import { Menu } from "./menu";
import { Person } from "./models/Person";
import { logsout } from "./utils/Logs";
import { questionUserName, questionNickName, questionPassword, questionNickNameQuery,questionRol } from "./utils/Questions";
import { ServiceDB } from "./utils/ServiceDB";
import colors from 'colorts';


const consultas: ServiceDB = new ServiceDB();


const user1: Person = {
    username: "",
    password: "",
    nickname: "",
    rol: Rol.User
}

export const registrarUser = async () => {
    try {
        user1.username = await questionUserName();
        user1.nickname = await questionNickName();
        user1.password = await questionPassword();
        const rol = await questionRol();
        if(rol=='1'){
            user1.rol=Rol.User
        }else{
            user1.rol=Rol.Admin
        }
        const result = await consultas.registraruser(user1)
        if (result.status == 'ok') {
            logsout(colors(result.mensaje).green + "")
            /* rl.close(); */
            Menu()
        }
    } catch (error) {
        logsout(colors(`Error: ${error}`).red + "")
        Menu()
    }
    
}

export const loginUser = async () => {
    try {
        let userNickmane = await questionNickName();
        let password = await questionPassword();
        const result = await consultas.loginuser(userNickmane, password)
        if (result.status == 'ok') {
            logsout(colors(result.mensaje).green + "")
            Menu()
        }else{
            logsout(colors(result.mensaje).green + "")
            Menu()
        }
    } catch (error) {
        logsout(colors(`Error: ${error}`).red + "")
    }
    /* rl.close(); */
}



export const consultarUser = async () => {
    try {
        const nickname = await questionNickNameQuery();
        const result = await consultas.consultarUser(nickname)
        if (result) {
            let user:Person = result as Person;
            logsout('\n')
            logsout(colors('/////////////////// Usuario encontrado ////////////////').yellow + ""); 
            logsout("Nickname: "+colors(user.nickname).green + "")
            logsout("Username: "+colors(user.username).green + "")
            logsout("Rol: "+colors(user.rol).green + "")            
            Menu()
        }
    } catch (error) {
        logsout(colors(`Error: ${error}`).red + "")
        Menu()
    }
    /* rl.close(); */
}

function queryData(data: string): void {    
    logsout(colors('Consultado Rol:').green+ data);
     Menu()
}

export const consultarUserRol = async () => {
    try {
        const nickname = await questionNickNameQuery();
       consultas.consultarRolByNicknameUsuario(nickname, queryData)
        
    } catch (error) {
        logsout(colors(`Error: ${error}`).red + "")
        Menu()
    }
    /* rl.close(); */
}


