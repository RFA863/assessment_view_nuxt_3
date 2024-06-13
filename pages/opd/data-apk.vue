<template>
  <div>
    <p class="ml-6 mt-4">
      Dashboard/
      <span class="underline"
        >Input Dokumen Kelengkapan Pengajuan Assessment</span
      >
    </p>
    <div class="header text-2xl ml-6 mt-4 font-bold">
      <p>Input Dokumen Pengajuan Assessment</p>
    </div>
    <div class="flex">
      <div class="basis-1/4 ml-6 mt-4">
        <span>1. Data Aplikasi</span>
        <p class="ml-3 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum
          error aspernatur voluptatibus voluptate illum.
        </p>
      </div>

      <div class="basis-3/4 ml-32 mr-10">
        <div class="mt-6">
          <label for="" class="ml-3 mb-6">Nama Aplikasi</label>
          <input
            type="email"
            id="email"
            class="border-solid border-2 border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 ml-2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="SIBADRA (Sistem Iinformasi Aduan dan Saran)"
            required
          />
        </div>
        <div class="flex flex-col mt-6">
          <label for="" class="ml-3 mb-3"
            >Perangkat Daerah Pemilik Aplikasi</label
          >
          <td>
            <Dropdown
              v-model="selectedUser"
              :options="user"
              showClear
              optionLabel="name"
              placeholder="Select"
              class="w-full mb-6 ml-2 border-solid border-2 border-slate-900"
              required
            />
          </td>
        </div>
        <div class="flex flex-col mt-6">
          <label for="" class="ml-3 mb-3">Pengguna Aplikasi</label>
          <td>
            <Dropdown
              v-model="selectedUserApk"
              :options="userapk"
              showClear
              optionLabel="name"
              placeholder="Select"
              class="w-full mb-6 ml-2 border-solid border-2 border-slate-900"
              required
            />
          </td>
        </div>
        <div class="mt-2 ml-3">
          <label for="">Nama Kegiatan</label>
          <textarea
            id="message"
            rows="4"
            class="block mt-2 mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-solid border-2 border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div class="flex gap-4">
          <div class="ml-4">
            <label for="">Jenis Kegiatan</label>
            <Dropdown
              v-model="selectedCity"
              :options="cities"
              showClear
              optionLabel="name"
              placeholder="Select"
              class="w-full mt-2 md:w-14rem border-solid border-2 border-slate-900"
            />
          </div>
          <div>
            <div>Tahun Anggaran</div>
            <Calendar
              class="mt-2 border-solid border-2 border-slate-900 rounded"
              v-model="date"
              view="year"
              dateFormat="yy"
            />
          </div>
          <div class="ml-6">
            <div>Kegiatan dengan DPA</div>
            <RadioButton
              v-model="pilihan"
              inputId="pilihan1"
              name="pizza"
              value="Ya"
            />
            <label for="pilihan1" class="">Ya</label>
            <RadioButton
              v-model="pilihan"
              inputId="pilihan2"
              name="pizza"
              value="Tidak"
              class="ml-6"
            />
            <label for="pilihan2" class="">Tidak</label>
          </div>
        </div>

        <!-- Form Penanggung Jawab APK -->
        <div class="card flex flex-col justify-content-center ml-4 mt-6">
          <label class="mb-2" for=""
            >Penanggung Jawab Aplikasi di Perangkat Daerah</label
          >
          <div class="flex-row w-full">
            <label class="mr-5" for="">Nama :</label>
            <InputText
              class="border-solid border-2 border-slate-900"
              v-model="value1"
              type="text"
              variant="filled"
            />
          </div>
        </div>

        <!-- Form Pengembang APk -->
        <div class="flex flex-col ml-4 mb-6 mt-6">
          <label for="">Pengembang Aplikasi</label>
          <div>
            <label for="">Nama Perusahaan :</label>
            <InputText
              class="w-1/2 ml-24 mb-6 border-solid border-2 border-slate-900"
              v-model="value2"
              type="text"
              variant="filled"
            />
          </div>
          <div>
            <label for="">Nama Penanggung Jawab :</label>
            <InputText
              class="w-1/2 ml-8 mb-6 border-solid border-2 border-slate-900"
              v-model="value3"
              type="text"
              variant="filled"
            />
          </div>
          <div class="flex">
            <p>Alamat :</p>
            <Textarea
              class="w-1/2 ml-48 border-solid border-2 border-slate-900"
              v-model="value4"
              rows="5"
              cols="30"
            />
          </div>
          <div>
            <label for="">Telepon :</label>
            <InputText
              style="margin-left: 188px"
              class="w-1/2 mb-6 mt-6 border-solid border-2 border-slate-900"
              v-model="value5"
              type="text"
              variant="filled"
            />
          </div>
          <div>
            <label for="">Email :</label>
            <InputText
              class="w-1/2 ml-52 mb-6 border-solid border-2 border-slate-900"
              v-model="value6"
              type="text"
              variant="filled"
            />
          </div>
        </div>
        <div class="flex flex-col ml-4 mb-6 mt-6">
          <label for="">Kontak Programmer</label>
          <div>
            <label for="">Nama :</label>
            <InputText
              style="margin-left: 204px"
              class="w-1/2 mb-6 border-solid border-2 border-slate-900"
              v-model="value2"
              type="text"
              variant="filled"
            />
          </div>
          <div>
            <label for="">Alamat :</label>
            <InputText
              class="w-1/2 ml-48 mb-6 border-solid border-2 border-slate-900"
              v-model="value3"
              type="text"
              variant="filled"
            />
          </div>
          <div class="flex">
            <p>Telepon :</p>
            <InputText
              style="margin-left: 188px"
              class="w-1/2 mb-2 border-solid border-2 border-slate-900"
              v-model="value3"
              type="text"
              variant="filled"
            />
          </div>
          <div>
            <label for="">Email :</label>
            <InputText
              style="margin-left: 210px"
              class="w-1/2 mb-6 mt-6 border-solid border-2 border-slate-900"
              v-model="value5"
              type="text"
              variant="filled"
            />
          </div>
          <NuxtLink to="/opd/dok-proses-pengajuan">
            <button
              class="bg-yellow-500 text-white p-2 w-1/4 rounded-full ml-[440px] mt-6 hover:bg-yellow-600"
            >
              Kirim
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import { ref } from "vue";

const config = useRuntimeConfig();
const host = config.public.apiUrl;
const tokenCookie = useCookie("token");
const token = tokenCookie.value;
const toast = useToast();
const selectedUser = ref();
const selectedUserApk = ref();
const user = ref([]);
const userapk = ref([]);
const value = ref(null);
const date = ref();
const pilihan = ref("");
const selectedCity = ref();
const cities = ref([
  { name: "Pembangunan", code: "pembangunan" },
  { name: "Pengembangan", code: "pengembangan" },
  { name: "Pemeliharaan", code: "pemeliharaan" },
]);

const fetchUser = async () => {
  try {
    const response = await $fetch(host + "/api/assessment/admin/opd", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      if (res.success) {
        user.value = res.data.map((item, index) => ({
          code: item.id,
          name: item.opd,
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
const fetchUserApk = async () => {
  try {
    const response = await $fetch(host + "/api/assessment/user_apk", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      if (res.success) {
        userapk.value = res.data.map((item, index) => ({
          code: item.id,
          name: item.pengguna_apk,
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
onMounted(() => {
  fetchUser();
  fetchUserApk();
});
</script>
