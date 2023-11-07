<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <div class="header__img">
            <a href="#"><img src="../assets/img/logo.svg" alt="logo" /></a>
          </div>
          <div class="header__name">Interno</div>
        </div>
        <div class="header__navigation">
          <router-link
            class="header__navigation__nav"
            v-for="link in links"
            :key="link.id"
            :to="link.url"
            >{{ link.name }}</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Home",
          url: "/",
        },
        {
          id: 1,
          name: "Project",
          url: "/project",
        },
        {
          id: 2,
          name: "Blog",
          url: "/blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
