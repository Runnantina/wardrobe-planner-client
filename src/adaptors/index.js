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

  static destroyTag(tag_id){
    return fetch(`${baseURL}/tags/${tag_id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
  }

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  static createTag(item_url, tags_arr){
    console.log(tags_arr)
    return fetch(`${baseURL}/tags`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        tags_arr: tags_arr,
        item_url: item_url
      })
    }).then(response => response.json())
  }

}

// static createItem(item){
//   return fetch(`${baseURL}/items`, {
//     method: 'POST',
//     headers: this.headers(),
//     body: JSON.stringify({
//       image: item
//     })
//   }).then(response => response.json())
// }
//
