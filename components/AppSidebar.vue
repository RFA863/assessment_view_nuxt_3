<template>
  <div class="w-[280px] bg-slate-800 min-h-screen text-white">
    <div class="flex justify-center my-5">
      <img
        src="/img/logo/kota_bogor.png"
        alt="logo kota bogor"
        class="w-[90px]"
      />
    </div>

    <div class="flex justify-center">
      <p class="px-2 border-b-2 border-white w-fit font-medium text-2xl">
        OPD DLH
      </p>
    </div>
    <div class="my-5">
      <PanelMenu :model="items" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "User",
    icon: "pi pi-user",
    command: () => {
      navigateTo("/admin/user");
    },
  },
  {
    label: "OPD",
    icon: "pi pi-building-columns",
    command: () => {
      navigateTo("/admin/opd");
    },
  },
]);
</script>
