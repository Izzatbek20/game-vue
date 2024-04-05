<template>
  <main class="flex justify-center items-center">
    <h2 class="absolute top-10 text-[#007F73] font-extrabold text-7xl a3720">37-20</h2>
    <div>
      <div>
        <div class="custom-shape-divider-bottom-1711363695 -z-10">
          <svg class="relative block w-[calc(300% + 1.3px)] h-[50rem] xs:max-sm:h-[80rem]" data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="fill-white"></path>
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <ButtonLink href="/game" title="Boshlash" />
        <!-- <ButtonLink href="/" title="Ball" /> -->
      </div>
    </div>
  </main>
</template>

<script>
import ButtonLink from '../components/ButtonLink.vue';
import dataJson from '@/data.json'
import { arrIndex, range, removeItemFromArray, makeOptions } from '@/helpers/range.js'
import { setItem } from '@/helpers/rwLocalStorage.js'
import AES from 'crypto-js/aes';

export default {
  components: {
    ButtonLink
  },
  mounted() {
    const data = []

    const arr = range(0, dataJson.length)

    for (let index = 0; index < dataJson.length; index++) {
      if (arr) {
        const arr_index = arrIndex(arr)
        const element = dataJson[arr_index];
        removeItemFromArray(arr, arr_index)

        data.push({
          "qTitle": element.title,
          "qImage": element.image,
          "qOptions": makeOptions(dataJson, element, arr_index)
        })
      }
    }
    setItem('q_true', 0)
    setItem('data', data)
  }
}
</script>
<style scoped>
.a3720 {
  font-family: 'Courier New', Courier, monospace;
}

.custom-shape-divider-bottom-1711363695 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
</style>