<script setup>
import MyHeader from "./components/MyHeader.vue";
import MyTableVue from "./components/MyTable.vue";
import FormPopUp from "./components/formPopUp.vue";
import { useUserStore } from "./stores/user";
import { ref } from "vue";
const test = ref("");
const useUser = useUserStore();
</script>

<template>
  <Teleport to="body">
    <div v-if="useUser.dialog.isShow">
      <div class="wrap"></div>
      <FormPopUp class="fixed z-50 top-[20px] left-[33%]" />
    </div>
  </Teleport>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center mt-20">
      <MyHeader />
      <MyTableVue />
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
}
</style>
