export const BaseUrl = 'https://api.domainame.movies.nomoredomains.rocks';
const requestApi = (endPoint, params) => {
    return fetch(`${BaseUrl}${endPoint}`, params)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        if(res.name === 'error' || res.error !== undefined) {
            return Promise.reject(new Error(res.message));
        } else {
            return res;
        }
    })
}
// Зарегистрировать пользователя, если он вошел впервый раз, вернуть id и email
export const register = (name, email, password) =>{
    return requestApi(`/signup`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
        credentials: 'include',
    })
}
//Авторизовать пользователя, если он входит первый раз или после выхода, вернуть token пользователя
export const auhtorize = (email, password) => {
    return requestApi(`/signin`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password, email}),
        credentials: 'include',
    })
}
