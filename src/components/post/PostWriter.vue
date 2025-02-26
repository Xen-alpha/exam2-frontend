<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const title = ref("");
const content = ref("");
const writer = ref("");

const submission = (ev) => {
  axios.post("/api/board/create",
    {
      "title": title.value,
      "content": content.value,
      "writer": writer.value
    }
  ).then((result) => {
    console.log(result.data);
  }).catch((e) => {
    console.log("에러: " + e);
  })
};
const changeTitle = (ev) => {
  title.value = ev.target.value
};
const changeContent = (ev) => {
  content.value = ev.target.value
};
const changeWriter = (ev) => {
  writer.value = ev.target.value
};


</script>
<script>
import axios from 'axios';
</script>
<template>
  <div style="text-align: center;">
    게시글 작성
  </div>
  <div style="margin:1rem;">
    제목:
    <input type="text" id="title" @change=changeTitle />
  </div>
  <div style="margin:1rem;">
    작성자:
    <input type="text" id="writer" @change=changeWriter />
  </div>
  <div style="margin:1rem;">
    내용:
    <input type="text" id="content" @change=changeContent />
  </div>
  <div style="margin:1rem;">
    <RouterLink to="/" id="submit" @click=submission>제출</RouterLink>
  </div>

</template>
<style scoped>
#submit {
  background-color: aquamarine;
}
</style>