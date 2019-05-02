<template>
    <div>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Chore">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddChore",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addChore']),
        onSubmit(e) {
            e.preventDefault();
            this.addChore(this.title);
        }
    }
};
</script>

<style >
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }

    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px #41b883 solid;
        cursor: pointer;
    }
</style>
