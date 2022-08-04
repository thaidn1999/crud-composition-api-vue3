<template>
  <td><input type="checkbox" class="w-[18px] h-[18px]" /></td>
  <td>{{ propsUser.user.name }}</td>
  <td>{{ propsUser.user.email }}</td>

  <td>
    {{ propsUser.user.address.street }}
  </td>
  <td>{{ propsUser.user.phone }}</td>
  <td>
    <span
      class="mr-4 text-[#FFC107] text-[18px] cursor-pointer"
      @click="useUser.changeDialog('Edit', propsUser)"
    >
      <i class="fa-solid fa-pencil"></i>
    </span>
    <span
      class="text-[#F44336] text-[18px] cursor-pointer"
      @click="useUser.deleteUser(propsUser.user.id)"
    >
      <i class="fa-solid fa-trash"></i>
    </span>
  </td>
</template>

<script setup>
import { defineProps } from "vue";
import { useUserStore } from "../stores/user";
const useUser = useUserStore();
const propsUser = defineProps(["user"]);
</script>

<style scoped>
td {
  padding: 12px 15px;
}
</style>
