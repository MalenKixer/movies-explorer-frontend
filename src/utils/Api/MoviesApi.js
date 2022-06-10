import { request } from "../Auth/utilsFunctions/request";

export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;
        this._sendRequest = request(this._baseUrl);
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