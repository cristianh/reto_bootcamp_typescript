import { usersDb } from "../db/data";
import { DBFunctions } from "../interface/dbfuntions";
import { Person } from "../models/Person";


export class ServiceDB implements DBFunctions {

    consultarRolByNicknameUsuario(nicknameFind:string,callback: (mensaje: string) => void): void {
        let result:string;
          setTimeout(() => {
            let userfind = usersDb.find((user) => { return user.nickname == nicknameFind })
            if (userfind) {
                result =  `El usuario "${nicknameFind}" tiene el rol- '${userfind.rol}'`;
            } else {
                result = `Nickname "${nicknameFind}",no encontrado`;
            }
            callback(result);
        }, 2000);
    }


    async consultarUser(nicknameFind: string): Promise<string | Person | undefined> {
        try {
            const respuesta = await usersDb.find((user) => { return user.nickname == nicknameFind })

            if(respuesta){
                return respuesta
            }else{
                return `Usuario con Nickname "${nicknameFind}", no encontrado`
            }  
    
        } catch (error) {
            console.log(`Error:  ${error}`)
        }
    }

    registraruser(userDB: Person): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let userfind = usersDb.find((user) => { return user.username == userDB.username })
                if (userfind) {
                    reject(`El usuario "${userDB.username}", ya se encuentra regitrado`);
                } else {
                    usersDb.push(userDB)
                    resolve(`El usuario "${userDB.username}", ha sido registrado`);
                }
            }, 2000);
        });
    }

    

}