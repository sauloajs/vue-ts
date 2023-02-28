<script setup lang="ts">
import TimeLine from '../components/TimeLine.vue';
</script>

<template>
  <div class="section">
    <div class="container">
    <RouterView />
    <Suspense>
      <template #default>
        <TimeLine />
      </template>
      <template #fallback>
        <progress class="progress is-primary is-small" />
      </template>
    </Suspense>
    </div>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css";
</style>
