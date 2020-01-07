<template>
    <v-card >
      <v-row  justify="center">
        <v-col cols="8">
            <h1>Registration</h1>
            <v-form ref="form" @submit.prevent="submit">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                  :rules="nameRules"
                  v-model="firstName"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                  :rules="nameRules"
                  v-model="lastName"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email Address"
                  v-model="email"
                  :rules="emailRules"
                  required></v-text-field>
                </v-col>
            <v-col cols="12">
              <v-text-field label="Confirm Email Address"
                    v-model="emailConfirmation"
                    :rules="emailConfirmationRules"
                    required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                error-count="5"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 5 characters"
                  counter
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
  name: 'Register',
  data () {
    return {
      show1: false,
      firstName: null,
      lastName: null,
      email: null,
      emailConfirmation: null,
      password: null,
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
      nameRules:[
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
