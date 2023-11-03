<template>
  <HeaderBlock />
  <MainPage />
  <FooterBlock />
  <HeaderBlock />
  <ArticlesPage />
  <FooterBlock />
  <HeaderBlock />
  <BlogPage />
  <FooterBlock />
  <HeaderBlock />
  <ProjectPage />
  <FooterBlock />
  <HeaderBlock />
  <ProjectDetailsPage />
  <FooterBlock />
</template>

<script>
import MainPage from './components/MainPage.vue';
import ArticlesPage from './components/ArticlesPage.vue';
import BlogPage from './components/BlogPage.vue';
import ProjectPage from './components/ProjectPage.vue';
import ProjectDetailsPage from './components/ProjectDetailsPage.vue';
import HeaderBlock from './components/commonComponents/HeaderBlock.vue';
import FooterBlock from './components/commonComponents/FooterBlock.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    ArticlesPage,
    BlogPage,
    ProjectPage,
    ProjectDetailsPage,
    HeaderBlock,
    FooterBlock
  }  
}
</script>

<style lang="scss">

</style>
