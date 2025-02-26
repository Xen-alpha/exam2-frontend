<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  id: Number,
  title: String,
  writer: String,
  likes: Number
});

const id = ref(props.id);
const title = ref(props.title);
const writer = ref(props.writer);
const likes = ref(props.likes);

const linkref = ref("/" + props.id);

</script>
<template>
  <div class="list-item">
    <div class="post-id">
      {{ id }}
    </div>
    <div class="post-title">
      <RouterLink :to=linkref>{{ title }}</RouterLink>
    </div>
    <div class="post-writer">
      {{ writer }}
    </div>
    <div class="post-likes">
      {{ likes }}
    </div>
  </div>
</template>
<style scoped>
.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  border: 1px solid gray;
  padding: .5rem;
}

.post-id {
  background-color: lightblue;
  font-size: small;
}
</style>