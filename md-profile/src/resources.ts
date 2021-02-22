export const API = new URL('http://localhost:8080/api'); //this is the backend url 

export const routes = {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    CHECKOUT: '/checkout',
    PROFILE: '/profile',
    SIGN_UP: '/signup',
    LOG_IN: '/login',
    ORDERS: '/orders',
    STORE: '/items',
    USERS: '/users'
}
export const apiRoutes : any = Object.entries({
    LOG_IN: '/login',
    ORDER: '/order',
    USER: '/user',
    ITEM: '/item',
    TAG: '/tags',
}).reduce((acc, cur) => ({ ...acc, [cur[0]]: API + cur[1] }), {});