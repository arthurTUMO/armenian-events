<template>
       <v-card >
         <v-container>
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
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        </v-row>
       <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn color="purple" text small>Submit</v-btn>
      </div>
      </v-col>
      </v-row>
      </v-form>
      </v-container>
      </v-card>
</template>

<script>
export default {
  name:"signin",
  data () {
    return {
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  }
}
</script>