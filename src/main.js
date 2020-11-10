import Vue from 'vue'
import VueQuill from "vue-quill-editor";
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme

import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/app.css"
import "./services/nedb";

Vue.config.productionTip = false

Vue.use(VueQuill)

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
