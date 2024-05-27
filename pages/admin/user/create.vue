<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="flex justify-between">
      <div class="text-3xl font-semibold">Input User Baru</div>
      <NuxtLink to="/admin/user">
        <i class="pi pi-times" style="font-size: 2rem"></i>
      </NuxtLink>
    </div>
    <div class="my-6">
      <form @submit.prevent="submitData" class="flex flex-col items-center">
        <table class="border-separate border-spacing-2">
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>
              <InputText type="text" v-model="name" class="w-full" required />
            </td>
          </tr>

          <tr>
            <td>Email</td>
            <td>:</td>
            <td>
              <InputText type="text" v-model="email" class="w-full" required />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>:</td>
            <td>
              <InputText
                type="text"
                v-model="password"
                class="w-full"
                required
              />
            </td>
          </tr>

          <tr>
            <td>Role</td>
            <td>:</td>
            <td>
              <Dropdown
                v-model="selectedRole"
                :options="roles"
                showClear
                optionLabel="name"
                placeholder="Select a role"
                class="w-full"
                required
              />
            </td>
          </tr>
        </table>
        <div v-if="loading" class="flex justify-center my-4">
          <button
            type="submit"
            class="bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
            <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
          </button>
        </div>
        <div v-else class="flex justify-center my-4">
          <button
            type="submit"
            class="bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
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

const toast = useToast();

const loading = ref(false);

const name = ref();
const email = ref();
const password = ref();

const selectedRole = ref();
const roles = ref([
  { name: "Admin", code: "admin" },
  { name: "Opd", code: "opd" },
  { name: "Assessment", code: "assessment" },
]);

const submitData = async () => {
  loading.value = true;

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: selectedRole.value.code,
  };

  try {
    const response = await fetch(host + "/api/assessment/admin/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Data Berhasil diinput",
        life: 3000,
      });
      navigateTo("/admin/user");
    } else {
      toast.add({
        severity: "error",
        summary: "Data Gagal diInput",
        detail: result,
        life: 5000,
      });
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
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
