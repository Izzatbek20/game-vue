<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink :to="href"
        class="flex justify-center font-bold items-center mt-5 w-60 h-14 rounded-3xl text-white bg-[#54c48e] hover:bg-[#2f6e4f]">
        {{ title }}
    </RouterLink>
</template>

<script>
export default {
    props: {
        href: {
            href: String,
            required: true
        },
        title: {
            title: String,
            required: true
        },
    }
}
</script>

<style scoped>
</style>