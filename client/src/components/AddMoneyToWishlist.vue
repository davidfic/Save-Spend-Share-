<template>
    <div>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="amount" placeholder="Enter Amount">
                <input type="submit" value="Add Money">
            </form>
        </div>

    </div>
</template>

<script>
// import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: "AddMoneyToWishlist",
    data() {
        return {
            amount: ''
        }
    },
    methods: {
        // ...mapActions(['addMoneyToWishlist']),
        onSubmit(e) {
            e.preventDefault();
            console.log('amount is ' + this.amount)
            axios.post('http://localhost:5000/wishlists', {amount: this.amount})
                .then(function(response) {
                    console.log('response is ' + response ) ;
                })
                .catch(function (error) {
                    console.log(error);
                })
            
            // this.addMoneyToWishlist(this.amount, this.name);
        },
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
