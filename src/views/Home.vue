<template>
  <div>
    <Hero />
    <Gallery />
    
    <LatestPost />
    <Newsletter />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import LatestPost from "../components/LatestPost";
import Newsletter from "../components/Newsletter";
export default {
  name: "Home",

  data() {
    return {
      items: [],
    };
  },
  components: {
    Hero,
    Gallery,
    Newsletter,
    LatestPost,
  },
};
</script>

<style>
</style>