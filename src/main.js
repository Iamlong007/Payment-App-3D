import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import '@/assets/css/tailwind.css';
require('typeface-space-mono')
require("typeface-roboto");
require("typeface-playfair-display");
require("typeface-open-sans");
require("typeface-nunito");
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css";
import VueTheMask from 'vue-the-mask'
import vuetify from './plugins/vuetify';



Vue.use(VueTheMask)


Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },

  vuetify,
  render: h => h(App)
}).$mount('#app')
