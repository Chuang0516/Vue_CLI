<template>
    <div class="todo-footer" v-show="total">
        <label><input type="checkbox" v-model="isAll" /> 已完成{{ doneTotal }} / 全部 {{ total }}</label>
        <button @click="clearAll">清除已完成</button>
        <button @click="reverseAll">倒序</button>
    </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    props: ['todos', 'reverseTodos'],
    computed: {
        total() {
            return this.todos.length;
        },
        doneTotal() {
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        },
        // isAll() {
        //     return this.doneTotal === this.total && this.total > 0;
        // },
        isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0;
            },
            set(value) {
                this.$emit('checkAllTodo', value)
            }
        }
    },
    methods: {
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked)
        // }
        clearAll() {
            this.$emit('clearAllTodo')
        },
        reverseAll() {
            this.reverseTodos();
        }
    }
}
</script>

<style>
.todo-footer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
}

.todo-footer label {
    flex: 8.5;
    margin: 0 10px;
}

.todo-footer button {
    flex: 1.5;
    width: 10%;
    height: 32px;
    margin: 0 10px;
}
</style>
