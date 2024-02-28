<!-- src/components/Header.vue -->
<template>
  <v-app-bar app fixed color="white" :elevation="2" class="px-4">

    <app-logo></app-logo>
    <v-spacer></v-spacer>

    <div class="d-none d-md-flex">
      <app-header-nav-button v-for="(item, index) in items" :key="index" :routeName="item.routeName" :icon="item.icon"
        :label="item.label" :htmlId="item.htmlId" />
    </div>

    <div class="d-md-none">
      <v-btn :icon="drawer ? 'mdi-close' : 'mdi-menu'" variant="text" @click.stop="drawer = !drawer"></v-btn>
    </div>

  </v-app-bar>
  <v-navigation-drawer app v-model="drawer" class="d-md-none d-flex" @resize="drawer = false" width="1000">
    <v-sheet class="d-flex align-center justify-center h-100 w-100">
      <v-container class="h-auto w-auto">
        <v-row v-for="(item, index) in items" :key="index">
          <v-btn variant="text" class="lighten-4" @click="scrollToElement(item.htmlId)" :prepend-icon="item.icon">
            {{ item.label }}
          </v-btn>
        </v-row>
      </v-container>
    </v-sheet>
  </v-navigation-drawer>
</template>
  
<script>
import AppLogo from './AppLogo.vue'
import AppHeaderNavButton from './AppHeaderNavButton.vue';
import store from '@/store';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { htmlId: 'home', routeName: 'Home', icon: 'mdi-home', label: 'Home' },
        { htmlId: 'about-me', routeName: 'About', icon: 'mdi-account', label: 'About' },
        { htmlId: 'projects', routeName: 'Home', icon: 'mdi-briefcase', label: 'Projects' },
        { htmlId: 'contact', routeName: 'Home', icon: 'mdi-email', label: 'Contact' },
      ],
    };
  },
  methods: {
    //   toggleDrawer() {
    //     this.drawer = !this.drawer;
    //   },
    scrollToElement(htmlId) {
      this.drawer = false;
      store.commit('setScrollTarget', htmlId);
    }
  },
  components: { AppHeaderNavButton, AppLogo }
};
</script>
  
<style scoped>
/* Add any custom styling for your header here */
</style>
  