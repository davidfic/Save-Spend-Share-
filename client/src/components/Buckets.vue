<template>
    <div >
        <div class="container">
            <div v-bind:key="bucket.id" v-for="bucket in buckets">
                <BucketCard v-bind:bucket="bucket" v-on:add-money="$emit('add-money', bucket.id, 100)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BucketCard from './BucketCard.vue';

    export default {
        name: "Buckets",
        components: {
            BucketCard
        },
        props:  ["buckets" ]
    }
</script>

<style scoped>

</style>
