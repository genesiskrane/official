<template>
  <v-app>
    <v-app-bar app color="white">
      <Header />
    </v-app-bar>

    <v-main>
   <router-view></router-view>
      
    </v-main>
    <v-footer padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  name: "App",

  components: {
    Header,
   
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
