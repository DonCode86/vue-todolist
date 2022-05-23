const app = new Vue({
    el: '#root',
    data: {
        todos: [
            "fare la spesa",
            "fare la doccia",
            "fare il bucato",
        ],
        newTodo: '',
    },
    methods: {
        addTodo() {
            if (this.newTodo !== ' ') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});