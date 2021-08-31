import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
