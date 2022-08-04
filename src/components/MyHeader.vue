<script setup>
import { useUserStore } from "../stores/user";
const useUser = useUserStore();
</script>

<template>
  <div class="text-white py-4 px-7 grid grid-cols-2 bg-[#435d7d] rounded-t-lg">
    <h2 class="title text-left text-2xl">Manager <b>Employees</b></h2>
    <div class="button-header text-right text-[13px]">
      <div
        class="inline-block cursor-pointer bg-[#dc3545] rounded-sm px-3 py-[6px] mr-4"
        @click="useUser.deleteAllUser"
      >
        <span class="inline-block rounded-[50%] bg-white w-4 h-4 mr-1">
          <i class="fa-solid fa-minus text-[#dc3545] pr-[2px]"> </i>
        </span>
        <span>Delete</span>
      </div>
      <div
        class="inline-block cursor-pointer bg-[#28a745] rounded-sm px-3 py-[6px] mr-4"
        @click="useUser.changeDialog('Add')"
      >
        <span class="inline-block rounded-[50%] bg-white w-4 h-4 mr-1">
          <i class="fa-solid fa-plus text-[#28a745] pl-[2px] mr-1"> </i>
        </span>
        <span>Add New Employee</span>
      </div>
    </div>
  </div>
</template>

<style></style>
