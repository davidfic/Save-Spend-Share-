<template>
    <div>
        <h3>Chores</h3>
        <AddChore />
        <div class="chores">
        <!-- <h3>Add Chore</h3> -->
            <div v-for="chore in allChores" :key="chore.title" class="chore">
                {{ chore.title }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddChore from './AddChore';

export default {
    name: "Chores",
    components: {
        AddChore,
    },
    methods: {
        ...mapActions(['fetchChores']),
    },
    computed: mapGetters(['allChores']),
    created() {
        this.fetchChores();
    }
}
</script>

<style >
    .chores {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .chore {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }
    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    .is-complete {
        background: #35495e;
        color: #fff;
    }
    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

</style>
