<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useUserStore } from "../stores/user";
import MyUser from "./MyUser.vue";
const useUser = useUserStore();
onMounted(() => {
  useUser.getUser();
});
const currentPage = ref(1);

const totalPage = computed(() => {
  if (useUser.listUsers.length % 6 == 0) {
    return parseInt(useUser.listUsers.length / 6);
  } else {
    return parseInt(useUser.listUsers.length / 6) + 1;
  }
});
watch(totalPage, (newValue, oddValue) => {
  if (newValue === 1) {
    currentPage.value = 1;
  }
});
</script>

<template>
  <table class="table-fixed text-[13px] mt-4 text-left">
    <thead>
      <tr class="border-t">
        <th><input type="checkbox" class="w-[18px] h-[18px]" /></th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in useUser.listUsers"
        :key="user.id"
        class="hover:bg-[#e9e9e9] border-t"
      >
        <MyUser
          :user="user"
          v-if="6 * (currentPage - 1) < user.id && user.id <= 6 * currentPage"
        >
        </MyUser>
      </tr>
    </tbody>
  </table>
  <div class="flex justify-end items-center mt-5 mr-7" v-if="totalPage > 1">
    <div v-for="i in totalPage" :key="i">
      <button
        @click="currentPage = i"
        :class="
          currentPage === i
            ? 'px-2 mx-2 bg-sky-700 text-white rounded-sm'
            : 'px-2 mx-2'
        "
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<style scoped>
th {
  padding: 12px 15px;
}
tr:nth-child(even) {
  background-color: #fcfcfc;
}
</style>
