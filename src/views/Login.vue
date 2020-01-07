<template>
<v-container>
    <v-row justify="center" fixed-tabs dark>
      <v-col cols="8">
        <v-tabs color="purple">
          <v-tab>Register</v-tab>
          <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
            <Register />
          </v-tab-item>
          <v-tab>Sign In</v-tab>
          <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
            <SignIn />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
import SignIn from '../components/SignIn.vue'
import Register from '../components/Register.vue'
export default {
  components: {
    SignIn,
    Register
  },

};
</script>
