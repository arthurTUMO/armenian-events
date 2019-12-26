<template>
<div>
    <v-row>
      <v-img class="white--text align-end mb-10" height="600px" src="../assets/back.jpeg"></v-img>
    </v-row>
    <h2 style="color:purple">Main Evenst</h2>
    <hr />
    <v-row justify="center">
      <v-col cols="3" v-for="event in events" :key="event.id">
        <v-card max-width="350" hover outlined shaped >
          <v-img class="white--text align-end" height="150px" :src="event.img"></v-img>

          <v-card-subtitle class="pb-0" >{{event.position}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{event.host}}</div>
            <div>{{event.topic}}</div>
            <div>{{event.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/" color="purple" text>Learn more</v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
   <v-footer
   app
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
  
</template>
<script>
export default {
  name: "home",
  components: {},
  data: () => ({
    events: [
      {
        position: "TUMO",
        id: 1,
        host: "Arthur Kasumyan",
        topic: "Get familiar with Vue.js",
        description: "Some node.js skills",
        img: require("@/assets/card1.jpg")
      },
      {
        position: "Shahumyan square",
        id: 2,
        host: "Nemra concert",
        topic: "Rock music",
        description: "Christmas mood",
        img: require("@/assets/card5.jpg")
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
        position: "Barcelona",
        id: 4,
        host: "Super Clasico",
        topic: "For first place",
        description: "Messi VS Bale",
        img: require("@/assets/card6.jpg")
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
        position: "TUMO",
        id: 6,
        host: "Arthin Kasumyan",
        topic: "Get familiar with Ruby",
        description: "Ruby on Rails",
        img: require("@/assets/card2.jpg")
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
        position: "Hayat hotel",
        id: 8,
        host: "Tim Cook",
        topic: "Swift programming language",
        description: "Swift for IOS",
        img: require("@/assets/card4.jpg")
      }
    ]
  })
}
</script>


