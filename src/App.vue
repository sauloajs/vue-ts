<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="section">
    <div class="container">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css";
@import "highlight.js/styles/atom-one-dark.css";

ul {
  list-style: revert !important;
  list-style-position: revert !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: revert !important;
  margin: 10px 0 !important;
}

pre {
  margin: 10px 0 !important;
}

p {
  margin: 10px 0 !important;
}
</style>
