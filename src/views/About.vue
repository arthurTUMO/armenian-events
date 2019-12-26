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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
    <h2 class="mt-12 mb-6 display-2">Meet our team</h2>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="350">
            <v-card-text class="my-4 text-center title">Harut</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="350">
            <v-card-text class="my-4 text-center title">Arman</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="350">
            <v-card-text class="my-4 text-center title">Karine</v-card-text>
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
 

