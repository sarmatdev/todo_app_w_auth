export default class Task {
  constructor(title, description, user = null, id = null) {
    this.title = title;
    this.description = description;
    this.user = user;
    this.id = id;
  }
}
