<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" exact-active-class="active" to="/"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" exact-active-class="active" to="/about"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" exact-active-class="active" to="/todos"
            >Todos</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNav"
};
</script>

<style></style>
