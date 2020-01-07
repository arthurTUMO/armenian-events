<template>
  <div>
    <v-row v-if="loading" justify="center">
      <v-col cols="1">
        <v-progress-circular indeterminate :size="70" :width="7" color="indigo"></v-progress-circular>
      </v-col>
    </v-row>
    <v-card v-if="!loading" class="pa-5">
      <v-card-text>
        <v-row align="end" class="text-center">
          <v-col cols="12" md="6">
            <h1>{{ eventInfo.topic }}</h1>
          </v-col>
          <v-col cols="12" md="6">
            <h3>Event by: {{ eventInfo.host }}</h3>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row class="text-center" justify="space-around">
          <v-col cols="10" md="2">
            <v-icon>mdi-clock</v-icon>
            <br>
            <div>{{ formatTime(eventInfo.time) }}</div>
          </v-col>
          <v-col cols="10" md="2">
            <v-icon>mdi-account</v-icon>
            <br>
            <div>Guests: {{ eventInfo.guests }}</div>
          </v-col>
          <v-col cols="10" md="2">
            <v-icon>mdi-map-marker</v-icon>
            <br>
            <div>Located at: {{ eventInfo.position }}</div>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row justify="center">
          <v-col cols="12">
            <h1>About this Event:</h1>
            <p>{{ eventInfo.description }}</p>
          </v-col>
          <v-divider/>
          <v-col cols="12" md="5">
            <v-img
            :src="eventInfo.img"
            aspect-ratio="1"
            max-height="300">
            </v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn rounded color="primary">Check in</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "About",
  data: () => ({
    eventInfo: null,
    loading: true
  }),
  methods: {
    formatTime: function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    },
    getEventInfo: async function () {
      let response = await axios.get('https://arm-events.herokuapp.com/getEventInfo/' + this.$route.params.id)
      this.eventInfo = response.data['eventInfo']
      this.eventInfo.time = new Date(this.eventInfo.time)
      this.loading = false
    }
  },
  created () {
    this.getEventInfo()
  }
};
</script>
