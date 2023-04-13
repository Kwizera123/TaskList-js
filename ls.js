function LS(){ }

LS.prototype.fetchTask = function(){
  let tasks = localStorage.getItem('tasks');

  if(tasks){
    tasks = JSON.parse(tasks);
  }else{
      tasks = [];
  }
  return tasks;

}

LS.prototype.storeTask = function(task){
  let tasks = this.fetchTask();
  tasks.unshift(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

LS.prototype.deleteTask = function(id){
  let tasks = this.fetchTask();
  let index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  localStorage.setItem('tasks',JSON.stringify(tasks));

};

LS.prototype.completeTask = function (id){
  let tasks = this.fetchTask();
  let index = tasks.findIndex((task) => task.id === id);
  if(tasks[index].isComplete){
    tasks[index].isComplete = false;
  }else{
    tasks[index].isComplete = true;
  }
  localStorage.setItem('tasks',JSON.stringify(tasks));
  
};

LS.prototype.findTask = function(id){
  let tasks = this.fetchTask();
  return tasks.find((task) => task.id === id);
}

LS.prototype.updateTask = function(id,title){
  let tasks = this.fetchTask();
  let index = tasks.findIndex((task) => task.id === id);
  tasks[index].title = title;
  localStorage.setItem('tasks',JSON.stringify(tasks));
};

export default LS;