<script setup>
import { reactive } from "vue";
// import { v1 } from "uuid";
import { useUserStore } from "../stores/user";
const useUser = useUserStore();

const _newUser = reactive({
  id: useUser.dialog.newUser.user.id,
  name: useUser.dialog.newUser.user.name,
  email: useUser.dialog.newUser.user.email,
  address: {
    street: useUser.dialog.newUser.user.address.street,
  },
  phone: useUser.dialog.newUser.user.phone,
});

const addNewUser = () => {
  useUser.addUser(_newUser);
  useUser.dialog.isShow = !useUser.dialog.isShow;
};
</script>
<template>
  <form
    @submit.prevent="addNewUser()"
    class="w-[450px] mx-auto rounded-sm bg-white border"
  >
    <div
      class="header-form flex justify-between items-center px-7 py-5 text-[24px] text-[#566787] border-b border-slate-300"
    >
      <h2>{{ useUser.dialog.title }} Employee</h2>
      <span
        class="inline-block pl-4 cursor-pointer"
        @click="useUser.changeDialog('Add')"
      >
        <i class="fa-solid fa-xmark"> </i>
      </span>
    </div>
    <div class="main-form px-7 py-5">
      <div class="form-group mb-4">
        <label for="lastNameInp"> Name </label>
        <input
          type="text"
          v-model="_newUser.name"
          id="lastNameInp"
          class="w-full mt-2 pl-3 py-1 border border-[#ced4da] rounded-sm focus:outline-none focus-visible:outline-none"
        />
      </div>
      <div class="form-group mb-4">
        <label for="emailInput"> Email </label>
        <input
          type="text"
          v-model="_newUser.email"
          id="emailInput"
          class="w-full mt-2 pl-3 py-1 border border-[#ced4da] rounded-sm focus:outline-none focus-visible:outline-none"
        />
      </div>

      <div class="form-group mb-4">
        <label for="addressInput"> Address </label>
        <textarea
          id="addressInput"
          v-model="_newUser.address.street"
          class="w-full mt-2 pl-3 py-1 border border-[#ced4da] rounded-sm focus:outline-none focus-visible:outline-none"
        >
        </textarea>
      </div>

      <div class="form-group mb-4">
        <label for="phoneInput"> Phone </label>
        <input
          type="text"
          v-model="_newUser.phone"
          id="phoneInput"
          class="w-full mt-2 pl-3 py-1 border border-[#ced4da] rounded-sm focus:outline-none focus-visible:outline-none"
        />
      </div>
    </div>
    <div
      class="footer-form border-t border-slate-300 flex justify-end items-center px-7 py-5"
    >
      <button class="px-3 py-[6px] mr-4">Cancel</button>
      <button
        class="px-3 py-[6px] bg-[#28a745] text-white rounded min-w-[100px]"
      >
        {{ useUser.dialog.title }}
      </button>
    </div>
  </form>
</template>

<style></style>
