export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;

    }
    // Оправить запрос
    _sendRequest(path, parameters){
        return fetch(`${this._baseUrl}${path}`, parameters)
        .then((res) => {
            return res.json();
          })
    } 
    getMovies(){
        return this._sendRequest(`/`, {
            headers: this._headers,
        })
    }
}

export const apiMovies = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
       "Accept": 'application/json',
       "Content-Type": 'application/json',
    },
 });