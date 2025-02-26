<script setup>
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import ListItemComponent from './ListItemComponent.vue';
import useBoardStore from '../store/BoardStore.js';

let boardStore = useBoardStore();
let postlist = ref(boardStore.getResult);
onMounted(() => {
  axios.get("/api/board/list")
    .then((response) => {
      boardStore.setResultList(response.data.result);
      postlist.value = boardStore.getResult;
      return;
    }).catch((e) => {
      console.log("게시판 정보 불러오기 실패: " + e);
    });
})
</script>
<template>
  <div id="boardbox">
    <div>게시판</div>
    <RouterLink to="create">글 쓰기</RouterLink>
    <div id="item-container" :v-bind=postlist v-for="post in postlist">
      <ListItemComponent v-bind=post :id=post.idx :title=post.title :writer=post.writer :likes=post.commentsNumber />
    </div>
  </div>
</template>
<style scoped>
#boardbox {
  width: 64em;
  background-color: azure;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 40rem;
}
</style>