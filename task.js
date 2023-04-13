function Task(title){
      this.id = new Date().toLocaleString();
      this.title = title;
      this.isComplete = false;
}

export default Task;