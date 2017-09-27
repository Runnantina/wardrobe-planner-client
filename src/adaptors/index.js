const baseURL = "http://localhost:3000/api/v1"
// const baseURL = "https://immense-castle-46038.herokuapp.com/api/v1"

export class Adaptors {

  static Items(){
    return fetch(baseURL + '/items')
      .then(res => res.json())
  }

  static Tags(){
    return fetch(baseURL + '/tags')
      .then(res => res.json())
  }

  static ItemsByTag(searchTags){ // searchTags = itemTags = ["tags tags tags"]
    return fetch(baseURL + `/tagitems`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        searchTags
      })
    })
    .then(res => res.json())
  }

  static destroyItem(item_id){
    return fetch(`${baseURL}/items/${item_id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
  }

  static destroyCollectionItem(item_id, collection_id){
    return fetch(`${baseURL}/collection_items`,{
      method: 'DELETE',
      headers: this.headers(),
      body: JSON.stringify({
        item_id,
        collection_id
      })
    }).then(res => console.log(res))
  }

  static destroyCollection(collection_id){
    return fetch(`${baseURL}/collections/${collection_id}`,{
      method: 'DELETE',
      headers: this.headers(),
      body: JSON.stringify({
        collection_id
      })
    }).then(res => console.log(res))
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

  static Collections(){
    return fetch(baseURL + '/collections')
      .then(res => res.json())
  }

  static showCollection(collection_id){
    return fetch(baseURL + `/collections/${parseInt(collection_id, 10)}`)
      .then(res => res.json())
  }

  static ItemsByCollection(item_id){
    return fetch(baseURL + `/collections/${item_id}/items`)
    .then(res => res.json())
  }

  static createCollectionItems(collection_id, item_id){
    return fetch(`${baseURL}/collection_items`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        collection_id: collection_id,
        item_id: item_id
      })
    }).then(response => response.json())
  }

  static createNewCollection(collection_name){
    return fetch(`${baseURL}/collections`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: collection_name
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
