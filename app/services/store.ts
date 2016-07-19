export class Todo {
    completed: Boolean;
    editing: Boolean;

    private _title: String;
    
    get title() {
        return this._title;
    }

    set title(value: String) {
        this._title = value.trim(); 
    }

    constructor(title: String) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
}

export class TodoStore {
    todos: Array<Todo>;

    constructor() {
        let persistedTodos = JSON.parse(localStorage.getItem('reportor-todos') || '[]');

        this.todos = persistedTodos.map( (todo: {_title: String, completed: Boolean}) => {
            let collection = new Todo(todo._title);
            collection.completed = todo.completed;
            return collection; 
        } )
    }

    private updateStore() {
        localStorage.setItem('reportor-todos', JSON.stringify(this.todos));
    }

    private getWithCompleted(completed: Boolean) {
        return this.todos.filter( (todo: Todo) => todo.completed === completed );
    }

    getCompleted() {
        return this.getWithCompleted(true);
    }

    getRemaining() {
        return this.getWithCompleted(false);
    }

    allCompleted() {
        return this.todos.length === this.getCompleted().length;
    }

    setAllTo(completed: Boolean) {
        this.todos.forEach( (todo: Todo) => todo.completed = completed )
        this.updateStore();
    }

    removeCompleted() {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
        this.updateStore();
    }

    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    }

    add(title: String) {
        this.todos.push(new Todo(title));
        this.updateStore();
    }
}