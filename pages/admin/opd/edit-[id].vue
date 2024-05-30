<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="flex justify-between">
      <div class="text-3xl font-semibold">Update OPD</div>
      <NuxtLink to="/admin/opd">
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
              <InputText type="text" v-model="opd" class="w-full" required />
            </td>
          </tr>

          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>
              <InputText type="text" v-model="alamat" class="w-full" required />
            </td>
          </tr>

          <tr>
            <td>No. Telp</td>
            <td>:</td>
            <td>
              <InputText type="text" v-model="telp" class="w-full" required />
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
            <td>User</td>
            <td>:</td>
            <td>
              <Dropdown
                v-model="selectedUser"
                :options="user"
                showClear
                optionLabel="name"
                placeholder="Select a user"
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

const route = useRoute();

const toast = useToast();

const loading = ref(false);

const opd = ref();
const alamat = ref();
const telp = ref();
const email = ref();

const selectedUser = ref();
const user = ref([]);

const fetchUser = async () => {
  try {
    const response = await $fetch(host + "/api/assessment/admin/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      if (res.success) {
        user.value = res.data.map((item, index) => ({
          code: item.id,
          name: item.name,
        }));
      }
    });
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 5000,
    });
  }
};

const fetchData = async () => {
  try {
    const response = await $fetch(
      host + "/api/assessment/admin/opd/" + route.params.id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.success) {
      const listData = response.data;
      opd.value = listData.opd;
      alamat.value = listData.alamat;
      telp.value = listData.telp;
      email.value = listData.email;

      console.log(listData.user.id);
      selectedUser.value = {
        name: listData.user.name,
        code: listData.user.id,
      };
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error Message",
      detail: error,
      life: 3000,
    });
  }
};

const submitData = async () => {
  loading.value = true;

  const data = {
    opd: opd.value,
    alamat: alamat.value,
    telp: telp.value,
    email: email.value,
    user_id: selectedUser.value.code,
  };

  try {
    const response = await fetch(
      host + "/api/assessment/admin/opd/" + route.params.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.ok) {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Data Berhasil di Input",
        life: 3000,
      });
      navigateTo("/admin/opd");
    } else {
      toast.add({
        severity: "error",
        summary: "Data Gagal di Input",
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

onMounted(() => {
  fetchUser();
  fetchData();
});
</script>
