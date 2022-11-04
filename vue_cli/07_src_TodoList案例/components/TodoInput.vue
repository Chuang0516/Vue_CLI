<template>
    <div class="todo-input">
        <input type="text" placeholder="请输入你的代办事项 按回车确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name: 'TodoInput',
    props: ['addTodo'],
    data() {
        return {
            title: ''
        };
    },
    methods: {
        add() {
            if (!this.title.trim()) return;
            const todoObj = { id: nanoid(), title: this.title, done: false };
            this.addTodo(todoObj);
            this.title = ''
        }
    }
}
</script>

<style>
.todo-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    border: 1px solid rgb(178, 178, 178);
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0, 255, 208, 0.4);
}

.todo-input input {
    display: block;
    width: 98%;
    height: 90%;
    margin: auto;
    box-sizing: border-box;
    border: none;
    outline: none;
}

.todo-input:focus-within {
    animation: todo-input-border 1.5s infinite;
}

@keyframes todo-input-border {
    0% {
        box-shadow: 0 0 0 0 rgb(0, 255, 208, 0.4);
    }

    100% {
        box-shadow: 0 0 5px 10px rgb(0, 255, 208, 0);
    }
}
</style>
