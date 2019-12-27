<template>
  <v-container>
    <h2 style="color:purple">Tech Events</h2>
    <v-row justify="center">
      <v-col cols="9" sm="6" md="4" lg="3" v-for="techevent in techEvents" :key="techevent.id">
        <v-card max-width="350" hover outlined shaped to="/">
          <v-img class="white--text align-end" height="150px" :src="techevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{techevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{techevent.host}}</div>
            <div>{{techevent.topic}}</div>
            <div>{{techevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 style="color:purple">Musical Events</h2>
    <v-row>
      <v-col cols="3" v-for="musicevent in musicEvents" :key="musicevent.id">
        <v-card max-width="350" hover outlined shaped to="/">
          <v-img class="white--text align-end" height="150px" :src="musicevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{musicevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{musicevent.host}}</div>
            <div>{{musicevent.topic}}</div>
            <div>{{musicevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 style="color:purple">Sport Events</h2>
    <v-row>
      <v-col cols="3" v-for="sportevent in sportEvents" :key="sportevent.id">
        <v-card max-width="350" hover outlined shaped to="/">
          <v-img class="white--text align-end" height="150px" :src="sportevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{sportevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{sportevent.host}}</div>
            <div>{{sportevent.topic}}</div>
            <div>{{sportevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
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
  name: "Events",
  components: {},
  data: () => ({
    techEvents: null,
    sportEvents: null,
    musicEvents: null
  }),
  methods: {
    getAllEvents: async function () {
      let response = await axios.get('https://armenian-events.herokuapp.com/getAllEvents')
      this.techEvents = response.data['techEvents']
      this.sportEvents = response.data['sportEvents']
      this.musicEvents = response.data['musicEvents']
    }
  },
  created () {
    this.getAllEvents()
  }
};
</script>