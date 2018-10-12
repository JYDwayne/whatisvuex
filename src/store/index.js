import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let dataList = [{
	name: 'wade',
 	number: 3
}, 
{
	name: 'harden',
 	number: 13
}, {
	name: 'gorden',
 	number: 10
}, {
	name: 'arizia',
 	number: 1
}, {
	name: 'yao',
 	number: 11
}, {
	name: 'landary',
 	number: 14
}]
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
    	state.count += payload.number
    }
  },
  actions: {
  	incrementAsync({commit}, payload) {
  		console.log(payload)
  		setTimeout(() =>{
  			commit('increment', payload)
  		}, 3000)
  	}
  }
})

export default store 