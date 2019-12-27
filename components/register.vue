<template>
    <v-card >
      <v-row  justify="center">
        <v-col cols="8">
          <v-container>
            <h1>Registration</h1>
            <v-form ref="form" @submit.prevent="submit">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                  :rules="namerules"
                  v-model="firstname"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                  :rules="namerules"
                  v-model="secondname"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Email Address"
                  v-model="email"
                  :rules="emailRules"
                  required></v-text-field>

            <v-text-field label="Confirm Email Address"
                  v-model="emailConfirmation"
                  :rules="emailConfirmationRules"
                  required></v-text-field>
                </v-col>
            <v-col cols="12" md="6">
                <v-text-field
                error-count="5"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
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
          </v-col>
        </v-row>
      </v-card>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      show1: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have 5+ characters',
        v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        v => /(?=.*\d)/.test(v) || 'Must have one number',
        v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
      ],
      namerules:[
        v => !!v || 'Name is required'
      ]
    }
  },
  computed: {
    emailConfirmationRules () {
      return [
        () => (this.email === this.emailConfirmation) || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ]
    }
  }
}
</script>