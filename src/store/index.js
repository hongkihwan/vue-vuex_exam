import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      counter: 0
    },
    actions: {
        addCounter (context) {
            // commit의 대상인 addCounter는 mutations의 메서드를 의미.
            return context.commit('addCounter');
        }
    },
    getters: {
        getCounter(state){
            return state.counter;
        }
    },
    mutations: {
        addCounter: function(state, payload){
            console.log('[payload Value]: ', payload);
            return state.counter++;
        },
        subCounter(state, payload) {
            console.log("[payload Value]: ", payload);
            return state.counter--;
        }
    },
    modules: {

    }
})