<template>
  <button class="todos__clear-btn">Clear completed</button>
</template>

<style scoped>
.todos__clear-btn {
  position: relative;
  align-self: flex-end;
  margin: 0 10px 0 0;
  padding-bottom: 3px;
  font-size: 16px;
  line-height: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.todos__clear-btn::after {
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

.todos__clear-btn:hover::after,
.todos__clear-btn:focus::after {
  width: 100%;
  left: 0;
}
</style>
