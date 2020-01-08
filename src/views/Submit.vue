<template>
  <v-row style="height: 100%;" justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card class="pa-8" outlined>
        <v-form v-model="valid">
          <v-container>
            <h2>Submit an Event</h2>
            <v-text-field
              class="my-6"
              clearable
              v-model="topic"
              label="Title/topic of the event"
              outlined
              :rules="[v => !!v || 'Title/topic is required']"
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="Description"
              outlined
              :rules="[v => !!v || 'Description is required']"
            ></v-textarea>
            <v-text-field
            v-model="img"
            label="Add a link to the event image"
            outlined
            :rules="[v => !!v || 'Link is required']">
            </v-text-field>
            <v-text-field
            v-model="host"
            label="Who is hosting the event?"
            outlined
            :rules="[v => !!v || 'Host is required']">
            </v-text-field>
            <v-text-field
            v-model="position"
            label="Where is the event?"
            outlined
            :rules="[v => !!v || 'Location is required']">
            </v-text-field>
            <v-select
              :items="types"
              label="Select an event type."
              v-model="type"
              required
            >
            </v-select>
            <v-btn :disabled="!valid" @click="postEvent" color="success">Submit</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    img: null,
    topic: null,
    description: null,
    valid: true,
    host: null,
    position: null,
    type: null,
    types: [ { text: 'Main Event', value: 'main' }, { text: 'Music Event', value: 'music' },
      { text: 'Sport Event', value: 'sport' }, { text: 'Tech Event', value: 'tech' }]
  }),
  methods: {
    postEvent: async function () {
      let response = await axios.post('https://arm-events.herokuapp.com/postEvent', { topic: this.topic, img: this.img, description: this.description, host: this.host, position: this.position, type: this.type })
      let id = response.data
      this.$router.push(`/display/${id}`)
    }
  }
}
</script>
