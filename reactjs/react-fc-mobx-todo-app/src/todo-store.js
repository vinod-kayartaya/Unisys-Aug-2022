import {
    // action,
    autorun,
    // computed,
    makeAutoObservable,
    // makeObservable,
    // observable,
} from 'mobx';

// A store in mobx is an object of a class which maintains
// the state and behavior. All the methods of the class must be
// written using arrow functions (to preserve the context "this")

class TodoStore {
    todos = [
        { id: 1, text: 'Create a React project', done: false },
        { id: 2, text: 'Update website', done: true },
        { id: 3, text: 'Plan a new video course', done: false },
        { id: 4, text: "Let's have a break", done: false },
    ];

    constructor() {
        // makeObservable(this, {
        //     todos: observable,
        //     count: computed,
        //     pendingCount: computed,
        //     addTodo: action,
        //     deleteTodo: action,
        //     deleteAllTodos: action,
        //     deleteFinishedTodos: action,
        //     toggleTodoStatus: action,
        // });
        makeAutoObservable(this);

        autorun(() => {
            console.log('todos mutated', this.todos);
        });
    }

    // getter; no parameters
    get count() {
        return this.todos.length;
    }
    get pendingCount() {
        return this.todos.filter((t) => t.done === false).length;
    }

    addTodo = (text) => {
        const id =
            this.todos.length === 0
                ? 1
                : 1 + Math.max(...this.todos.map((t) => t.id));
        this.todos.push({ id, text, done: false });
    };

    deleteTodo = (id) => {
        this.todos = this.todos.filter((t) => t.id !== id);
    };

    toggleTodoStatus = (id) => {
        const t = this.todos.find((t) => t.id === id);
        if (t) {
            t.done = !t.done;
        }
    };

    deleteFinishedTodos = () => {
        this.todos = this.todos.filter((t) => t.done !== true);
    };

    deleteAllTodos = () => {
        this.todos = [];
    };
}

const todoStore = new TodoStore();
export default todoStore;
