const baseURL = "http://localhost:3000/"

export class Adaptors {

  static Items(){
    return fetch(baseURL + 'api/v1/items')
      .then(res => res.json())
  }

  static Tags(){
    return fetch(baseURL + '/api/v1/tags')
      .then(res => res.json())
  }



}
