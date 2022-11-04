<template>
    <div>
        <li class="todoList-item">
            <label>
                <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
                <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
                <div class="todoEdit-input" v-show="todoObj.isEdit">
                    <input type="text" :value="todoObj.title" @blur="handleBlur(todoObj)" ref="editInput" />
                </div>
            </label>
            <button v-show="!todoObj.isEdit" class="edit-btn" @click="handleEdit(todoObj)">编辑</button>
            <button @click="handleDelete(todoObj.id)">删除</button>
        </li>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'TodoItem',
    props: ['todoObj'],
    methods: {
        handleCheck(id) {
            this.$bus.$emit('checkTodo', id);
        },
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                // this.$bus.$emit('deleteTodo', id);
                pubsub.publish('deleteTodo', id);
            }
        },
        handleEdit(todoObj) {
            // this.$set(todoObj, 'isEdit', true);
            if (Object.prototype.hasOwnProperty.call(todoObj, 'isEdit')) {
                todoObj.isEdit = true;
            } else {
                this.$set(todoObj, 'isEdit', true);
            }
            this.$nextTick(() => {
                this.$refs.editInput.focus();
            })
        },
        handleBlur(todoObj) {
            todoObj.isEdit = false;
            if (!this.$refs.editInput.value.trim()) this.handleDelete(todoObj.id)
            this.$bus.$emit('updateTodo', todoObj.id, this.$refs.editInput.value)
        },
    },
}
</script>

<style>
.todoList .todoList-item:hover button {
    opacity: 100;
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
    display: flex;
    height: 100%;
    flex: 8;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
}

.todoList .todoList-item label span {
    margin-left: 10px;
}

.todoList .todoList-item label .todoEdit-input {
    margin-left: 10px;
    height: 60%;
    display: flex;
    align-items: center;
    width: 80%;
    background-color: #fff;
    border: 1px solid rgb(178, 178, 178);
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(0, 255, 208, 0.4);
}

.todoList .todoList-item label .todoEdit-input input {
    display: block;
    width: 98%;
    height: 90%;
    margin: auto;
    padding-left: 5px;
    box-sizing: border-box;
    border: none;
    outline: none;
}

.todoList .todoList-item label .todoEdit-input:focus-within {
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

.todoList .todoList-item button {
    flex: 1;
    opacity: 0;
    width: 10%;
    height: 28px;
    margin: 0 10px 0 0;
    cursor: pointer;
}

.todoList .todoList-item .edit-btn {
    background-color: rgb(6, 197, 79);
}
</style>
