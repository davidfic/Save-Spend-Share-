import axios from 'axios';

const state = {
    chores: []
};

const getters = {
    allChores: (state) => state.chores
};

const actions  = {
    async fetchChores({commit}) {
        const response = await axios.get('http://localhost:3333/chores');
        // const response = await axios.get('http://localhost:5000/chores');
        commit('setChores', response.data);
    },
    async addChore({commit}, title) {
        const response = await axios.post('http://localhost:3333/chores', {title, completed: false});
        commit('newChore', response.data);
    }
};

const mutations = {
    setChores:  (state, chores) => (state.chores = chores),
    newChore: (state, chore) => state.chores.unshift(chore)
};

export default {
    state,
    getters,
    actions,
    mutations
};