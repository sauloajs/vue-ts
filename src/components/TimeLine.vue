<script setup lang="ts">
const periods = ["Today", "This Week", "This Month"];
</script>

<template>
  <nav class="is-primary panel">
    <div class="panel-tabs">
      <a v-for="period of periods" :key="period" :href="period">{{ period }}</a>
    </div>
  </nav>
</template>
