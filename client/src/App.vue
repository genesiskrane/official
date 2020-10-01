<template>
  <v-app>
    <v-app-bar app color="white">
      <Header />
    </v-app-bar>

    <v-main>
      <Hero />
      <About />
      <Services />
      <Newsletter />
      <Contact />
    </v-main>
    <v-footer padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Newsletter from "./components/Newsletter";

import Services from "./components/Services";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    About,
    Newsletter,
    Services,
    Contact,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
