import {key} from './apikey';

const options = {
  headers: {
    'X-RapidAPI-Key': 'b383ae007fmsha23a1e9e3b90b17p1bda8ajsn81fa0a954caf',
    'X-RapidAPI-Host': 'divanscore.p.rapidapi.com'
  }
};

class Api {
  constructor({
                baseUrl,
                headers,
              }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(url, options1 = {}) {
    return fetch(url, options1)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getResults() {
    console.log(this._headers, "headers")
    console.log(options, "options")
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
