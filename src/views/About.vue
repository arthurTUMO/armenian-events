<template>
  <div>
    <v-parallax dark height="500" src="https://cdn.hipwallpaper.com/i/29/62/ISWR7o.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 black--text">Armenian Events</h1>
          <h4 class="subheading black--text">About us</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <h2 class="mt-12 mb-6 display-2">Meet our team</h2>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Harut Sargsyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Front-end developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus repellendus. Saepe iusto aspernatur ipsa aliquid illum. Neque libero doloribus nemo facilis quis delectus cumque, sapiente vel corrupti quidem.</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Arman Khandanyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Back-end developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur possimus impedit. Doloribus cumque suscipit, tenetur tempore expedita sapiente cupiditate nostrum accusamus laborum dolores, maxime quas fugit! Neque, ratione veritatis?</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Karine Ter-Minasyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Front-end developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ipsum architecto exercitationem quisquam commodi quis quasi perspiciatis amet voluptatum unde maxime incidunt, eum inventore voluptatibus aut repellendus nemo deserunt modi!</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
 
 
<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {}
};
</script>
 

