const baseURL = "http://localhost:3000/api/v1"

export class Adaptors {

  static Items(){
    return fetch(baseURL + '/items')
      .then(res => res.json())
  }

  static Tags(){
    return fetch(baseURL + '/tags')
      .then(res => res.json())
  }

  static ItemTags(tag_id){
    return fetch(baseURL + `/tags/${tag_id}/items`) //items#show
    .then(res => res.json())
  }

  static searchItems(){

  }

}
