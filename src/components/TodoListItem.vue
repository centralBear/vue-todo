<template>
  <li class="todos__list-item">
    <input
      type="checkbox"
      class="todos__checkbox visuallyhidden"
      :id="'checkbox' + todo.id"
      :checked="todo.isComplete"
      @change="$emit('toggleTodoCompleteness', todo.id)"
    />
    <label class="todos__checkbox-label" :for="'checkbox' + todo.id" />
    <input
      class="todos__task-input"
      spellcheck="false"
      :value="todo.title"
      @change="onRedactTodo"
    />
    <button
      class="todos__delete-btn"
      type="button"
      @click="$emit('deleteTodo', todo.id)"
    />
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["deleteTodo", "toggleTodoCompleteness", "redactTodo"],
  methods: {
    onRedactTodo(evt) {
      const newTitle = evt.target.value.trim();
      if (newTitle) {
        this.$emit("redactTodo", { id: this.todo.id, newTitle });
      }
    },
  },
};
</script>

<style scoped>
.todos__list-item {
  position: relative;
  border: 1px solid #000;
  border-top: none;
  overflow: hidden;
}

.todos__list-item:first-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.todos__checkbox-label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 44px;
  height: 44px;
  cursor: pointer;
}

.todos__checkbox-label::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  display: block;
  width: 19px;
  height: 19px;
  border: 1px solid #000;
  border-radius: 50%;
}

.todos__checkbox-label::after {
  content: "";
  position: absolute;
  top: 14px;
  left: 16px;
  display: none;
  width: 18px;
  height: 13px;
  background-image: url(~@/assets/check.svg);
  background-repeat: no-repeat;
}

.todos__checkbox:checked ~ .todos__checkbox-label::after {
  display: block;
}

.todos__checkbox:checked ~ .todos__task-input {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
}

.todos__task-input {
  width: 100%;
  padding: 10px 43px 10px 44px;
  font-size: 20px;
  line-height: 20px;
  border: none;
  outline: none;
}

.todos__delete-btn {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 43px;
  height: 43px;
  opacity: 0;
  background-color: transparent;
  background-image: url(~@/assets/delete.svg);
  background-position: right 10px top 10px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
}

.todos__list-item:hover .todos__delete-btn,
.todos__delete-btn:focus {
  opacity: 1;
}
</style>
