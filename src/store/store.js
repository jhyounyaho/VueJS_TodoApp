import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    // life cycle hook - 인스턴스가 생성되자마자 호출 
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {

  },
});