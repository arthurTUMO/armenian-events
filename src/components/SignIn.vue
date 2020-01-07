<template>
       <v-card >
         <v-row  justify="center">
           <v-col cols="8">
         <h1>Sign in</h1>
    <v-form ref="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              label="Email"
              required
            ></v-text-field>
          </v-col>
      <v-col cols="12" sm="12">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        </v-row>
      </v-form>
      <v-card-actions>
        <v-btn>Submit</v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
      </v-card>
</template>

<script>
export default {
  name:"SignIn",
  data () {
    return {
      show1: false,
      password: null,
    }
  }
}
</script>
