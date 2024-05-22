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
    <div>
      <PanelMenu :model="items" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Files",
    icon: "pi pi-file",
    items: [
      {
        label: "Documents",
        icon: "pi pi-file",
        items: [
          {
            label: "Invoices",
            icon: "pi pi-file-pdf",
            items: [
              {
                label: "Pending",
                icon: "pi pi-stop",
              },
              {
                label: "Paid",
                icon: "pi pi-check-circle",
              },
            ],
          },
          {
            label: "Clients",
            icon: "pi pi-users",
          },
        ],
      },
      {
        label: "Images",
        icon: "pi pi-image",
        items: [
          {
            label: "Logos",
            icon: "pi pi-image",
          },
        ],
      },
    ],
  },
  {
    label: "Cloud",
    icon: "pi pi-cloud",
    items: [
      {
        label: "Upload",
        icon: "pi pi-cloud-upload",
      },
      {
        label: "Download",
        icon: "pi pi-cloud-download",
      },
      {
        label: "Sync",
        icon: "pi pi-refresh",
      },
    ],
  },
  {
    label: "Devices",
    icon: "pi pi-desktop",
    items: [
      {
        label: "Phone",
        icon: "pi pi-mobile",
      },
      {
        label: "Desktop",
        icon: "pi pi-desktop",
      },
      {
        label: "Tablet",
        icon: "pi pi-tablet",
      },
    ],
  },
]);
</script>
