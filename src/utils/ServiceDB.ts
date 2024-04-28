import { usersDb } from "../db/data";
import { DBFunctions } from "../interface/dbfuntions";
import { Person } from "../models/Person";
import { logsout } from "./Logs";


export class ServiceDB implements DBFunctions {

    async loginuser(nicknameUser: string, password: string): Promise<any> {
       
        try {
            const respuesta = await usersDb.find((user) => {
                if (user.nickname == nicknameUser && user.password == password) {
                    return user
                }
            })
            
            if (respuesta) {
                return { mensaje: `Bienvenido  ${JSON.stringify(respuesta.username)}`, status: 'ok' }
            } else {
                return { mensaje: `Usuario con Nickname "${nicknameUser}", no se encuentra registrado.`, status: 'fail' } 
            }

        } catch (error) {
            logsout(`Error:  ${error}`)
        }
    }

    registraruser(userDB: Person): Promise<any> {
        logsout("Guardando...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let userfind = usersDb.find((user) => { return user.username == userDB.username })
                if (userfind) {
                    reject(`El usuario "${userDB.username}", ya se encuentra regitrado`);
                } else {
                    usersDb.push(userDB)
                    const resp = { mensaje: `El usuario "${userDB.username}", ha sido registrado`, status: 'ok' }
                    resolve(resp);
                }
            }, 2000);
        });
    }

    consultarRolByNicknameUsuario(nicknameFind: string, callback: (mensaje: string) => void): void {
        let result: string;
        setTimeout(() => {
            let userfind = usersDb.find((user) => user.nickname == nicknameFind )
           
            if (userfind?.username) {
                result = `El usuario "${nicknameFind}" tiene el rol- '${userfind.rol}'`;
            } else {
                result = `Nickname "${nicknameFind}",no exitse`;
            }
        
            callback(result);
        }, 2000);
    }

    async consultarUser(nicknameFind: string): Promise<string | Person | undefined> {
        try {
            const respuesta = await usersDb.find((user) => { return user.nickname == nicknameFind })

            if (respuesta) {
                return  respuesta
            } else {
                return `Usuario con Nickname "${nicknameFind}", no encontrado`
            }

        } catch (error) {
            logsout(`Error:  ${error}`)
        }
    }

}