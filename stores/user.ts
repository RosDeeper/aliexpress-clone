import { defineStore } from "pinia"

interface UserState {
    isMenuOverLay: boolean,
    isLoading: boolean,
    cart: any[],
    checkout: any[],
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        isMenuOverLay: false,
        isLoading: false,
        cart: [],
        checkout: [],
    }),
    persist: true,
})