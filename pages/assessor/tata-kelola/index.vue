<template>
  <div>
    <span class="flex ml-12 mt-12 text-2xl font-bo">Tata Kelola</span>
    <div class="grid grid-cols-2 gap-4">
      <div class="ml-12 mt-6 align-items-center">
        <span>1. Keserasian Warna</span>
        <div>
          <RadioButton
            v-model="ingredient"
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
          />
          <label for="ingredient1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="ingredient"
            inputId="ingredient2"
            name="pizza"
            value="Mushroom"
          />
          <label for="ingredient2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>2. Logo Kota Bogor</span>
        <div>
          <RadioButton
            v-model="input2"
            inputId="input1"
            name="pizza"
            value="Cheese"
          />
          <label for="input1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input2"
            inputId="input2"
            name="pizza"
            value="Mushroom"
          />
          <label for="input2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>3. Logo Aplikasi</span>
        <div>
          <RadioButton
            v-model="input3"
            inputId="inputlogo1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputlogo1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input3"
            inputId="inputlogo2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputlogo2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>4. Copyright Pemerintah Kota Bogor</span>
        <div>
          <RadioButton
            v-model="input4"
            inputId="inputcp1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputcp1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input4"
            inputId="inputcp2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputcp2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>5. Informasi Nama, Alamat, Telp, Email Perangkat Daerah </span>
        <div>
          <RadioButton
            v-model="input5"
            inputId="inputinfo1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputinfo1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input5"
            inputId="inputinfo2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputinfo2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>6. Informasi Tentang Aplikasi</span>
        <div>
          <RadioButton
            v-model="input6"
            inputId="inputapk1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputapk1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input6"
            inputId="inputapk2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputapk2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>7. Frequency Asked Questions</span>
        <div>
          <RadioButton
            v-model="input7"
            inputId="inputfaq1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputfaq1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input7"
            inputId="inputfaq2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputfaq2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>8. Desain dan Kenyamanan Pengguna (UI/UX)</span>
        <div>
          <RadioButton
            v-model="input8"
            inputId="inputuiux1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputuiux1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input8"
            inputId="inputuiux2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputuiux2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>9. Apakah Semua Menu dan Link Berfungsi?</span>
        <div>
          <RadioButton
            v-model="input9"
            inputId="inputlink1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputlink1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input9"
            inputId="inputlink2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputlink2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>10. Dashboard</span>
        <div>
          <RadioButton
            v-model="input10"
            inputId="inputdb1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputdb1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input10"
            inputId="inputdb2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputdb2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>

      <div class="ml-12 mt-6 align-items-center">
        <span>11. Log Aktivitas Pengguna</span>
        <div>
          <RadioButton
            v-model="input11"
            inputId="inputlog1"
            name="pizza"
            value="Cheese"
          />
          <label for="inputlog1" class="ml-2 mr-6">Ya</label>
          <RadioButton
            v-model="input11"
            inputId="inputlog2"
            name="pizza"
            value="Mushroom"
          />
          <label for="inputlog2" class="ml-2">Tidak</label>
        </div>
        <FloatLabel class="mt-6">
          <Textarea v-model="value" rows="5" cols="30" />
          <label>Catatan</label>
        </FloatLabel>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import { ref } from "vue";

const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
const input5 = ref("");
const input6 = ref("");
const input7 = ref("");
const input8 = ref("");
const input9 = ref("");
const input10 = ref("");
const input11 = ref("");
const ingredient = ref("");
const value = ref("");
</script>
