class Idea {
  constructor(title, body, star) {
    this.id = Date.now(); //accesses Date object which has a .now method that takes this very instance in time;
    this.title = title;
    this.body = body;
    this.star = star
  }
  saveToStorage() {
    var id = this.id
    var json = JSON.stringify(this)
    console.log(json)
    localStorage.setItem(id,json)
  }
}
