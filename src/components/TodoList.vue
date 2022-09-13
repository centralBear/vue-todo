<template>
  <ul className="todos__list">
    <todo-list-item
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @delete-todo="$emit('deleteTodo', $event)"
      @toggle-todo-completeness="$emit('toggleTodoCompleteness', $event)"
      @redact-todo="$emit('redactTodo', $event)"
    />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["deleteTodo", "toggleTodoCompleteness", "redactTodo"],
};
</script>

<style scoped>
.todos__list {
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
  margin: 0 0 10px 0;
  padding: 0;
  border-radius: 10px;
}
</style>
