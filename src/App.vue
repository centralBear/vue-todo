<template>
  <app-header />
  <todo-list-container />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import TodoListContainer from "@/components/TodoListContainer";

export default {
  name: "App",
  components: {
    AppHeader,
    TodoListContainer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.visuallyhidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.container {
  width: 600px;
  margin: 0 auto;
  padding: 0 40px;
}
</style>
