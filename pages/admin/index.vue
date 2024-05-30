<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="text-3xl font-semibold">
      Dashboard Admin Assessment Diskominfo Kota Bogor
    </div>
    <div class="my-6 text-justify">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam numquam
      repellat debitis necessitatibus fugiat cumque tempora eligendi quos. Atque
      dolorem aperiam sed, voluptatem veritatis architecto iste libero fugit
      magni ad sint nisi ducimus laudantium accusantium ex doloremque incidunt
      tempora fugiat, aut ut maiores? Voluptate at itaque in. Dolor accusantium,
      id illum nihil suscipit eaque unde, corrupti aliquid rem nemo architecto
      omnis iste repellat in magnam fugit cupiditate quasi quisquam molestiae
      neque ipsam officiis delectus? Tempore in odit quod corporis provident
      maxime, ipsa culpa ipsum id cum expedita omnis aperiam dignissimos
      cupiditate quasi hic vitae sapiente dolore pariatur? Accusamus, vel
      reprehenderit!
    </div>
    <div class="card">
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
          <span
            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
            :style="{ backgroundColor: slotProps.item.color }"
          >
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-3">
            <template #title>
              {{ slotProps.item.status }}
            </template>
            <template #subtitle>
              {{ slotProps.item.date }}
            </template>
            <template #content>
              <img
                v-if="slotProps.item.image"
                :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
                :alt="slotProps.item.name"
                width="200"
                class="shadow-1"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
              <Button label="Read more" text></Button>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const events = ref([
  {
    status: "Input Dokumen Kelengkapan Pengajuan Assessment",
    // date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
  },
  {
    status: "Processing",
    // date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Shipped",
    // date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Delivered",
    // date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
  },
]);
</script>
