class Idea {
  constructor(title, body, star) {
    this.id = Date.now(); //accesses Date object which has a .now method that takes this very instance in time;
    this.title = title;
    this.body = body;
    this.star = star
  }
  saveToDataModel() {
    displayedIdeas.push(this)
  }

}
