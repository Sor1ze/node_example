// export const controllerOne = () => {
//     return {data: {}}
// }
// export const userData = {
//     userName: 'Denis'
// }
// export const isAdmin = true

import Handlers from '../handlers'

export const controllerOne = () => {
    Handlers.handlerOne();
    Handlers.handlerTwo();
    Handlers.handlerThree();
    return {data: {}}
}