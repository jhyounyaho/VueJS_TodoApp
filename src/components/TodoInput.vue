<!-- TodoInput.vue Presentational Component -->
<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!--button v-on:click="addTodo">add</button-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!-- you can use custom content here to overwrite default conten -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        내용을 입력하세요.
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    // 할 일 추가 기능
    addTodo() {
      if (this.newTodoItem !== '') {
        //this.$emit("addTodoItem", this.newTodoItem.trim());
        this.$store.commit('addOneItem', this.newTodoItem.trim());
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal,
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: #ffffff;
    height: 58px;
    line-height: 58px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: #ffffff;
    vertical-align: middle;
    cursor: pointer;
  }
  .closeModalBtn {
    color: #42b983;
    cursor: pointer;
    position: absolute;
    margin-left: 120px;
  }
</style>>