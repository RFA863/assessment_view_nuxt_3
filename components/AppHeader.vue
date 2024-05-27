<template>
  <div
    class="flex justify-between px-8 py-6 text-2xl font-semibold shadow-xl w-full"
  >
    <button @click="backToHome">ASSESSMENT</button>
    <button @click="backToLogin">
      <Icon name="mingcute:exit-line" color="black" size="32px" />
    </button>
  </div>
</template>

<script setup>
const userCookie = useCookie("user");
const tokenCookie = useCookie("token");
const user = userCookie.value;

const backToHome = () => {
  if (user) {
    if (user.role === "admin") {
      navigateTo("/admin");
    } else if (user.role === "opd") {
      navigateTo("/opd");
    } else if (user.role === "assessment") {
      navigateTo("/assessor");
    }
  }
};

const backToLogin = () => {
  userCookie.value = null;
  tokenCookie.value = null;
  navigateTo("/login");
};
</script>
