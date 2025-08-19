export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
  
  removeCompleted() {
    this.tasks = this.tasks.filter((task) => !task.completed);
  }

  listTasks() {
    return this.tasks.map((task) => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
    }));
  }
}
