<template>
    <div class="absolute top-0 left-0  h-dvh w-full bg-[#46738793] flex justify-center items-center z-50">
        <div class="w-80  rounded-3xl p-6 bg-white">
            <div class="h-20 relative  flex flex-col justify-center items-center">
                <img v-if="win_emoji"
                    class="absolute drop-shadow-2xl w-36 h-w-36 rounded-full text-center leading-[5rem] -top-20"
                    src="./icons/win-emoji.png" alt="" srcset="">
                <img v-else-if="loss_emoji"
                    class="absolute drop-shadow-2xl w-36 h-w-36 rounded-full text-center leading-[5rem] -top-20"
                    src="./icons/loss-emoji.png" alt="" srcset="">
                <img v-else class="absolute drop-shadow-2xl w-36 h-w-36 rounded-full text-center leading-[5rem] -top-20"
                    src="./icons/exit-emoji.png" alt="" srcset="">
            </div>
            <div class="h-full w-full flex flex-col justify-center items-center">
                <div class="mt-5 w-48 text-center text-gray-400">
                    <h2 class="text-xl font-bold" :class="win_emoji ? 'text-[#54c48e]' : 'text-[#c45454]'">
                        <span v-if="star > 4">Zo'r!!!</span>
                        <span v-else-if="star < 4">Ex!!!</span>
                        <span v-else>Yana bir o'ylab ko'ring</span>
                    </h2>
                    <Stars v-if="data" :data="data" :star="star" />
                    <div v-else>
                        Siz rostdan ham o'yini tark etmoqchimisiz.
                    </div>
                </div>
                <button class="mt-5 w-48 h-12 rounded-3xl text-white hover:bg-[#2f6e4f] bg-[#54c48e]"
                    :class="exit_emoji ? null : 'hidden'" @click="$emit('closeModal')">
                    Davom etish
                </button>
                <button class="mt-5 w-48 h-12 rounded-3xl text-white"
                    :class="win_emoji ? 'bg-[#54c48e] hover:bg-[#2f6e4f]' : 'bg-[#c45454] hover:bg-[#7e3636]'"
                    @click="$router.push({ name: 'home' })">
                    Bosh sahifaga qaytish
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Stars from '@/components/Stars.vue';
export default {
    data() {
        return {
            win_emoji: false,
            loss_emoji: false,
            exit_emoji: false,
        }
    },
    props: {
        modalType: String,
        data: Object,
        star: Number
    },
    components: {
        Stars
    },
    mounted() {
        switch (this.modalType) {
            case 'win':
                this.win_emoji = true
                break;
            case 'loss':
                this.loss_emoji = true
                break;

            default:
                this.exit_emoji = true
                break;
        }

    }
}
</script>
<style></style>