
<template>
    <div>
        <div class="logo">
            <Logo></Logo>
        </div>
      
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Logo
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 150,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .swiper {
  height: 500px;
  width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      background: #000;
      color: #fff;
    }

  }

</style>
