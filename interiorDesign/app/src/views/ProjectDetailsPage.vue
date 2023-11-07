<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <section class="projectDetails__description">
          <div class="projectDetails__description__background"></div>
        </section>
        <section class="projectDetails__content">
          <div class="projectDetails__content__description">
            <h1>{{ art.header }}</h1>
            <p>{{ art.text1 }}</p>
            <p>{{ art.text2 }}</p>
          </div>
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :zoom="true"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="swiper-zoom-container">
                <img :src="art.img1" alt="photo" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-zoom-container">
                <img :src="art.img2" alt="photo" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-zoom-container">
                <img :src="art.img3" alt="photo" />
              </div>
            </swiper-slide>
          </swiper>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/img/projectDetails_swiper1.jpg";
import img2 from "../assets/img/projectDetails_swiper2.jpg";
import img3 from "../assets/img/projectDetails_swiper3.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
    };
  },
  computed: {
    ...mapState(["articles"]),
    art() {
      return this.articles.find((art) => art.id === Number(this.$route.params.id));
    }
  },
};
</script>

<style lang="scss" scoped>
.projectDetails__description {
  &__background {
    background-image: url(../assets/img/projectDetails_background.jpg);
    height: 351px;
    margin-bottom: 200px;
  }
}

.projectDetails__content {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  &__description {
    width: 658px;
    margin-bottom: 100px;

    h1 {
      font-family: "DM Serif Display", serif;
      font-size: 50px;
    }
    p {
      font-size: 22px;
      font-family: "Jost", sans-serif;
      line-height: 150%;
    }

    p:nth-child(2) {
      margin-bottom: 40px;
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
}
.swiper-slide {
  overflow: hidden;
}
img {
  border-radius: 55px;
}
</style>
<style>
.swiper-pagination {
  position: unset;
}
.swiper-pagination-bullet {
  border: 1px solid #000;
  background: none;
  opacity: 1;
  width: 10px;
  height: 10px;
}
.swiper-wrapper {
  margin-bottom: 20px;
}
</style>
