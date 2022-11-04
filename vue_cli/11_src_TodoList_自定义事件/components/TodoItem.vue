<template>
    <div>
        <li class="todoList-item">
            <label>
                <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
                <span>{{ todoObj.title }}</span>
            </label>
            <button @click="handleDelete(todoObj.id)">删除</button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todoObj', 'checkTodo', 'deleteTodo'],
    methods: {
        handleCheck(id) {
            this.checkTodo(id);
        },
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                this.deleteTodo(id);
            }
        }
    }
}
</script>

<style>
.todoList .todoList-item:hover button {
    display: block;
}

.todoList .todoList-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    border: 1px solid rgb(230, 230, 230);
}

.todoList .todoList-item:hover {
    background-color: rgb(230, 230, 230);
}

.todoList .todoList-item label {
    flex: 9;
    margin: 0 10px;
}

.todoList .todoList-item label span {
    margin-left: 10px;
}

.todoList .todoList-item button {
    flex: 1;
    display: none;
    width: 10%;
    height: 28px;
    margin: 0 10px;
}
</style>
