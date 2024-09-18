<template>
    <div class="bg-[#F2F2F2] w-full">
        <NuxtPage/>
    
        <MenuOverlay
            :class="[
                { 'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverLay },
                { 'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverLay },
            ]"
        />
    </div>
</template>

<script setup>
    import { useUserStore } from '#imports'

    const userStore = useUserStore()
    const route = useRoute()

    //let windowWidth = ref(process.client ? window.innerWidth : '')
    let windowWidth = ref('')

    onMounted(() => {
        userStore.isLoading = false
        window.addEventListener('resize', function () {
            windowWidth.value = window.innerWidth
        })
    })

    watch(() => windowWidth.value, () => {
        if(windowWidth.value >= 767) {
            userStore.isMenuOverLay = false
        }
    })
    watch(() => route.fullPath, () => {
        userStore.isLoading = true
    })
</script>
