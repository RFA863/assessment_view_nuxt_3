<template>
  <div class="border-2 rounded-xl shadow-xl px-12 py-6 m-12">
    <div class="text-3xl font-semibold">Daftar User</div>

    <NuxtLink to="/admin/user/create">
      <button
        class="my-3 bg-blue-700 px-8 py-2 rounded-lg text-white font-medium"
      >
        Input User
      </button>
    </NuxtLink>

    <div>
      <DataTable
        v-model:filters="filters"
        v-model:selection="selectedData"
        :value="dataTable"
        selectionMode="single"
        :metaKeySelection="false"
        paginator
        :rows="5"
        dataKey="id"
        :loading="loading"
        :globalFilterFields="['name', 'email', 'role']"
        class="border border-t-0 rounded-xl"
      >
        <template #header>
          <div class="flex justify-end border-0">
            <IconField iconPosition="left">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText
                v-model="filters['global'].value"
                placeholder="Keyword Search"
              />
            </IconField>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column
          v-for="col of columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        ></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <div class="flex gap-4">
              <button
                class="bg-orange-600 px-6 py-2 rounded-lg text-white"
                @click="edit(slotProps.data)"
              >
                Edit
              </button>
              <button
                class="bg-red-600 px-6 py-2 rounded-lg text-white"
                @click="deleteData(slotProps.data)"
              >
                Delete
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";

definePageMeta({
  middleware: "auth",
});

const config = useRuntimeConfig();
const host = config.public.apiUrl;

const tokenCookie = useCookie("token");
const token = tokenCookie.value;

const confirm = useConfirm();
const toast = useToast();

const loading = ref(true);

const dataTable = ref([]);
const selectedData = ref(null);
const columns = [
  { field: "no", header: "No" },
  { field: "name", header: "Nama" },
  { field: "email", header: "Email" },
  { field: "role", header: "Role" },
];
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const edit = (rowData) => {
  selectedData.value = rowData;
  if (selectedData.value.id !== null) {
    navigateTo("/admin/user/edit-" + selectedData.value.id);
  }
};

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await $fetch(host + "/api/assessment/admin/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      if (res.success) {
        dataTable.value = res.data.map((item, index) => ({
          id: item.id,
          no: index + 1,
          name: item.name,
          email: item.email,
          role: item.role,
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
  } finally {
    loading.value = false;
  }
};

const deleteData = (rowData) => {
  selectedData.value = rowData;
  if (selectedData.value.id !== null) {
    confirm.require({
      message: "Anda Yakin Ingin Menghapus Data ini?",
      header: "Danger Zone",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "bg-white text-gray-700 border-slate-700 hover:bg-white  ",
      acceptClass:
        "bg-red-600 border-slate-700 hover:bg-red-700 hover:border-slate-700",
      accept: () => {
        deleteTableData();
      },
    });
  }
};

const deleteTableData = async () => {
  loading.value = true;
  try {
    const response = await $fetch(
      host + "/api/assessment/admin/user/" + selectedData.value.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(response);

    if (response.success) {
      toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Data Berhasi dihapus",
        life: 3000,
      });
      fetchData();
    } else {
      toast.add({
        severity: "error",
        summary: "Error Message",
        detail: "Data Gagal dihapus",
        life: 3000,
      });
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error Message",
      detail: error,
      life: 3000,
    });
  } finally {
    loading.value = false;
  }
};
// Mengambil data saat komponen dimuat
onMounted(() => {
  fetchData();
});
</script>
