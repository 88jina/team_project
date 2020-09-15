import API from '../api/todo.api.js';

class Service {
    constructor() {
        this.todolist = [];
        this.todolist = this.todolist.map(todo => new Todo(todo));
        this.api = new TodoAPI();
    }

    addItem(item) {
        console.log("in service: ", item);
        this.todolist.push(new Todo(item));
        console.log("todolist: ", this.todolist);
    }
 
}

export default Service;