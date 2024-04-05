<template>
    <div>
        <div class="flex justify-start items-center bg-[#54c48e] hover:bg-[#2f6e4f] rounded-2xl xs:max-sm:px-2 xs:max-sm:py-0 px-4 py-2 cursor-pointer"
            @click="openModal">
            <img class="exit-image xs:max-sm:scale-90" src="./icons/exit.png" alt="" srcset="">
        </div>

        <Modal v-if="modalState" :modalType="'exit'" @closeModal="closeHandler" />
    </div>
</template>
<script>
import Modal from './Modal.vue';

export default {
    data() {
        return {
            modalState: false
        }
    },
    components: {
        Modal
    },
    methods: {
        openModal() {
            this.modalState = true
        },
        closeHandler() {
            this.modalState = false
        }
    }
}
</script>
<style scoped>
.exit-image {
    width: 2rem;
}
</style>