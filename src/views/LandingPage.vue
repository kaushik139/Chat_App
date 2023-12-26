<template>
  <div class="container-fluid m-0 p-0">
    <nav-bar class="m-0 navBaar" :data="navData"></nav-bar>
    <carousel :data="carouselData"></carousel>
    <!-- text -->
    <div class="text">
      <button class="btn btn-primary btn-lg m-5" @click="$router.push('/auth')">
        Get Started
      </button>
      <div class="para">
        <div class="row">
        <div class="col-md-6 left-col">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          eligendi dolores illo cumque ipsam culpa, libero nobis ullam quam odit
          natus blanditiis dicta. Officiis earum facilis rerum reiciendis
          tempore corporis labore pariatur perferendis et perspiciatis
          consequatur, architecto quam omnis dolore vero nihil eaque. Quod
          recusandae qui ducimus quo, quia vitae.
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-6 right-col">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          eligendi dolores illo cumque ipsam culpa, libero nobis ullam quam odit
          natus blanditiis dicta. Officiis earum facilis rerum reiciendis
          tempore corporis labore pariatur perferendis et perspiciatis
          consequatur, architecto quam omnis dolore vero nihil eaque. Quod
          recusandae qui ducimus quo, quia vitae.
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 left-col">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          eligendi dolores illo cumque ipsam culpa, libero nobis ullam quam odit
          natus blanditiis dicta. Officiis earum facilis rerum reiciendis
          tempore corporis labore pariatur perferendis et perspiciatis
          consequatur, architecto quam omnis dolore vero nihil eaque. Quod
          recusandae qui ducimus quo, quia vitae.
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-6 right-col">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          eligendi dolores illo cumque ipsam culpa, libero nobis ullam quam odit
          natus blanditiis dicta. Officiis earum facilis rerum reiciendis
          tempore corporis labore pariatur perferendis et perspiciatis
          consequatur, architecto quam omnis dolore vero nihil eaque. Quod
          recusandae qui ducimus quo, quia vitae.
        </div>
      </div>
      </div>
    </div>
    <Footer class="footer" :height="footerHeight"></Footer>
  </div>
</template>

<script>
import NavBar from "../components/navBar.vue";
import Footer from "../components/footer";
import Carousel from "@/components/carousel.vue";

export default {
  components: {
    NavBar,
    Footer,
    Carousel,
  },

  computed: {},

  data: () => ({
    navData: {
      showProfileChip: false,
      showLandingPageControls: true,
    },
    carouselData: {
      height: 350,
    },
    footerHeight: 80,
  }),
  async mounted() {},
};
</script>

<style scoped>
.container-fluid {
  margin: none;
  width: 100%;
  height: 100%;
  text-align: center;
}
.navBaar {
  width: 100%;
}
.text {
  margin: 0%;
  background: url("https://motionarray.imgix.net/preview-839815-swnWIo3zY1eLqSUj-large.jpg?w=660&q=60&fit=max&auto=format");
  background-repeat: no-repeat;
  background-size: 100% 140%;
  /* border-radius: 14px; */
}
.para{
  width: 97%;
  margin-left: 1.5%;
}
.left-col {
  text-align: left;
  background: rgb(255, 255, 255);
  border-radius: 18px;
  margin: 2%;
  padding: 2%;
}
.right-col {
  text-align: right;
  background: rgb(43, 226, 217);
  border-radius: 18px;
  margin: 2%;
  padding: 2%;
}
</style>
