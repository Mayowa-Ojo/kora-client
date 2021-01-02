import Vue from 'vue'
import VueQuill from "vue-quill-editor"
import VueTippy from "vue-tippy"
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme

import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/app.css"

Vue.config.productionTip = false

Vue.use(VueQuill)
Vue.use(VueTippy)

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
