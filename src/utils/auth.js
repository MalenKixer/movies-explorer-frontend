export const BaseUrl = 'https://api.domainame.movies.nomoredomains.rocks';

const requestApi = (endPoint, params) => {
    return fetch(`${BaseUrl}${endPoint}`, params)
    .then((res) => {
        if (res.ok) {
        return res.json();
        } else {
            return Promise.reject(new Error(res.message));
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
        body: JSON.stringify({name, email, password})
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
