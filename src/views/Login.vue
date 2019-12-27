<template>
<v-container>  <v-card>
    <v-row justify="center" fixed-tabs dark>
      <v-col cols="8">
        <v-container>
          <v-tabs color="purple">
            <v-tab>Register</v-tab>
            <v-tab-item>
              <Register />
            </v-tab-item>
            <v-tab>Sign In</v-tab>
            <v-tab-item>
              <SignIn />
            </v-tab-item>
          </v-tabs>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
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