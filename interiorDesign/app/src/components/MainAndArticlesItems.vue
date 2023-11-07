<template>
  <router-link
    class="news__items__item"
    :to="{ name: 'BlogDetails', params: { id: article.id } }"
  >
    <div class="news__items__item__img">
      <img :src="article.img" alt="photo" />
    </div>
    <div class="news__items__item__description">
      <div class="news__items__item__description__text">
        <h2>{{ article.headerOne }}<br />{{ article.headerTwo }}</h2>
      </div>
      <div class="news__items__item__description__datas">
        <div class="news__items__item__description__datas__data">
          <p>{{ article.date }}</p>
        </div>
        <div class="news__items__item__description__datas__arrow">
          <a href="#"><img :src="article.arrow" alt="arrow" width="52" /></a>
        </div>
      </div>
    </div>
    <div class="news__items__item__tag">
      <p>{{ article.rectangle }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped></style>
