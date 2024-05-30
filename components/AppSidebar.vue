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
        {{ user.name }}
      </p>
    </div>

    <div v-if="user.role === 'admin'" class="my-5">
      <PanelMenu :model="itemAdmin" class="w-full" />
    </div>

    <div v-if="user.role === 'opd'" class="my-5">
      <PanelMenu :model="itemOpd" class="w-full" />
    </div>

    <div v-if="user.role === 'assessment'" class="my-5">
      <PanelMenu :model="itemAssessor" class="w-full" />
    </div>
  </div>
</template>

<script setup>
const userCookie = useCookie("user");
const user = userCookie.value;

const itemAdmin = ref([
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

const itemOpd = ref([
  {
    label: "Input Dokumen",
    icon: "pi pi-file",
    items: [
      {
        label: "Data Aplikasi",
        icon: "pi pi-file",
         command: () => {
          navigateTo("/opd/data_aplikasi");
         },
      },
      {
        label: "Dokumen Proses Assessment",
        icon: "pi pi-file",
       command: () => {
         navigateTo("/opd/dokumen_proses");
      },
      },
      {
        label: "Dokumen Proses pengajuan Hosting dan Sub-domain",
        icon: "pi pi-file",
        // command: () => {
        //   navigateTo("/opd/hosting-subdomain");
        // },
      },
    ],
  },
  {
    label: "Status Assessment",
    icon: "pi pi-building-columns",
    // command: () => {
    //   navigateTo("/opd/status-assessment");
    // },
  },
  {
    label: "Assessment Selesai",
    icon: "pi pi-building-columns",
    // command: () => {
    //   navigateTo("/opd/assessment-selesai");
    // },
  },
]);

const itemAssessor = ref([
  {
    label: "Assessment Diajukan",
    icon: "pi pi-building-columns",
    // command: () => {
    //   navigateTo("/assessor/assessment-diajukan");
    // },
  },
  {
    label: "Status Assessment",
    icon: "pi pi-building-columns",
    // command: () => {
    //   navigateTo("/assessor/status-assessment");
    // },
  },
  {
    label: "Assessment Selesai",
    icon: "pi pi-building-columns",
    // command: () => {
    //   navigateTo("/assessor/assessment-selesai");
    // },
  },
]);
</script>
