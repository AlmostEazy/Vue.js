<template>
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.articles__news__pagination {
  padding-left: calc(50% - 134px);
  padding-right: calc(50% - 134px);
  margin-bottom: 200px;

  &__items {
    display: flex;
    align-items: center;
    gap: 20px;

    &__item {
      position: relative;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        position: absolute;
        color: #292f36;
        font-family: "Jost", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        text-transform: capitalize;
      }
    }

    &__item:hover {
      border: none;
      cursor: pointer;
      svg {
        circle {
          fill: #f4f0ec;
          stroke: none;
        }
      }
    }
  }
}

</style>