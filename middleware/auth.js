// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const userCookie = useCookie('user')

    if (!userCookie.value) {
        // Jika user belum terautentikasi, arahkan ke halaman login
        if (to.path !== '/login') {
            return navigateTo('/login')
        }
    }

    // Cek role user dan arahkan ke halaman yang sesuai
    if (userCookie.value.role === 'admin') {

        if (to.path !== '/admin') {
            return navigateTo('/admin')
        }
    } else if (userCookie.value.role === 'opd') {
        if (to.path !== '/opd') {
            return navigateTo('/opd')
        }
    }
})
