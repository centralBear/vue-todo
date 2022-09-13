<template>
  <ul className="todos__sort-list">
    <todo-list-sort-link
      v-for="sortItem in sortData"
      :sortData="sortItem"
      :key="sortItem.type"
    />
  </ul>
</template>

<script>
import TodoListSortLink from "@/components/TodoListSortLink";

export default {
  components: {
    TodoListSortLink,
  },
  data() {
    return {
      sortData: [
        {
          type: "All",
          route: "/",
        },
        {
          type: "Active",
          route: "/active",
        },
        {
          type: "Completed",
          route: "/completed",
        },
      ],
    };
  },
};
</script>

<style scoped>
.todos__sort-list {
  display: flex;
  margin: 0 0 14px 0;
  padding: 0;
  list-style: none;
}

.todos__sort-list-item:first-child {
  margin-left: 20px;
}

.todos__sort-list-item:not(:last-child) {
  margin-right: 20px;
}
</style>
