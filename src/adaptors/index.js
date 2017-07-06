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

  static ItemsByTag(tag_id){
    return fetch(baseURL + `/tags/${tag_id}/items`)
    .then(res => res.json())
  }

  static createItem(item){
    return fetch(`${baseURL}/items`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        image: item
      })
    }).then(response => response.json())
  }

  static createTag(tag){
    console.log(tag)
    return fetch(`${baseURL}/tags`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        keyword: tag
      })
    }).then(response => response.json())
  }

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

}
