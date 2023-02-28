<script setup lang="ts">
import { ref } from "vue";
import { TimeLinePost } from "../posts";
const props = defineProps<{
  post: TimeLinePost;
}>();

const title = ref(props.post.title);
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label" for="title">Post Title</label>
        <input type="text" class="input" v-model="title" id="title" />
        {{ title }}
      </div>
    </div>
  </div>
</template>
