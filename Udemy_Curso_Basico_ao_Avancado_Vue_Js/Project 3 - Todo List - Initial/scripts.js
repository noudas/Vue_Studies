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
        },
        storeTodos(){
            localStorage.setItem('todos', JSON.stringify(this.todos));
            console.log('Data saved to LocalStorage via Function');
        }
    },
    beforeCreate(){
        console.log("---------------------");
        console.log('beforeCreate')
        console.log(this.todos);
        console.log("---------------------");
    },
    created(){
        console.log("---------------------");
        console.log('created')
        console.log(this.todos);
        
        console.log('Fetching LocalStorage');
        
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem(`todos`)) : this.todos;
        console.log('Fetched data from LocalStorage');
        console.log(this.todos);
        console.log("---------------------");
    },
    beforeUpdate(){
        console.log("---------------------");
        console.log('beforeUpdate')
        console.log('Before Updating the data');
        console.log(this.todos);
        console.log("---------------------");
    },
    updated(){
        console.log("---------------------");
        console.log('updated');
        console.log('After Updating the data');
        console.log(this.todos);

        localStorage.setItem(`todos`, JSON.stringify(this.todos));
        console.log('Data saved to LocalStorage');
        console.log("---------------------");
        
    }
};

Vue.createApp(handleTodos).mount('#app')