import Vue from 'vue'
import App from './App.vue'



import '../src/assets/css/font-awesome/css/font-awesome.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/pe-icon-7-stroke/css/pe-icon-7-stroke.css'
import '../src/assets/css/style.css'
Vue.config.productionTip = false
new Vue({


  render: h => h(App)
}).$mount('#app')
