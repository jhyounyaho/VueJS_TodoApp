<!-- TodoFooter.vue Presentational Component -->
<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    // 할 일 모두 삭제 기능
    clearTodo() {
      this.$emit("clearAll");
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