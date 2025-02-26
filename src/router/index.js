import { createRouter, createWebHistory } from "vue-router";
import BoardComponent from '../components/BoardComponent.vue';
import PostComponent from '../components/post/PostComponent.vue';
import PostWriter from '../components/post/PostWriter.vue'

const router = createRouter(
  {
    history : createWebHistory(),
    routes : [
      { path: "/", component: BoardComponent},
      { path: '/:idx', component: PostComponent
      },
      {
        path: '/create', component: PostWriter
      }
    ]
  }
);

export default router;