<script setup lang="ts">
import { DateTime } from "luxon";
import PostWriter from "../components/PostWriter.vue";
import { TimeLinePost } from "../posts";

const post: TimeLinePost = {
  id: "12",
  title: "Post title",
  created: DateTime.now(),
};
</script>

<template>
  New Post

  <PostWriter :post="post" />
</template>
