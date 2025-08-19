export class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }
}
