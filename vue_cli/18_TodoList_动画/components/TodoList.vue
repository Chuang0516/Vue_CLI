<template>
    <ul class="todoList">
        <TransitionGroup enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__bounceOutLeft">
            <TodoListItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj">
            </TodoListItem>
        </TransitionGroup>
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
