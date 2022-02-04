export const BaseUrl = 'https://api.domainame.alexander.nomoredomains.rocks';

const requestApi = (endPoint, params) => {
    return fetch(`${BaseUrl}${endPoint}`, params)
    .then((res) => {
        if (res.ok) {
        return res.json();
        }
      })
}
// Зарегистрировать пользователя, если он вошел впервый раз, вернуть id и email
export const register = (password, email) =>{
    return requestApi(`/signup`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({password, email})
    })
}
//Авторизовать пользователя, если он входит первый раз или после выхода, вернуть token пользователя
export const auhtorize = (password, email) => {
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
