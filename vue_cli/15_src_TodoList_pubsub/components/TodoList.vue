<template>
    <ul class="todoList">
        <TodoListItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj">
        </TodoListItem>
    </ul>
</template>

<script>
import TodoListItem from '../components/TodoItem'

export default {
    name: "TodoList",
    components: { TodoListItem },
    props: ['todos']
}
</script>

<style>
.todoList {
    margin: 10px;
    width: 100%;
}
</style>
