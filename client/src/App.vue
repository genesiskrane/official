<template>
  <v-app>
    <v-app-bar app color="white">
      <Header />
    </v-app-bar>

    <v-main>
   <Hero />
      
    </v-main>
    <v-footer padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Hero from './components/Hero';
import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  name: "App",

  components: {
    Header,
    Hero,
   
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
