<template>
  <v-app>
    <v-app-bar
      app
      absolute
      dark
      color="purple"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="display-2 font-weight-thin">Armenian Events</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-col>
      </v-row>
      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent" class="hidden-sm-and-down">
          <v-tab color="purple" to="/">Home</v-tab>
          <v-tab color="purple" to="/about">About</v-tab>
          <v-tab color="purple" to="/events">Events</v-tab>
          <v-tab color="purple" to="/login">Login</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer disable-resize-watcher class="hidden-md-and-up" v-model="drawer" app>
      <v-list>
        <v-list-item @click="$router.push('/');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home-modern</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/about');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home-modern</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/events');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home-modern</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/login');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home-modern</v-icon>
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
  </v-app>
</template>

<script>
export default {
  components: {},
  name: "ExerciseFour",
  data: () => ({
    drawer: false
  })
};
</script>

