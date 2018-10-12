import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    carInfoList: []
  },
  mutations: {
    increment (state, payload) {
    	state.count += payload.number
    },
    saveCarlist(state, payload) {
    	state.carInfoList = payload.carInfoList
    }
  },
  actions: {
  	incrementAsync({commit}, payload) {
  		console.log(payload)
  		setTimeout(() =>{
  			commit('increment', payload)
  		}, 3000)
  	},
  	saveCarlistAsync({commit}, payload) {
  		commit('increment', payload)
  	}
  }
})

export default store 