import { defineStore } from "pinia";

const poststore = defineStore("postStore", {  
    persist: {
      storage: sessionStorage
    },
    state: () => ({resultList: {}}),
    getters: {
      getResult : (state) => {return state.resultList;}
    },
    actions: {
      setResultList(result) {
        this.$state.resultList = result;
      }
    }
  }
);

export default poststore;