<template>
    <div>
        <div class="container">
            <form @submit="addTodo">
                <input type="text" v-model="title" name="title" placeholder="Add Todo...">
                <input type="submit" value="Submit" class="btn">
            </form>
        </div>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                id: uuid.v4(), 
                title: this.title,
                completed: false
            }
            //send to parent
            this.$emit('add-todo', newTodo)
            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px
    }
</style>