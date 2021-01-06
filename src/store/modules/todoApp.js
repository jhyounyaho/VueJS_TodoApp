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

const state = {
  todoItems: storage.fetch()
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  // 할 일 추가 기능
  addOneItem(state, todoItem) {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  // 할 일 삭제 기능
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  }, 
  // 할 일 완료 기능
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  // 할 일 모두 삭제 기능
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state, 
  getters,
  mutations,
}