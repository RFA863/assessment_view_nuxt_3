<template>
  <div class="relative overflow-hidden">
    <div class="absolute z-[1] w-full">
      <div class="flex gap-3 px-8 mt-4">
        <img src="/img/logo/kota_bogor.png" alt="logo kota bogor" />
        <img src="/img/logo/diskominfo.png" alt="logo diskominfo kota bogor" />
      </div>

      <div class="flex flex-col items-center w-full">
        <div class="text-4xl font-semibold mt-6">
          Aplikasi Assessment <span class="text-sky-500">Kota Bogor</span>
        </div>

        <div class="border-2 rounded-xl shadow-xl my-16 bg-white">
          <div class="font-semibold text-2xl flex justify-center mt-6 mb-1">
            <p>Selamat Datang!</p>
          </div>
          <div class="font-semibold text-xs flex justify-center mb-6">
            <p>Silahkan login pada kolom dibawah ini.</p>
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
            <div class="checkbox block">
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 ml-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Remember Me!</label
              >
            </div>

            <div class="text-center text-red-700" v-if="errorMessage">
              error : {{ errorMessage.message }}
            </div>
            <button
              v-if="loading"
              class="bg-sky-700 w-full py-1 text-xl font-medium text-white rounded-lg mt-2 mb-6"
            >
              <i class="pi pi-spin pi-spinner"></i>
            </button>
            <button
              v-else
              type="submit"
              class="bg-sky-700 w-full py-1 text-xl font-medium text-white rounded-lg mt-2 mb-6 hover:bg-slate-100 hover:text-sky-500"
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

const loading = ref(false);

const password = ref(null);
const email = ref(null);

const errorMessage = ref("");

const host = config.public.apiUrl;

const getCsrfToken = async () => {
  const response = await fetch(host + "/sanctum/csrf-cookie", {
    method: "GET",
    credentials: "include",
  });

  // Log respons untuk memastikan kita mendapatkan respons yang benar
  console.log("CSRF response status:", response.status);
  console.log("CSRF response headers:", response.headers);

  const cookies = document.cookie.split(";").reduce((cookies, cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    cookies[name] = value;
    return cookies;
  }, {});

  const csrfToken = cookies["XSRF-TOKEN"];
  console.log("CSRF Token:", csrfToken); // Untuk memastikan bahwa token diambil
  return csrfToken;
};

const login = async () => {
  loading.value = true;
  await getCsrfToken();

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

        if (res.role === "admin") {
          navigateTo("/admin");
        } else if (res.role === "opd") {
          navigateTo("/opd");
        } else if (res.role === "assessment") {
          navigateTo("/assessor");
        }
      } else {
        errorMessage.value = res;
      }
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  userCookie.value = null;
  tokenCookie.value = null;
});
</script>
