<template>
  <v-container>
    <v-toolbar flat>
      <!-- <v-toolbar-title>Photography</v-toolbar-title> -->
      <v-img
        class="mx-2"
        src="../assets/index.jpg"
        max-height="120"
        max-width="120"
        contain
      ></v-img>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        
        <v-btn text href="#home">
          Home
        </v-btn>

        <v-btn text href="#about">
          About
        </v-btn>
        <v-btn text href="#services">
          Services
        </v-btn>

        <v-btn text href="#contact">
          Contact
        </v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                ><router-link to="/about">About</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/contact"
                  >Contact</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.v-application a {
  color: black;
}
</style>
