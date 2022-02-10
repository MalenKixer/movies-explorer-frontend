export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;

    }
    // Оправить запрос
    _sendRequest(path, parameters){
        return fetch(`${this._baseUrl}${path}`, parameters)
        .then((res) => {
            if (res.ok) {
            return res.json();
            } else {
                return Promise.reject(new Error(res.status));
            }
          })
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
    savedMovie(country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId){
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
                trailer,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
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
    baseUrl: 'https://api.domainame.movies.nomoredomains.rocks',
    headers: {
       "Accept": 'application/json',
       'Content-Type': 'application/json',
    },
 });