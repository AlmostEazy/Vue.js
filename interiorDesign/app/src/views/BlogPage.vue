<template>
    <main class="main">
      <div class="container">
        <div class="content">
          <section class="blog__description">
            <div class="blog__description__background"></div>
            <div id="articles">
                <BlogPageItems />              
            </div>
          </section>
        </div>
      </div>         
    </main>
</template>

<script>
import BlogPageItems from '../components/BlogPageItems.vue';
    export default {
        components: {
            BlogPageItems
        }                
    }
</script>

<style lang="scss" scoped>

</style>