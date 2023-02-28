<script setup lang="ts">
import { periods } from "../constants";
import { usePosts } from "../stores/posts";
import TimeLineItem from "./TimeLineItem.vue";

const postsStore = usePosts();

await postsStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <div class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :href="period"
        :class="{ 'is-active': period === postsStore.selectedPeriod }"
        @click.prevent="postsStore.setSelectedPeriod(period)"
      >
        {{ period }}
      </a>
    </div>

    <TimeLineItem
      v-for="post of postsStore.filteredPosts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>
