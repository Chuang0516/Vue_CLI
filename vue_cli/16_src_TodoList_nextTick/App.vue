<template>
    <div id="root">
        <TodoInput @addTodo="addTodo"></TodoInput>
        <TodoList :todos="todos"></TodoList>
        <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></TodoFooter>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
    name: 'App',
    components: { TodoInput, TodoList, TodoFooter },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        checkTodo(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) todo.done = !todo.done;
            })
        },
        updateTodo(id, title) {
            this.todos.forEach(todo => {
                if (todo.id === id) todo.title = title;
            })
        },
        deleteTodo(_, id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        checkAllTodo(done) {
            this.todos.forEach(todo => {
                todo.done = done;
            })
        },
        clearAllTodo() {
            this.todos = this.todos.filter(todo => {
                return !todo.done;
            })
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value));
            }
        }
    },
    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo);
        this.$bus.$on('updateTodo', this.updateTodo);
        this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo);
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo');
        this.$bus.$off('updateTodo');
        pubsub.unsubscribe(this.pubId);
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

button {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 97, 76);
    border: none;
    border-radius: 5px;
    outline: none;
}

#root {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 76%;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid rgb(166, 166, 166);
    box-shadow: 0px 0px 5px 1px rgb(134, 134, 134);
    border-radius: 10px;
}
</style>
