<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <section class="description">
          <div class="description__background">
            <div class="description__background__info">
              <h1 class="description__background__info__title">
                Let Your Home Be Unique
              </h1>
              <h2 class="description__background__info__subtitle">
                There are many variations of the passages of lorem Ipsum
                fromavailable, majority.
              </h2>
              <button class="description__background__info__button">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                    stroke="#CDA274"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section class="our__projects">
          <div class="our__projects__text">
            <h2 class="our__projects__text__title">Follow Our Projects</h2>
            <h2 class="our__projects__text__subtitle">
              It is a long established fact that a reader will be distracted by
              the of readable content of page lookings at its layouts points.
            </h2>
          </div>
          <div class="our__projects__items">
            <div class="our__projects__items__item">
              <div class="our__projects__items__item__img">
                <img
                  class="one__img"
                  src="../assets/img/project_photo_one.jpg"
                  alt="photo"
                  width="550"
                  height="525"
                />
              </div>
              <div class="our__projects__items__item__description">
                <div class="our__projects__items__item__description__text">
                  <h2>Modern Kitchan</h2>
                  <h2>Decor / Artchitecture</h2>
                </div>
                <div class="our__projects__items__item__description__arrow">
                  <a href="#"
                    ><img src="../assets/img/arrow_in_circle.svg" alt="arrow"
                  /></a>
                </div>
              </div>
            </div>
            <div class="our__projects__items__item">
              <div class="our__projects__items__item__img">
                <img
                  class="two__img"
                  src="../assets/img/project_photo_two.jpg"
                  alt="photo"
                  width="550"
                  height="525"
                />
              </div>
              <div class="our__projects__items__item__description">
                <div class="our__projects__items__item__description__text">
                  <h2>Modern Kitchan</h2>
                  <h2>Decor / Artchitecture</h2>
                </div>
                <div class="our__projects__items__item__description__arrow">
                  <a href="#"
                    ><img src="../assets/img/arrow_in_circle.svg" alt="arrow"
                  /></a>
                </div>
              </div>
            </div>
            <div class="our__projects__items__item">
              <div class="our__projects__items__item__img">
                <img
                  class="three__img"
                  src="../assets/img/project_photo_three.jpg"
                  alt="photo"
                  width="550"
                  height="525"
                />
              </div>
              <div class="our__projects__items__item__description">
                <div class="our__projects__items__item__description__text">
                  <h2>Modern Kitchan</h2>
                  <h2>Decor / Artchitecture</h2>
                </div>
                <div class="our__projects__items__item__description__arrow">
                  <a href="#"
                    ><img src="../assets/img/arrow_in_circle.svg" alt="arrow"
                  /></a>
                </div>
              </div>
            </div>
            <div class="our__projects__items__item">
              <div class="our__projects__items__item__img">
                <img
                  class="four__img"
                  src="../assets/img/project_photo_four.jpg"
                  alt="photo"
                  width="550"
                  height="525"
                />
              </div>
              <div class="our__projects__items__item__description">
                <div class="our__projects__items__item__description__text">
                  <h2>Modern Kitchan</h2>
                  <h2>Decor / Artchitecture</h2>
                </div>
                <div class="our__projects__items__item__description__arrow">
                  <a href="#"
                    ><img src="../assets/img/arrow_in_circle.svg" alt="arrow"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="marketing">
          <div class="marketing__numbers">
            <div class="marketing__numbers__info">
              <h2>12</h2>
              <p>Years Of Experiance</p>
            </div>
            <div class="marketing__numbers__info">
              <h2>85</h2>
              <p>Success Project</p>
            </div>
            <div class="marketing__numbers__info">
              <h2>15</h2>
              <p>Active Project</p>
            </div>
            <div class="marketing__numbers__info">
              <h2>95</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </section>
        <section class="news">
          <div class="news__text">
            <h2 class="news__text__title">Articles & News</h2>
            <h2 class="news__text__subtitle">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </h2>
          </div>
          <div class="news__items">
            <MainAndArticlesItems v-for="item in articles" :key="item.id" :article="item" />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import MainAndArticlesItems from "./commonComponents/MainAndArticlesItems.vue";
import img17 from "../assets/img/news_photo_one.jpg";
import img18 from "../assets/img/news_photo_two.jpg";
import img19 from "../assets/img/news_photo_three.jpg";
import img20 from "../assets/img/arrow_in_circle.svg";

export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          img: img17,
          rectangle: "Kitchen Design",
          headerOne: "Let’s Get Solution For Building Construction",
          headerTwo: "Work",
          date: "26 December,2022",
          arrow: img20,
        },
        {
          id: 2,
          img: img18,
          rectangle: "Living Design",
          headerOne: "Low Cost Latest Invented Interior Designing",
          headerTwo: "Ideas.",
          date: "22 December,2022",
          arrow: img20,
        },
        {
          id: 3,
          img: img19,
          rectangle: "Interior Design",
          headerOne: "Best For Any Office & Business Interior ",
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

<style lang="scss" scoped>
  .news {
    margin-bottom: 96px;

    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      margin-bottom: 52px;

      h2:last-child {
        width: 67.6%;
        text-align: center;
        color: #4d5053;
        font-family: "Jost", sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
      }
    }
  }
</style>
