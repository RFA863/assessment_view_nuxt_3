<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="text-3xl font-semibold">
      Dashboard Admin Assessment Diskominfo Kota Bogor
    </div>
    <div class="my-6 text-justify">
      Selamat Datang Di Pelayanan Assessment E-Gov Dinas Komunikasi dan
      Informatika Kota Bogor. Anda telah berhasil login sebagai Admin. Proses
      evaluasi yang dilakukan oleh Dinas Komunikasi dan Informatika Kota Bogor
      bertujuan untuk menilai kesesuaian dan kinerja website OPD dengan standar
      yang telah ditetapkan. Evaluasi ini mencakup aspek keamanan,
      aksesibilitas, kinerja, kepatuhan terhadap regulasi, serta kualitas
      layanan yang disediakan melalui website tersebut. Tujuannya adalah
      memastikan bahwa website OPD dapat memberikan layanan yang optimal, aman,
      dan dapat diakses oleh semua lapisan masyarakat sesuai dengan ketentuan
      yang berlaku. Silakan kelola akun OPD dan Assessor untuk memastikan
      kelancaran proses assessment.
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
