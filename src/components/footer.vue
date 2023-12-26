<template>
  <div class="cont_footer" :style="{ height: setHeight }">
    <a class="text">&copy; ChatON {{ year }}</a>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    height: Number,
  },

  computed: {
    year() {
      const dat = new Date();
      return dat.getFullYear();
    },
    setHeight() {
      return this.height ? `${this.height}px` : "200px";
    },
  },
};
</script>

<style scoped>
.cont_footer {
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-align: center;
  padding-top: 15px;
}
a {
  text-decoration: none;
}
</style>
