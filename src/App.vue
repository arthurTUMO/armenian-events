<template>
  <v-app>
    <v-app-bar
      fixed
      app
      dark
      color="purple darken-4"
    >
      <v-app-bar-nav-icon color="white" class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title id="navbar" class="hidden-sm-and-down display-2 font-weight-light">Armenian Events</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" justify="end" dense>
        <v-slide-x-reverse-transition>
            <v-text-field
              v-model="search"
              clearable
              flat
              filled
              hide-details
              dark
              label="Search"
              v-if="show"
            ></v-text-field>
          </v-slide-x-reverse-transition>
          <v-icon color="white" @click="show = !show">mdi-magnify</v-icon>
      </v-row>
      <template v-slot:extension v-show="size > 500" class="hidden-md-and-down">
        <v-tabs align-with-title background-color="transparent" class="hidden-sm-and-down">
          <v-tab color="purple darken-4" to="/">Home</v-tab>
          <v-tab color="purple darken-4" to="/about">About</v-tab>
          <v-tab color="purple darken-4" to="/events">Events</v-tab>
          <v-tab color="purple darken-4" to="/login">Login</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer disable-resize-watcher class="hidden-md-and-up" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Armenian Events
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="$router.push('/');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/about');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/events');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/login');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="pl=0">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
    app
    dark
    padless
    absolute
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
  </v-app>
</template>

<script>
export default {
  components: {},
  name: "App",
  data: () => ({
    drawer: false,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    search: null,
    show: false,
    size: window.innerWidth
  })
};
</script>
