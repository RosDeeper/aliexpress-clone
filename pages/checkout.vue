<template>
    <MainLayout>
        <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">
                        <div class="text-xl font-semibold mb-2">Shipping Address</div>

                        <div v-if="false">
                            <NuxtLink
                                to="/address"
                                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
                            >
                                <Icon name="mdi:plus" size="18" class="mr-2"/>
                                Update Address
                            </NuxtLink>

                            <div class="pt-2 border-t">
                                <div class="underline pb-1">Delivery Address</div>

                                <ul class="text-xs"> 
                                    <li class="flex items-center gap-2">
                                        <div>Contact name:</div> 
                                        <div class="font-bold">Test</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Address:</div> 
                                        <div class="font-bold">Test</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Zip Code:</div> 
                                        <div class="font-bold">Test</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>City:</div> 
                                        <div class="font-bold">Test</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Country:</div> 
                                        <div class="font-bold">Test</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <NuxtLink 
                            v-else
                            to="/address"
                            class="flex items-center text-blue-500 hover:text-red-400"
                        >
                            <Icon name="mdi:plus" size="18" class="mr-2"/>
                            Add New Address
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '~/layouts/MainLayout.vue'
    import { useUserStore } from '#imports'

    const useStore = useUserStore()
    const route = useRoute()

    let stripe = null
    let elements = null
    let card = null
    let form = null
    let total = ref(0)
    let clientSecret = null
    let currentAddress = ref(null)
    let isProcessing = ref(false)

    onMounted(() => {
        isProcessing.value = true

        useStore.checkout.forEach(item => {
            total.value += item.price
        })
    })

    watch(() => total.value, () => {
        if(total.value > 0) {
            stripeInit()
        }
    })

    const stripeInit = async () => {

    }
    const pay = async () => {

    }
    const createOrder = async () => {

    }

    const showError = (errorMsg) => {

    }

    const products = [
		{ id: 1, title: 'Title 1', discription: 'This is a description', url: 'https://picsum.photos/id/7/300/300', price: 9999 },
		{ id: 2, title: 'Title 2', discription: 'This is a description', url: 'https://picsum.photos/id/77/300/300', price: 9999 },
	]
</script>