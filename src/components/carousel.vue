<template>

<div id="carouselExampleInterval" class="carousel slide carousel-fade m-2" data-bs-ride="carousel">
  <div class="carousel-inner" :style="{ height: carouselHeight }" >
    <div class="carousel-item active" data-bs-interval="500"> <!-- Change interval to 5000 (5 seconds) -->
      <img src="../assets/1.png" class="d-block" style="width: 28%; margin: auto;">
    </div>
    <div class="carousel-item" data-bs-interval="500"> <!-- Change interval to 5000 (5 seconds) -->
      <img src="../assets/2.png" class="d-block" style="width: 28%; margin: auto;">
    </div>
    <div class="carousel-item" data-bs-interval="500"> <!-- Change interval to 5000 (5 seconds) -->
      <img src="../assets/3.png" class="d-block " style="width: 22%; margin: auto;">
    </div>
  </div>
  <!-- Carousel controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
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
        return this.data ? `${this.data.height}px` : '300px'; // Fallback height if data.height is undefined
      },
    },
    mounted() {

    }
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  