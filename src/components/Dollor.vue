<script setup>
</script>

<template>
    <div class="flex justify-start items-center bg-[#54c48e] rounded-2xl xs:max-sm:px-2 xs:max-sm:py-0 px-4 py-2">
        <img class="dollor-image" src="./icons/dollar.png" alt="" srcset="">
        <span class="dollor-text">{{ this.$store.state.coin }}</span>
    </div>
</template>
<script>

export default {
    mounted() {
        this.$store.dispatch('initCoin')
    }
}
</script>
<style scoped>
.dollor-image {
    width: 2rem;
}

.dollor-text {
    font-weight: bold;
    font-size: x-large;
    margin-left: 0.5rem;
    color: white;
}
</style>