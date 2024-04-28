import { Rol } from "../enum/rols";
import { Person } from "../models/Person";

export let usersDb:Person[]=[
    {username:"Cristian",password:"pinocho123",nickname:"pini21",rol:Rol.User},
    {username:"Camilo",password:"camilo23",nickname:"cami23",rol:Rol.Admin}, 
]