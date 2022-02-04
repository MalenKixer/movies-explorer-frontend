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
    getUserInfo(){
        return this._sendRequest(`/users/me`, {
            headers: this._headers,
            credentials: 'include',
        })
    }
    getCardList(){
        return this._sendRequest(`/cards`, {
            headers: this._headers,
            credentials: 'include',
        })
    }
    setUserInfo({name, about}){
        return this._sendRequest(`/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name,
                about: about
              })
        })
    }
    uploadCard({name, link}){
        return this._sendRequest(`/cards`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
    }
    deleteCard(card){
        return this._sendRequest(`/cards/${card._id}`,{
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
    }
    deleteToken(){
        return this._sendRequest('/users/me/token', {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
    }
    //Запрос возвращает обновленный объект карточки
    changeCardLikeState(card, isLiked){
        const isDelete = isLiked ? 'DELETE' : 'PUT';
        return this._sendRequest(`/cards/${card._id}/likes`,{
            method: isDelete,
            headers: this._headers,
            credentials: 'include',
        })
    }
    changeAvatar({link}){
        return this._sendRequest(`/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                avatar: link,
              })    
        })
    }
}

export const api = new Api({
    baseUrl: 'https://api.domainame.alexander.nomoredomains.rocks',
    headers: {
       "Accept": 'application/json',
       'Content-Type': 'application/json',
    },
 });