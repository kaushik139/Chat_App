<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner" :style="{ height: carouselHeight }">
      <div class="carousel-item active bg-primary" data-bs-interval="2000">
       <div class="carousel2"
       style="width: 100%; max-width: 100%; height: 65vh; display: block; position: relative;">
        <div name="slide-1" class="logo mt-5"> ChatON </div>
       </div>
      </div>
      <div class="carousel-item " data-bs-interval="2000">
        <img
        name="image-slide"
  src="https://www.shutterstock.com/image-photo/woman-using-computer-laptop-on-600nw-1891028470.jpg"
  class="d-block"
  style="width: 100%; max-width: 100%; height: auto; max-height: 65vh; display: block;"
  alt="Description of the image"
/>

      </div>
     
      <!-- <div class="carousel-item" data-bs-interval="500"> -->
        <!-- Change interval to 5000 (5 seconds) -->
        <!-- <img
          src="../assets/3.png"
          class="d-block"
          style="width: 22%; margin: auto"
        />
      </div> -->
    </div>
    <!-- Carousel controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
//   const carousel = new bootstrap.Carousel('#myCarousel')

export default {
  props: {
    data: Object,
  },
  computed: {
    carouselHeight() {
      return this.data ? `${this.data.height}px` : "300px"; // Fallback height if data.height is undefined
    },
  },
  mounted() {},
};
</script>

<style>
/* Your styles here */
.carousel2{
  background: rgb(0, 110, 255);
}
.logo {
  font-size: 160px;
  text-shadow:
    1px 1px 0 #66c2ff,
    2px 2px 0 #0e06fd,
    3px 3px 0 #ed2aff;
  color: transparent;
  position: relative; /* Make the original text color transparent */
}

.logo:hover {
  color: #b42aff;
}
</style>
