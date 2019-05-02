<template>
    <header class="header">
        <div class="horizontal-center ">
            <h1>Save Spend Share</h1>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/wishlists">Wishlists</router-link> |
            <router-link to="/chores">Chores</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template> 


<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
    }
</style>