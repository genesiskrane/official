<template>
  <v-card color="#4285f4" dark :loading="isUpdating">
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <div class="htwo text-center pt-sm-5">Newsletter</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <div class="px-5">
              <v-btn
                small
                elevation="2"
                color="#ea4436"
                class="pa-6"
                @click="validate()"
              >
                submit</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      emil: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
