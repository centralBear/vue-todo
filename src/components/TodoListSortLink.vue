<template>
  <li className="todos__sort-list-item">
    <router-link
      :to="sortData.route"
      class="todos__sort-link"
      active-class="todos__sort-link--active"
      exact-active-class="todos__sort-link--active"
    >
      {{ sortData.type }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    sortData: {
      type: Object,
      requierd: true,
    },
  },
};
</script>

<style scoped>
.todos__sort-link {
  position: relative;
  display: block;
  padding-bottom: 3px;
  font-size: 16px;
  line-height: 14px;
  color: #000;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}

.todos__sort-link:visited {
  color: inherit;
}

.todos__sort-link::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.todos__sort-link:hover::after,
.todos__sort-link:focus::after,
.todos__sort-link--active::after {
  width: 100%;
  left: 0;
}
</style>
