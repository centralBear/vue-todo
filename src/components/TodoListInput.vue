<template>
  <input
    class="todos__main-input"
    placeholder="What should be done?"
    spellCheck="false"
    @keypress.enter="onAddTodo"
  />
</template>

<script>
export default {
  emits: ["addTodo"],
  methods: {
    onAddTodo(evt) {
      const title = evt.target.value.trim();
      if (title) {
        this.$emit("addTodo", title);
        evt.target.value = "";
      }
    },
  },
};
</script>

<style scoped>
.todos__main-input {
  width: 100%;
  padding: 10px 20px;
  font-size: 30px;
  line-height: 30px;
  border: 1px solid #000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  outline: none;
}
</style>
