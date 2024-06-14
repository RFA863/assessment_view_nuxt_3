<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="font-semibold text-3xl">Input Dokumen Assessment</div>
    <div class="my-6">
      <form @submit.prevent="submitData" enctype="multipart/form-data">
        <table class="border-separate border-spacing-2">
          <tr>
            <td>Surat Permohonan Assessment</td>
            <td class="px-4">:</td>
            <td>
              <input
                type="file"
                @change="handleFileChange($event, 'permohonan')"
              />
            </td>
          </tr>
          <tr>
            <td>Surat Undangan Assessment</td>
            <td class="px-4">:</td>
            <td>
              <input
                type="file"
                @change="handleFileChange($event, 'undangan')"
              />
            </td>
          </tr>
          <tr>
            <td>Surat Permohonan Hosting dan Subdomain</td>
            <td class="px-4">:</td>
            <td>
              <input
                type="file"
                @change="handleFileChange($event, 'hosting')"
              />
            </td>
          </tr>
          <tr>
            <td>Dokumen API</td>
            <td class="px-4">:</td>
            <td>
              <input type="file" @change="handleFileChange($event, 'api')" />
            </td>
          </tr>
          <tr>
            <td>Source Code Aplikasi</td>
            <td class="px-4">:</td>
            <td>
              <input type="file" @change="handleFileChange($event, 'code')" />
            </td>
          </tr>
        </table>
        <div class="text-gray-500 text-sm my-4">
          Catatan : File yang diunggah harus bertipe pdf, dan ukuran maksimal
          file adalah 8MB.
        </div>
        <div v-if="loading" class="flex justify-end">
          <button class="bg-blue-700 px-4 py-2 rounded-xl text-white w-28">
            <i class="pi pi-spin pi-spinner" style="font-size: 1.25rem"></i>
          </button>
        </div>
        <div v-else class="flex justify-end">
          <button class="bg-blue-700 px-4 py-2 rounded-xl text-white w-28">
            Submit
          </button>
        </div>
      </form>
    </div>
    <Toast />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const config = useRuntimeConfig();
const host = config.public.apiUrl;

const tokenCookie = useCookie("token");
const token = tokenCookie.value;
const route = useRoute();
const assessment_id = route.query.data;
const toast = useToast();

const loading = ref(false);

const files = ref({
  permohonan: null,
  undangan: null,
  hosting: null,
  api: null,
  code: null,
});

const handleFileChange = (event, field) => {
  const file = event.target.files[0];
  if (file && file.type === "application/pdf" && file.size <= 8 * 1024 * 1024) {
    files.value[field] = file;
  } else {
    console.log("File harus bertipe PDF dan berukuran maksimal 8MB.");
  }
};

const submitData = async () => {
  loading.value = true;

  const formData = new FormData();
  // Ubah sesuai kebutuhan
  formData.append("assessment_id", assessment_id); // Ubah sesuai kebutuhan

  Object.keys(files.value).forEach((key) => {
    if (files.value[key]) {
      formData.append("dok[]", files.value[key]);
      formData.append("nama_dok[]", key);
    }
  });

  try {
    const response = await fetch(`${host}/api/assessment/opd/dokumen`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Gagal Mengunggah File",
        life: 5000,
      });
    }

    toast.add({
      severity: "success",
      summary: "Success",
      detail: "Data Berhasil diinput",
      life: 5000,
    });
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 5000,
    });
  } finally {
    loading.value = false;
  }
};
</script>
