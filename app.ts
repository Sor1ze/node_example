import *  as I  from './types'

// import {controllerOne} from './controllers/controllerOne'
import * as Controller from './controllers/controllerOne'

console.log('Приложение работает...')

const user:{name:string, age:number } = {
    name: 'Artem',
    age: 33
}

const user_2:I.User = {
    name: 'Artem',
    age: 33
}

console.log(Controller)
console.log('User', user.age)
