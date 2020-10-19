import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css' 

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

Vue.config.productionTip = false;

Vue.component('DataTable', DataTable);
Vue.component('Column', Column);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
