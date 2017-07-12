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

  static ItemsByTag(searchTags){
    return fetch(baseURL + `/tagitems`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        searchTags
      })
    })
    .then(res => res.json())
  }

  // static showItemsError(item_id){
  //   return fetch(baseURL + `/items/${item_id}`)
  //   .then(res => res.json())
  // }

  static destroyItem(item_id){
    return fetch(`${baseURL}/items/${item_id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
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

  // handling collections

  static Collections(){
    return fetch(baseURL + '/collections')
      .then(res => res.json())
  }

  static showCollection(collection_id){
    return fetch(baseURL + `/collections/${parseInt(collection_id)}`)
      .then(res => res.json())
  }

  static ItemsByCollection(item_id){
    return fetch(baseURL + `/collections/${item_id}/items`)
    .then(res => res.json())
  }

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }
}
