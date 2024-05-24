<template>
  <div class="relative overflow-hidden">
    <div class="absolute z-[1] w-full">
      <div class="flex gap-3 px-8">
        <img src="/img/logo/kota_bogor.png" alt="logo kota bogor" />
        <img src="/img/logo/diskominfo.png" alt="logo diskominfo kota bogor" />
      </div>

      <div class="flex flex-col items-center w-full">
        <div class="text-4xl font-semibold">Aplikasi Assessment Kota Bogor</div>

        <div class="border-2 rounded-xl shadow-xl my-16 bg-white">
          <div class="font-semibold text-2xl flex justify-center my-6">
            Login
          </div>

          <form @submit.prevent="login" class="mx-6">
            <InputGroup class="my-2">
              <InputGroupAddon>
                <i class="pi pi-user"></i>
              </InputGroupAddon>
              <InputText placeholder="Email" v-model="email" />
            </InputGroup>

            <InputGroup class="my-2">
              <InputGroupAddon>
                <i class="pi pi-lock"></i>
              </InputGroupAddon>
              <Password
                placeholder="Password"
                toggleMask
                :feedback="false"
                v-model="password"
              />
            </InputGroup>
            <div class="text-center text-red-700" v-if="errorMessage">
              error : {{ errorMessage.message }}
            </div>
            <button
              type="submit"
              class="bg-sky-700 w-full py-1 text-xl font-medium text-white rounded-lg mt-2 mb-6"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>

    <img
      src="/img/background/login.jpg"
      alt="background image"
      class="object-cover w-screen h-screen"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

const config = useRuntimeConfig();

const userCookie = useCookie("user");
const tokenCookie = useCookie("token");

const password = ref(null);
const email = ref(null);

const errorMessage = ref("");

const host = config.public.apiUrl;

const login = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await $fetch(host + "/api/assessment/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer your_token_here', // Ganti your_token_here dengan token yang valid
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.token) {
        userCookie.value = res.user;
        tokenCookie.value = res.token;

        navigateTo("/");
      } else {
        errorMessage.value = res;
      }
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};
</script>
