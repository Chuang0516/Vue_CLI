<template>
    <div id="root">
        <TodoInput :addTodo="addTodo"></TodoInput>
        <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></TodoList>
        <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"
            :reverseTodos="reverseTodos"></TodoFooter>
    </div>
</template>

<script>
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
    name: 'App',
    components: { TodoInput, TodoList, TodoFooter },
    data() {
        return {
            todos: [
                { id: '001', title: '吃饭', done: true },
                { id: '002', title: '打篮球', done: false },
                { id: '003', title: '打代码', done: true }
            ]
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
        deleteTodo(id) {
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
        reverseTodos() {
            this.todos.reverse();
        }
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
