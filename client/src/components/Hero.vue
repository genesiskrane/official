<template>
  <div class="heroBlock" id="home">
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title hidden-xs-only" align="center" justify="center">
          <div>
            {{ item.title }}
          </div>
        </v-row></v-carousel-item
      >
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/images/img-carousel1.jpg"),
          title: "we are creative",
        },
        {
          src: require("../assets/images/img-carousel2.jpg"),
          title: "we are hard working",
        },
        {
          src: require("../assets/images/img-carousel3.jpg"),
          title: "we are professional",
        },
      ],
    };
  },
};
</script>
<style>
</style>