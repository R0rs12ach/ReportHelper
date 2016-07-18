"use strict";
var Todo = (function () {
    function Todo(title) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value.trim();
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());
exports.Todo = Todo;
var TodoStore = (function () {
    function TodoStore() {
        var persistedTodos = JSON.parse(localStorage.getItem('reporter-todos') || '[]');
        this.todos = persistedTodos.map(function (todo) {
            var collection = new Todo(todo._title);
            collection.completed = todo.completed;
            return collection;
        });
    }
    TodoStore.prototype.updateStore = function () {
        localStorage.setItem('reporter-todos', JSON.stringify(this.todos));
    };
    TodoStore.prototype.getWithCompleted = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoStore.prototype.getCompleted = function () {
        return this.getWithCompleted(true);
    };
    TodoStore.prototype.getRemaining = function () {
        return this.getWithCompleted(false);
    };
    TodoStore.prototype.allCompleted = function () {
        return this.todos.length === this.getCompleted().length;
    };
    TodoStore.prototype.setAllTo = function (completed) {
        this.todos.forEach(function (todo) { return todo.completed = completed; });
        this.updateStore();
    };
    TodoStore.prototype.removeCompleted = function () {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    };
    TodoStore.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
        this.updateStore();
    };
    TodoStore.prototype.remove = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    };
    TodoStore.prototype.add = function (title) {
        this.todos.push(new Todo(title));
        this.updateStore();
    };
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=store.js.map