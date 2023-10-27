<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <section class="articles__description">
          <div class="articles__description__background">
            <div class="articles__description__background__info">
              <h1 class="articles__description__background__info__title">
                Articles & News
              </h1>
              <h2 class="articles__description__background__info__subtitle">
                Home / Blog
              </h2>
            </div>
          </div>
        </section>
        <section class="articles__posts">
          <h2>Latest Post</h2>
          <div class="articles__posts__content">
            <img
              class="articles__posts__content__img"
              src="../assets/img/post_img.jpg"
              alt="photo"
            />
            <div class="articles__posts__content__text">
              <h2>Low Cost Latest Invented Interior Designing Ideas</h2>
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
              </p>
              <p>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
              <div class="articles__posts__content__text__datas">
                <div class="articles__posts__content__text__datas__data">
                  <p>26 December,2022</p>
                </div>
                <div class="articles__posts__content__text__datas__arrow">
                  <a href="#"
                    ><img src="../assets/img/arrow_in_circle.svg" alt="arrow" width="52"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="news">
          <div class="news__text">
            <h2 class="news__text__title">Articles & News</h2>
          </div>
          <div class="news__items">
            <MainAndArticlesItems v-for="item in articles" :key="item.id" :article="item" />
          </div>
        </section>
        <section class="articles__news__pagination">
          <div class="articles__news__pagination__items">
            <div class="articles__news__pagination__items__item">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              </svg>
              <p>01</p>
            </div>
            <div class="articles__news__pagination__items__item">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              </svg>
              <p>02</p>
            </div>
            <div class="articles__news__pagination__items__item">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              </svg>
              <p>03</p>
            </div>
            <div class="articles__news__pagination__items__item">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                <path
                  d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import MainAndArticlesItems from "./commonComponents/MainAndArticlesItems.vue";
import img1 from "../assets/img/news_photo_one.jpg";
import img2 from "../assets/img/news_photo_two.jpg";
import img3 from "../assets/img/news_photo_three.jpg";
import img4 from "../assets/img/news_photo_four.jpg";
import img5 from "../assets/img/news_photo_five.jpg";
import img6 from "../assets/img/news_photo_six.jpg";
import img20 from "../assets/img/arrow_in_circle.svg";

export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          img: img1,
          rectangle: "Kitchen Design",
          headerOne: "Let’s Get Solution For Building Construction",
          headerTwo: "Work",
          date: "26 December,2022",
          arrow: img20,
        },
        {
          id: 2,
          img: img2,
          rectangle: "Living Design",
          headerOne: "Low Cost Latest Invented Interior Designing",
          headerTwo: "Ideas",
          date: "22 December,2022",
          arrow: img20,
        },
        {
          id: 3,
          img: img3,
          rectangle: "Interior Design",
          headerOne: "Best For Any Office & Business Interior",
          headerTwo: "Solution",
          date: "25 December,2022",
          arrow: img20,
        },
        {
          id: 4,
          img: img4,
          rectangle: "Kitchen Design",
          headerOne: "Let’s Get Solution For Building Construction",
          headerTwo: "Work",
          date: "26 December,2022",
          arrow: img20,
        },
        {
          id: 5,
          img: img5,
          rectangle: "Living Design",
          headerOne: "Low Cost Latest Invented Interior Designing",
          headerTwo: "Ideas",
          date: "22 December,2022",
          arrow: img20,
        },
        {
          id: 6,
          img: img6,
          rectangle: "Interior Design",
          headerOne: "Best For Any Office & Business Interior",
          headerTwo: "Solution",
          date: "25 December,2022",
          arrow: img20,
        },
      ],
    };
  },
  components: {
    MainAndArticlesItems
  },
};
</script>

<style lang="scss" scoped></style>
