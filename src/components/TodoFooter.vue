<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      localStorage.clear();
    },
  },
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
  }  
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>>