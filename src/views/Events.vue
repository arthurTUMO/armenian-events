<template>
  <v-container>
    <h2 style="color:purple">Tech Events</h2>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="purple darken-4"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col cols="11" sm="6" md="4" lg="3" v-for="techevent in techEvents" :key="techevent.id">
        <v-card max-width="350" hover outlined shaped @click="$router.push({path: `display/${techevent.id}`})">
          <v-img class="white--text align-end" height="150px" :src="techevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{techevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{techevent.host}}</div>
            <div>{{techevent.topic}}</div>
            <div>{{techevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click.stop="changeColor(techevent)" icon>
              <v-icon :color="techevent.color">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 style="color:purple">Musical Events</h2>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="purple darken-4"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col cols="11" sm="6" md="4" lg="3" v-for="musicevent in musicEvents" :key="musicevent.id">
        <v-card max-width="350" hover outlined shaped @click="$router.push({path: `display/${musicevent.id}`})">
          <v-img class="white--text align-end" height="150px" :src="musicevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{musicevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{musicevent.host}}</div>
            <div>{{musicevent.topic}}</div>
            <div>{{musicevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click.stop="changeColor(musicevent)" icon>
              <v-icon :color="musicevent.color">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 style="color:purple">Sport Events</h2>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="purple darken-4"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col cols="11" sm="6" md="4" lg="3" v-for="sportevent in sportEvents" :key="sportevent.id">
        <v-card max-width="350" hover outlined shaped @click="$router.push({path: `display/${sportevent.id}`})">
          <v-img class="white--text align-end" height="150px" :src="sportevent.img"></v-img>

          <v-card-subtitle class="pb-0">{{sportevent.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{sportevent.host}}</div>
            <div>{{sportevent.topic}}</div>
            <div>{{sportevent.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click.stop="changeColor(sportevent)" icon>
              <v-icon :color="sportevent.color">mdi-heart</v-icon>
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
    musicEvents: null,
    loading: true
  }),
  methods: {
    changeColor (event) {
      if (event.color == "grey") {
        event.color = "red"
      } else {
        event.color = "grey"
      }
    },
    getAllEvents: async function () {
      let response = await axios.get('https://arm-events.herokuapp.com/getAllEvents')
      this.techEvents = response.data['techEvents']
      this.sportEvents = response.data['sportEvents']
      this.musicEvents = response.data['musicEvents']
      this.loading = false
    }
  },
  created () {
    this.getAllEvents()
  }
};
</script>
