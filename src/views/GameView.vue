<template>
  <main class="h-dvh flex flex-col">
    <div class="header flex justify-between p-5">
      <Dollor />
      <Exit />
    </div>
    <div v-if="current_data" class="h-full px-10 flex justify-center items-center ">
      <div
        class="flex flex-row xs:max-sm:flex-col gap-4 bg-white rounded-lg xs:max-sm:p-5 p-10 relative w-[80rem] h-[28rem] xs:max-sm:h-[35rem] overflow-hidden">
        <div>
          {{ q + 1 }}/{{ data.length }}
        </div>
        <div class="basis-1/2 flex justify-center items-center">
          <img :src="'../../public/' + current_data.qImage" class="w-[20rem] xs:max-sm:w-[10rem]" alt="" srcset="">
        </div>
        <div class="basis-1/2 flex justify-center items-start">
          <div class="w-full">
            <div class="font-bold mb-5 text-wrap" @click="as">
               Dastgoh nomini toping
            </div>
            <div class="space-y-3">

              <div v-for="(data, index) in current_data.qOptions" :key="index" @click="selectQuestion(data, index)"
                class="group relative flex flex-row justify-between items-center shadow-sm px-5 py-3 xs:max-sm:px-2 xs:max-sm:py-1 xs:max-sm:text-sm border rounded-lg w-full cursor-pointer font-medium transition hover:scale-105 hover:bg-[#41C9E2] hover:text-white">
                <div class="overflow-hidden">
                  <div
                    class="size-8 rounded-full shadow text-center leading-8 inline-block bg-[#41cae2b3] group-hover:bg-white mr-3">
                    {{ ++index }}
                  </div>
                  {{ data }}
                </div>
                <img v-if="icon && icon[0] == index && icon[1] == true" src="../components/icons/checked.png"
                  class="w-[2rem]" alt="" srcset="">
                <img v-else-if="icon && icon[0] == index && icon[1] == false"
                  src="../components/icons/delete-button.png" class="w-[2rem]" alt="" srcset="">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="win" :modalType="win" :data="data" :star="star" />
  </main>
</template>
<script>
import Dollor from '../components/Dollor.vue';
import Exit from '../components/Exit.vue';
import Modal from '@/components/Modal.vue'
import { ref } from 'vue';
import { getItem, setItem } from '@/helpers/rwLocalStorage.js'

export default {
  data() {
    const win = ref(null);
    return {
      current_data: Object,
      data: Array,
      q: 0,
      star: 0,
      win,
      icon: []
    }
  },
  components: {
    Dollor, Exit, Modal
  },
  methods: {
    selectQuestion(title, index) {
      // To'g'ri javob
      this.icon = [index, true]
      if (this.current_data.qTitle == title) {
        this.$store.dispatch('changeCoint')

        // To'g'ri javaoblar soni
        let q_true_count = 1;
        if (getItem('q_true')) {
          q_true_count += getItem('q_true');
        }
        setItem('q_true', q_true_count)
      } else {
        this.icon = [index, false]
      }


      // Savolni almashtirish
      setTimeout(() => {
        const q = this.q++
        this.icon = null
        this.current_data = this.data[this.q]
      }, 500)
    }
  },
  updated() {
    if (getItem('q_true') >= 0 && this.q == this.data.length) {
      this.star = getItem('q_true') / this.data.length * 5
      this.win = 'loss';
      if (this.star > 4) {
        this.win = 'win';
      }
    }
  },
  mounted() {
    if (getItem('data')) {
      this.data = getItem('data')
      this.current_data = this.data[this.q]
    } else {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style scoped>
* {
  color: black
}
</style>