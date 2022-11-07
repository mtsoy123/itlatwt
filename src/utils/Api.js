import {key} from './apikey';

class Api {
  constructor({
                baseUrl,
                headers,
              }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(url, options = {}) {
    return fetch(url, options)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getResults() {
    return this._checkResponse(this._baseUrl, {headers: this._headers});
  }
}

export const api = new Api({
  baseUrl: 'https://divanscore.p.rapidapi.com/auto-complete?query=cris',
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'divanscore.p.rapidapi.com'
  },
});
