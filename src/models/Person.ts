import { Rol } from "../enum/rols";

export interface Person {
    username?:string;
    password:string;
    nickname:string
    rol:Rol
}
