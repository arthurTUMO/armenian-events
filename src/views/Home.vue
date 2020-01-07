<template>
  <v-container>
    <v-row>
      <v-img class="white--text align-end mb-10" height="600px" src="back.jpeg"></v-img>
    </v-row>
    <h2 style="color:purple">Main Events</h2>
    <hr />
    <v-row justify="center">
      <v-col cols="11" sm="6" md="4" lg="3" v-for="event in events" :key="event.id">
        <v-card max-width="350" hover outlined shaped @click="$router.push({path: `display/${event.id}`})">
          <v-img class="white--text align-end" height="150px" :src="event.img"></v-img>

          <v-card-subtitle class="pb-0">{{event.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{event.host}}</div>
            <div>{{event.topic}}</div>
            <div>{{event.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/" color="purple" text>Learn more</v-btn>

            <v-btn icon>
              <v-icon :color="color" @click="changeColor">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  name: "home",
  components: {
  },
  data: () => ({
    events: null,
    color: "grey"
  }),
  methods: {
    changeColor () {
      if (this.color == "grey") {
        this.color = "red"
      } else {
        this.color = "grey"
      }
    },
    getMainEvents: async function () {
      let response = await axios.get('https://arm-events.herokuapp.com/getMainEvents')
      this.events = response.data['events']
    }
  },
  created () {
    this.getMainEvents()
  }
};
</script>
