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
    musicEvents: [
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
        position: "Sport-concert hall ",
        id: 10,
        host: "Timati",
        topic: "RAP music",
        description: "All best RAP songs",
        img: require("@/assets/card10.jpg")
      },
      {
        position: "Sport-concert hall ",
        id: 11,
        host: "Tigran Smbatyan",
        topic: "Classical Jackson",
        description: "Best songs of Jackson",
        img: require("@/assets/card11.jpg")
      },
      {
        position: "Sport-concert hall ",
        id: 12,
        host: "Project LA",
        topic: "Rock music",
        description: "Gor Sujyan  and friends",
        img: require("@/assets/card12.jpg")
      }
    ],
    sportEvents: [
      {
        position: "V.Sargsyan stadium",
        id: 4,
        host: "Yerevan Derby",
        topic: "For first place",
        description: "particular match",
        img: require("@/assets/card6.jpg")
      },
      {
        position: "Ice hall named I.Rodnina",
        id: 13,
        host: "Yerevan municipilaty",
        topic: "Skate championship",
        description: "Pretty dancing",
        img: require("@/assets/card13.jpg")
      },
      {
        position: "Mika sport hall",
        id: 14,
        host: "Basketball A league",
        topic: "Urartu vs Aragats",
        description: "Hot fight",
        img: require("@/assets/card14.jpg")
      },
      {
        position: "Ararat sport complex",
        id: 15,
        host: "Volleyball A league",
        topic: "Yerevan vs Hrazdan",
        description: "Men's final match",
        img: require("@/assets/card15.jpg")
      },
      {
        position: "Incourt tennis club",
        id: 16,
        host: "Armenian tennis champ",
        topic: "Mkrtchyan vs Abelyan",
        description: "Men's final match",
        img: require("@/assets/card16.jpg")
      }
    ]
  })
};
</script>