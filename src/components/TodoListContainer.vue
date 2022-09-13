<template>
  <main class="todos container">
    <todo-list-sort />
    <todo-list-input @add-todo="onAddTodo" />
    <router-view
      :todos="currentTodos"
      @delete-todo="onDeleteTodo"
      @toggle-todo-completeness="onToggleTodoComleteness"
      @redact-todo="onRedactTodo"
    />
    <todo-list-clear-button @click="onDeleteCompletedTodos" />
  </main>
</template>

<script>
import TodoListSort from "@/components/TodoListSort";
import TodoListInput from "@/components/TodoListInput";
import TodoListClearButton from "@/components/TodoListClearButton";

export default {
  components: {
    TodoListSort,
    TodoListInput,
    TodoListClearButton,
  },
  data() {
    return {
      localStorageName: "vue-todos",
      todos: [],
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem(this.localStorageName))) {
      this.todos = JSON.parse(localStorage.getItem(this.localStorageName));
    }
  },
  updated() {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.todos));
  },
  computed: {
    completedTodos() {
      return this.todos.filter((todo) => todo.isComplete);
    },
    notCompletedTodos() {
      return this.todos.filter((todo) => !todo.isComplete);
    },
    currentTodos() {
      let currentTodos;
      switch (this.$route.fullPath) {
        case "/":
          currentTodos = this.todos;
          break;
        case "/active":
          currentTodos = this.notCompletedTodos;
          break;
        case "/completed":
          currentTodos = this.completedTodos;
          break;
      }
      return currentTodos;
    },
  },
  methods: {
    getIndex(id) {
      return this.todos.findIndex((todo) => todo.id === id);
    },
    onAddTodo(title) {
      this.todos.push({ id: Date.now(), title, isComplete: false });
    },
    onDeleteTodo(id) {
      this.todos.splice(this.getIndex(id), 1);
    },
    onToggleTodoComleteness(id) {
      this.todos[this.getIndex(id)].isComplete =
        !this.todos[this.getIndex(id)].isComplete;
    },
    onRedactTodo({ id, newTitle }) {
      this.todos[this.getIndex(id)].title = newTitle;
    },
    onDeleteCompletedTodos() {
      this.todos = this.notCompletedTodos;
    },
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
</style>
