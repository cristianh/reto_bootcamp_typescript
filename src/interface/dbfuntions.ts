import { Person } from "../models/Person";

export interface DBFunctions{
    loginuser(nickname: string,password:string):Promise<any>,
    consultarUser(nicknameFind:string):Promise<Person | string | undefined>,
    registraruser(userDB:Person):Promise<any>,
    consultarRolByNicknameUsuario(nicknameFind:string,callback:(nicknameFind:string)=>void):void
}

