<template>
  <HeaderBlock />
  <router-view />
  <FooterBlock />
</template>

<script>
// import MainPage from "./views/MainPage.vue";
// import ArticlesPage from "./views/ArticlesPage.vue";
// import BlogPage from "./views/BlogPage.vue";
// import ProjectPage from "./views/ProjectPage.vue";
// import ProjectDetailsPage from "./views/ProjectDetailsPage.vue";
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";

export default {
  name: "App",
  components: {
    // MainPage,
    // ArticlesPage,
    // BlogPage,
    // ProjectPage,
    // ProjectDetailsPage,
    HeaderBlock,
    FooterBlock
  },
};
</script>
