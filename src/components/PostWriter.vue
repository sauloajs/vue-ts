<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";
import { TimeLinePost } from "../posts";
import { marked } from "marked";
import { debounce } from "lodash";
import highlightjs from "highlight.js";
import { usePosts } from "../stores/posts";
import { useRouter } from "vue-router";

const props = defineProps<{
  post: TimeLinePost;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const contentEditable = ref<HTMLDivElement>();
const html = ref("");

const posts = usePosts();
const router = useRouter();

function parseHtml(markdown: string) {
  return marked.parse(
    markdown,
    {
      gfm: true,
      breaks: true,
      highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
      },
    },
    (err, parseResult) => {
      html.value = parseResult;
    }
  );
}

watch(content, debounce(parseHtml, 300), {
  immediate: true,
});

onMounted(() => {
  if (!contentEditable.value) {
    throw new Error("ContentEditable DOM node was not found");
  }

  contentEditable.value.innerText = content.value;
});

function handleInput() {
  if (!contentEditable.value) {
    throw Error(" DOM node was not found");
  }

  content.value = contentEditable.value?.innerText;
}

async function handleClick() {
  const newPost: TimeLinePost = {
    ...props.post,
    title: title.value,
    markdown: content.value,
    html: html.value,
  };

  await posts.createPost(newPost);

  router.push("/");
}
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label" for="title">Post Title</label>
        <input type="text" class="input" v-model="title" id="title" />
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="column">
      <div v-html="html" />
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <button class="button is-primary is-pulled-right" @click="handleClick">
        Save Post
      </button>
    </div>
  </div>
</template>
