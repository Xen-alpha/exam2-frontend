<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import CommentWriter from './CommentWriter.vue';
//import usePostStore from '../../store/PostStore.js';

let route = useRoute();

const title = ref("");
const content = ref("");
const writer = ref("");

onMounted(() => {
  axios.get("/api/board/" + route.params.idx)
    .then((response) => {
      const result = response.data.result;
      title.value = result.title;
      content.value = result.content;
      writer.value = result.writer;
      return;
    }).catch((e) => {
      console.log("게시판 정보 불러오기 실패: " + e);
    });
})

</script>
<template>
  <div class="post-title">제목: {{ title }}</div>
  <div class="post-writer">작성자: {{ writer }}</div>
  <div class="post-content">{{ content }}</div>
  <div class="post-comment">
    <div>댓글</div>
    <CommentWriter />
    <div class="comment-container"></div>
  </div>
</template>
<style scoped>
.post-title {}
</style>