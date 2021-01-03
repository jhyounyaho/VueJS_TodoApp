<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i 
          class="fas fa-check checkBtn shadow" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>  
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt shadow"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      console.log(index)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #ffffff;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  i {
    cursor: pointer;
  }
</style>