import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'


const pinia = createPinia().use(createPersistedState());

createApp(App).use(router).use(pinia).mount('#app')
