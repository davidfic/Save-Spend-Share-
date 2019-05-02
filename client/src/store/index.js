import Vuex from 'vuex';
import Vue from 'vue';
import chores from './modules/chores';
import addmoneytowishlist from './modules/addmoneytowishlist';
import Axios from 'axios';
// Load Vuex
Vue.use(Vuex);


// Create store
export default new Vuex.Store( {
    modules: {
        chores,
        addmoneytowishlist

    }
});