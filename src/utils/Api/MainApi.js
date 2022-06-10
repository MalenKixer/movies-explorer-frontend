import { request } from "../Auth/utilsFunctions/request";
import { BASE_URL } from "../const";

export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;
        this._sendRequest = request(this._baseUrl);
    }
    getUserInfo(){
        return this._sendRequest(`/users/me/`, {
            headers: this._headers,
            credentials: 'include',
        })
    }
    updateUser({name, email}){
        return this._sendRequest(`/users/me/`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
              })
        })
    }
    deleteToken(){
        return this._sendRequest('/users/me/token/', {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
    }
    checkToken(){
        return this._sendRequest('/users/me/token/', {
            headers: this._headers,
            credentials: 'include',
        })
    }
    getMovieList(){
        return this._sendRequest(`/movies/`, {
            headers: this._headers,
            credentials: 'include',
        })
    }
    deleteMovie(movie){
        return this._sendRequest(`/movies/${movie._id}`,{
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
    }
    savedMovie({country, director, duration, year, description, image, nameRU, nameEN, trailerLink, id}){
        return this._sendRequest(`/movies/`,{
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                nameRU,
                nameEN,
                trailerLink,
                id,
              })
        })
    }
    //Запрос возвращает обновленный объект карточки
    changeMovieLikeState(movie, isLiked){
        const isDelete = isLiked ? 'DELETE' : 'PUT';
        return this._sendRequest(`/movies/${movie._id}/likes/`,{
            method: isDelete,
            headers: this._headers,
            credentials: 'include',
        })
    }
}

export const api = new Api({
    baseUrl: BASE_URL,
    headers: {
       "Accept": 'application/json',
       'Content-Type': 'application/json',
    },
 });