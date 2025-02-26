<script setup>
import { ref } from 'vue';
const props = defineProps({
  content: String,
  writer: String
});

const content = ref(props.content);
const writer = ref(props.writer);

</script>
<template>
  <div class="comment">
    <div class="writer">
      {{ writer }}
    </div>
    <div>
      {{ content }}
    </div>
  </div>
</template>
<style scoped>
.comment {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  border: 1px solid white;
}

.writer {
  background-color: #AAAAAA;
}
</style>