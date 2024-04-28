import { Person } from "../models/Person";

export interface DBFunctions{
    consultarUser(nicknameFind:string):Promise<Person | string | undefined>,
    registraruser(userDB:Person):Promise<string>,
    consultarRolByNicknameUsuario(nicknameFind:string,callback:(nicknameFind:string)=>void):void
}

