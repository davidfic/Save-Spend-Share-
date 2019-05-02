<template>
    <div >
        <div class="container">
            <div v-bind:key="wishlist.id" v-for="wishlist in wishlists">
                <WishlistItem v-bind:wishlist="wishlist" />
            </div>
        </div>
    </div>
</template>

<script>
import WishlistItem from './WishlistItem.vue';

export default {
    name: "Wishlists",
    props:  ["wishlists"],
    components: {
        WishlistItem
    },
    
}
</script>

<style scoped>

</style>

