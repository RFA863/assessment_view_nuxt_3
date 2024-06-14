<template>
  <div>
    <div class="header text-2xl ml-6 mt-4 font-bold">
      <p>Pengajuan Assessment</p>
    </div>

    <div class="ml-6 mt-4 text-xl font-semibold">1. Data Aplikasi</div>

    <div class="mx-10">
      <form @submit.prevent="submitData">
        <div class="mt-6">
          <label for="" class="ml-3 mb-6">Nama Aplikasi</label>
          <InputText
            v-model="nama_apk"
            placeholder="SIBADRA (Sistem Iinformasi Aduan dan Saran)"
            class="w-full"
            required
          />
        </div>
        <div class="flex flex-col mt-6">
          <label class="ml-3 mb-3">Perangkat Daerah Pemilik Aplikasi</label>
          <td>
            <InputText v-model="user.name" disabled class="w-full" />
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
              class="w-full"
              required
            />
          </td>
        </div>
        <div class="my-3 ml-3">
          <div>Nama Kegiatan</div>
          <InputText type="text" v-model="nama_kegiatan" class="w-full" />
        </div>
        <div class="flex gap-4">
          <div class="ml-4">
            <label for="">Jenis Kegiatan</label>
            <Dropdown
              v-model="selectedJenisKegiatan"
              :options="jenisKegiatan"
              showClear
              optionLabel="name"
              placeholder="Select"
              class="w-full mt-2"
              required
            />
          </div>
          <div>
            <div>Tahun Anggaran</div>

            <Calendar
              class="mt-2"
              v-model="thn_anggaran"
              view="year"
              dateFormat="yy"
              required
            />
          </div>
          <div class="ml-6">
            <div>Kegiatan dengan DPA</div>
            <div class="flex gap-x-4">
              <div>
                <input
                  type="radio"
                  name="dpa"
                  value="dpa"
                  v-model="kegiatan_dpa"
                  required
                />
                Ya
              </div>
              <div>
                <input
                  type="radio"
                  name="dpa"
                  value="non_dpa"
                  v-model="kegiatan_dpa"
                  required
                />
                Tidak
              </div>
            </div>
          </div>
        </div>

        <!-- Form Penanggung Jawab APK -->

        <div class="card flex flex-col justify-content-center ml-4 mt-6">
          <label class="mb-2" for=""
            >Penanggung Jawab Aplikasi di Perangkat Daerah</label
          >
          <div class="flex-row w-full">
            <label class="mr-5" for="">Nama :</label>
            <InputText v-model="pj" type="text" required />
          </div>
        </div>

        <!-- Form Pengembang APk -->

        <div class="flex flex-col ml-4 mb-6 mt-6">
          <div class="text-lg font-semibold">Pengembang Aplikasi</div>
          <div>
            <label for="">Nama Perusahaan :</label>
            <InputText
              class="w-1/2 ml-24 mb-6 border-solid border-2 border-slate-900"
              v-model="nama_perusahaan"
              type="text"
              required
            />
          </div>
          <div>
            <label>Nama Penanggung Jawab : </label>
            <InputText
              class="w-1/2 ml-8 mb-6 border-solid border-2 border-slate-900"
              v-model="nama_pj"
              type="text"
              required
            />
          </div>
          <div class="flex">
            <p>Alamat :</p>
            <Textarea
              class="w-1/2 ml-48 border-solid border-2 border-slate-900"
              v-model="alamat_developer"
              rows="5"
              cols="30"
              required
            />
          </div>
          <div>
            <label for="">Telepon :</label>
            <InputText
              style="margin-left: 188px"
              class="w-1/2 mb-6 mt-6 border-solid border-2 border-slate-900"
              v-model="telp_developer"
              type="text"
              required
            />
          </div>
          <div>
            <label for="">Email :</label>
            <InputText
              class="w-1/2 ml-52 mb-6 border-solid border-2 border-slate-900"
              v-model="email_developer"
              type="text"
              required
            />
          </div>
        </div>
        <div class="flex flex-col ml-4 mb-6 mt-6">
          <div class="text-lg font-semibold">Kontak Programmer</div>
          <div>
            <label for="">Nama :</label>
            <InputText
              style="margin-left: 204px"
              class="w-1/2 mb-6 border-solid border-2 border-slate-900"
              v-model="nama_programer"
              type="text"
              required
            />
          </div>
          <div>
            <label for="">Alamat :</label>
            <InputText
              class="w-1/2 ml-48 mb-6 border-solid border-2 border-slate-900"
              v-model="alamat_programer"
              type="text"
              required
            />
          </div>
          <div class="flex">
            <p>Telepon :</p>
            <InputText
              style="margin-left: 188px"
              class="w-1/2 mb-2 border-solid border-2 border-slate-900"
              v-model="telp_programer"
              type="text"
              required
            />
          </div>
          <div>
            <label for="">Email :</label>
            <InputText
              style="margin-left: 210px"
              class="w-1/2 mb-6 mt-6 border-solid border-2 border-slate-900"
              v-model="email_programer"
              type="text"
              required
            />
          </div>
          <button
            v-if="loading"
            type="submit"
            class="bg-yellow-500 text-white p-2 w-1/4 rounded-full ml-[440px] mt-6 hover:bg-yellow-600"
          >
            <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
          </button>
          <button
            v-else
            type="submit"
            class="bg-yellow-500 text-white p-2 w-1/4 rounded-full ml-[440px] mt-6 hover:bg-yellow-600"
          >
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

const config = useRuntimeConfig();
const host = config.public.apiUrl;

const tokenCookie = useCookie("token");
const userCookie = useCookie("user");

const token = tokenCookie.value;
const user = userCookie.value;

const router = useRouter();

const toast = useToast();

const loading = ref(false);

const selectedUserApk = ref();
const userapk = ref([]);
const selectedJenisKegiatan = ref();
const jenisKegiatan = ref([]);

const nama_apk = ref();
const nama_kegiatan = ref();
const thn_anggaran = ref();
const kegiatan_dpa = ref();
const pj = ref();
const nama_perusahaan = ref();
const nama_pj = ref();
const alamat_developer = ref();
const email_developer = ref();
const telp_developer = ref();
const nama_programer = ref();
const alamat_programer = ref();
const telp_programer = ref();
const email_programer = ref();

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
        userapk.value = res.data.map((item) => ({
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

const fetchjenisKegiatan = async () => {
  try {
    const response = await $fetch(host + "/api/assessment/jenis_kegiatan", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      if (res.success) {
        jenisKegiatan.value = res.data.map((item) => ({
          code: item.id,
          name: item.jenis_kegiatan,
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

const submitData = async () => {
  loading.value = true;

  const date = new Date(thn_anggaran.value);

  const data = {
    nama_apk: nama_apk.value,
    nama_kegiatan: nama_kegiatan.value,
    thn_anggaran: String(date.getFullYear()),
    kegiatan_dpa: kegiatan_dpa.value,
    pj: pj.value,
    user_id: user.id,
    user_apk_id: selectedUserApk.value.code,
    jenis_kegiatan_id: selectedJenisKegiatan.value.code,
    nama_perusahaan: nama_perusahaan.value,
    nama_pj: nama_pj.value,
    alamat_developer: alamat_developer.value,
    telp_developer: telp_developer.value,
    email_developer: email_developer.value,
    nama_programer: nama_programer.value,
    alamat_programer: alamat_programer.value,
    telp_programer: telp_programer.value,
    email_programer: email_programer.value,
  };

  try {
    const response = await $fetch(host + "/api/assessment/opd/aplikasi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });

    if (response.success) {
      console.log(response.data.data_assessment.id);
      router.push({
        path: "/opd/pengajuan-assessment/dokumen-assessment",
        query: { data: response.data.data_assessment.id },
      });
    } else {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: response.message,
        life: 5000,
      });
    }
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

onMounted(() => {
  fetchUserApk();
  fetchjenisKegiatan();
});
</script>
