import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth.module';
import pdf from './pdf.module'
Vue.use(Vuex);

const store = new Vuex.Store({

  modules: {
    auth,
    pdf
  }
});

export default store;