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
                this.newTodo.text = '';
            }
        },

        clearAllTodo() {
            this.todos = [];
        }
    }
};

Vue.createApp(handleTodos).mount('#app')