<script setup lang="ts">
import { DateTime } from 'luxon';
import { computed, ref } from 'vue';
import { TimeLinePost, today, thisMonth, thisWeek } from '../posts';

import TimeLineItem from './TimeLineItem.vue';

const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number]; 

const selectedPeriod = ref<Period>("Today");

function selectPeriod(period: Period) {
    selectedPeriod.value = period;
}

const posts = computed<TimeLinePost[]>(() => [
    today,
    thisWeek,
    thisMonth
].map(post => {
    return {
        ...post,
        created: DateTime.fromISO(post.created)
    }
}).filter(post => {
    if (selectedPeriod.value === "Today") {
        return post.created >= DateTime.now().minus({ day: 1 })
    }
    
    if (selectedPeriod.value === "This Week") {
        return post.created >= DateTime.now().minus({ week: 1 })
    }

    return post
}))
</script>

<template>
  <nav class="is-primary panel">
    <div class="panel-tabs">
      <a 
        v-for="period of periods" 
        :key="period" 
        :href="period"
        :class="{ 'is-active': period === selectedPeriod }"
        @click.prevent="selectPeriod(period)"
    >
        {{ period }}
      </a>
    </div>

    <TimeLineItem v-for="post of posts" :key="post.id" :post="post" />
  </nav>
</template>
