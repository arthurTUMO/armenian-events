<template>
  <v-conatiner>
    <h2 style="color:purple">Tech Events</h2>
    <v-row justify="left">
      <v-col cols="3" v-for="techevent in techEvents" :key="techevent.id">
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
    <h2 style="color:purple">Misical Events</h2>
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
  </v-conatiner>
</template>


<script>
// @ is an alias to /src

export default {
  name: "Events",
  components: {},
  data: () => ({
    techEvents: [
      {
        position: "TUMO",
        id: 1,
        host: "Arthur Kasumyan",
        topic: "Get familiar with Vue.js",
        description: "Some node.js skills",
        img: require("@/assets/card1.jpg")
      },
      {
        position: "Marriot hotel",
        id: 3,
        host: "Galactical Jedis",
        topic: "Angular.js",
        description: "Some node.js skills",
        img: require("@/assets/card3.jpg")
      },
      {
        position: "Abovyan 34",
        id: 7,
        host: "CEO Adobe",
        topic: "Photoshop",
        description: "Illustrator",
        img: require("@/assets/card8.jpg")
      },
       {
        position: "TUMO",
        id: 6,
        host: "Arthin Kasumyan",
        topic: "Get familiar with Ruby",
        description: "Ruby on Rails",
        img: require("@/assets/card2.jpg")
      },
      {
        position: "Hayat hotel",
        id: 8,
        host: "Tim Cook",
        topic: "Swift programming language",
        description: "Swift for IOS",
        img: require("@/assets/card4.jpg")
      },
      {
        position: "TUMO",
        id: 9,
        host: "Dylan Moore",
        topic: "Python programming language",
        description: "Python in machine learning",
        img: require("@/assets/card9.jpg")
      }
    ],
    musicEvents:
    [
         {
        position: "Shahumyan square",
        id: 2,
        host: "Nemra concert",
        topic: "Rock music",
        description: "Christmas mood",
        img: require("@/assets/card5.jpg")
      },
       {
        position: "Opera and Ballet hall",
        id: 5,
        host: "Simphony",
        topic: "Classical music",
        description: "Philarmonic chor",
        img: require("@/assets/card7.jpg")
      },
          {
        position: "Sport-concert hall named Karen Demirchyan",
        id: 10,
        host: "Timati",
        topic: "RAP music",
        description: "All best RAP songs",
        img: require("@/assets/card10.jpg")
      },
    ]
  })
};
</script>