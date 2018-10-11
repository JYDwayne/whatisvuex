import Vue from 'vue'
import App from './App.vue'
import Stroe from './store/index'

Vue.config.productionTip = false


console.log(Stroe)

new Vue({
  render: h => h(App),
  Stroe
}).$mount('#app')
