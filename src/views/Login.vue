<template>
  <v-card>
    <v-row justify="center" fixed-tabs dark>
      <v-col cols="8">
        <v-container>
          <v-tabs color="purple">
            <v-tab>Register</v-tab>
            <v-tab-item>
              <register />
            </v-tab-item>
            <v-tab>Sign In</v-tab>
            <v-tab-item>
              <signin />
            </v-tab-item>
          </v-tabs>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import signin from '../../components/signin'
import register from '../../components/register'
export default {
  components: {
    signin,
    register
  },

};
</script>