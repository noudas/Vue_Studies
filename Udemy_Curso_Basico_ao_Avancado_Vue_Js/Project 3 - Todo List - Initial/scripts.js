todos = [
];

const handleTodos = {
    data(){
        return{
            todos: window.todos,
            newTodo: {},
        }
    },

    methods: {
        addTodo() {
            if (this.newTodo.text.trim() !== '') {
                this.todos.push({ 
                    text: this.newTodo.text,
                    done: !!this.newTodo.done
                 });
                 localStorage.setItem('todos', JSON.stringify(this.todos))
                this.newTodo.text = '';
            } else {
                alert('Campo vazio');
            }
        },

        clearAllTodo() {
            this.todos = [];
        }
    }
};

Vue.createApp(handleTodos).mount('#app')