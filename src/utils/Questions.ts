const readline = require('readline')



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


export function questionUserName(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Ingresa el nombre:', (answer: string) => {
            resolve(answer.trim())            
        })
    })
}

export function questionPassword(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Ingresa el password:', (answer: string) => {
            resolve(answer.trim())
        })
    })
}

export function questionNickName(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Ingresa el nickname:', (answer: string) => {
            resolve(answer.trim())
        })
    })
}
export function questionNickNameQuery(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Ingresa el nickname usuario a consultar:', (answer: string) => {
            resolve(answer.trim())
        })
    })
}

export function questionRol(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Ingresa rol usuario (1:admin,2:user):', (answer: string) => {
            resolve(answer.trim())
        })
    })
}