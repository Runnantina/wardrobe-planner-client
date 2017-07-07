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

  static createTag(item_url, tag){
    console.log(tag)
    return fetch(`${baseURL}/tags`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        tag: tag,
        item_url: item_url
      })
    }).then(response => response.json())
  }

  static createItemTag(item_id, tag_id){
    console.log(item_id)
    console.log(tag_id)
    return fetch(`${baseURL}/item_tags`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        item_id: item_id,
        tag_id: tag_id
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
