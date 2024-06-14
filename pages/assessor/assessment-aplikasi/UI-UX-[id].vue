<template>
  <div>
    <span class="flex ml-12 mt-12 text-2xl font-bold">Assessment Aplikasi</span>
    <form @submit.prevent="submitData">
      <div class="grid grid-cols-2 gap-4">
        <div class="ml-12 mt-6 align-items-center">
          <span>1. Keserasian Warna</span>
          <div>
            <RadioButton
              v-model="penilaian_warna"
              name="Warna"
              value="sesuai"
              required
            />
            <label for="ingredient1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_warna"
              name="Warna"
              value="tidak"
              required
            />
            <label for="ingredient2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>2. Logo Kota Bogor</span>
          <div>
            <RadioButton
              v-model="penilaian_logo_kotabgr"
              name="logo_kota"
              value="sesuai"
              required
            />
            <label for="input1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_logo_kotabgr"
              name="logo_kota"
              value="tidak"
              required
            />
            <label for="input2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>3. Logo Aplikasi</span>
          <div>
            <RadioButton
              v-model="penilaian_logo_apk"
              name="logo_apk"
              value="sesuai"
              required
            />
            <label for="inputlogo1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_logo_apk"
              name="logo_apk"
              value="tidak"
              required
            />
            <label for="inputlogo2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>4. Copyright Pemerintah Kota Bogor</span>
          <div>
            <RadioButton
              v-model="penilaian_copyright_pemkot"
              name="cr"
              value="sesuai"
              required
            />
            <label for="inputcp1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_copyright_pemkot"
              name="cr"
              value="tidak"
              required
            />
            <label for="inputcp2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>5. Informasi Nama, Alamat, Telp, Email Perangkat Daerah </span>
          <div>
            <RadioButton
              v-model="penilaian_info_identitasopd"
              name="identitas"
              value="sesuai"
              required
            />
            <label for="inputinfo1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_info_identitasopd"
              name="identitas"
              value="tidak"
              required
            />
            <label for="inputinfo2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>6. Informasi Tentang Aplikasi</span>
          <div>
            <RadioButton
              v-model="penilaian_info_apk"
              name="info_apk"
              value="sesuai"
              required
            />
            <label for="inputapk1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_info_apk"
              name="info_apk"
              value="tidak"
              required
            />
            <label for="inputapk2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>7. Frequency Asked Questions</span>
          <div>
            <RadioButton
              v-model="penilaian_faq"
              name="faq"
              value="sesuai"
              required
            />
            <label for="inputfaq1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_faq"
              name="faq"
              value="tidak"
              required
            />
            <label for="inputfaq2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>8. Desain dan Kenyamanan Pengguna (UI/UX)</span>
          <div>
            <RadioButton
              v-model="penilaian_user_friendly"
              name="user_friendly"
              value="sesuai"
              required
            />
            <label for="inputuiux1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_user_friendly"
              name="user_friendly"
              value="tidak"
              required
            />
            <label for="inputuiux2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>9. Apakah Semua Menu dan Link Berfungsi?</span>
          <div>
            <RadioButton
              v-model="penilaian_fungsionalitas"
              name="fungsi"
              value="sesuai"
              required
            />
            <label for="inputlink1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_fungsionalitas"
              name="fungsi"
              value="tidak"
              required
            />
            <label for="inputlink2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>10. Dashboard</span>
          <div>
            <RadioButton
              v-model="penilaian_dashboard"
              name="dashboard"
              value="sesuai"
              required
            />
            <label for="inputdb1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_dashboard"
              name="dashboard"
              value="tidak"
              required
            />
            <label for="inputdb2" class="ml-2">Tidak</label>
          </div>
        </div>

        <div class="ml-12 mt-6 align-items-center">
          <span>11. Log Aktivitas Pengguna</span>
          <div>
            <RadioButton
              v-model="penilaian_log_user"
              name="log"
              value="sesuai"
              required
            />
            <label for="inputlog1" class="ml-2 mr-6">Ya</label>
            <RadioButton
              v-model="penilaian_log_user"
              name="log"
              value="tidak"
              required
            />
            <label for="inputlog2" class="ml-2">Tidak</label>
          </div>
        </div>
      </div>
      <div class="mx-8 my-4">
        <div class="text-xl font-semibold">Hasil Assessment</div>
        <div class="flex gap-x-4">
          <div>
            <RadioButton
              v-model="hasil_assessment"
              name="hasil"
              value="2"
              required
            />
            Lulus
          </div>
          <div>
            <RadioButton
              v-model="hasil_assessment"
              name="hasil"
              value="3"
              required
            />Tidak Lulus
          </div>
        </div>
      </div>
      <div v-if="loading" class="flex justify-center mb-24">
        <button class="bg-blue-700 px-4 py-2 rounded-xl text-white w-28">
          <i class="pi pi-spin pi-spinner" style="font-size: 1.25rem"></i>
        </button>
      </div>
      <div v-else class="flex justify-center mb-24">
        <button class="bg-blue-700 px-4 py-2 rounded-xl text-white w-28">
          Submit
        </button>
      </div>
    </form>
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

const penilaian_warna = ref();
const penilaian_logo_kotabgr = ref();
const penilaian_logo_apk = ref();
const penilaian_copyright_pemkot = ref();
const penilaian_info_identitasopd = ref();
const penilaian_info_apk = ref();
const penilaian_faq = ref();
const penilaian_user_friendly = ref();
const penilaian_fungsionalitas = ref();
const penilaian_dashboard = ref();
const penilaian_log_user = ref();
const hasil_assessment = ref();

const submitData = async () => {
  loading.value = true;

  const data = {
    penilaian_warna: penilaian_warna.value,
    penilaian_logo_kotabgr: penilaian_logo_kotabgr.value,
    penilaian_logo_apk: penilaian_logo_apk.value,
    penilaian_copyright_pemkot: penilaian_copyright_pemkot.value,
    penilaian_info_identitasopd: penilaian_info_identitasopd.value,
    penilaian_info_apk: penilaian_info_apk.value,
    penilaian_faq: penilaian_faq.value,
    penilaian_user_friendly: penilaian_user_friendly.value,
    penilaian_fungsionalitas: penilaian_fungsionalitas.value,
    penilaian_dashboard: penilaian_dashboard.value,
    penilaian_log_user: penilaian_log_user.value,
    hasil_assessment: hasil_assessment.value,
    assessment_id: route.params.id,
  };

  try {
    const response = await $fetch(
      host + "/api/assessment/assessor/penilaian_ui_ux",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      }
    );

    if (response.success) {
      navigateTo("/assessor/assessment-diajukan");
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
</script>
