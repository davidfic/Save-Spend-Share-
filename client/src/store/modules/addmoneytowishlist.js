import axios from 'axios';

// const state = {
//     wishlistTotal: []
// };

// const getters = {
//     // allChores: (state) => state.chores
// };

const actions  = {
    async addMoneyToWishlist({commit}, amount, name) {
        console.log(name)
        const response = await axios.post('http://localhost:3333/wishlists', {amount});
        
        // commit('addMoney', response.data, amount);
        // commit('increment', amount);
    }
};

// const mutations = {
//     // setChores:  (state, chores) => (state.chores = chores),
//     addMoney (state, data, amount) {
//         console.log(data[2].added)
//         // console.log(name)
//         console.log( amount)
//         data[2].added += amount
        
//     }
//     // addMoneyToWishlist: (state, amount) => state.wishlists.unshift(wishlist)
// };

export default {
    // state,
    actions,
    // mutations
};