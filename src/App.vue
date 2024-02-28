<template>
  <v-app>
    <v-main id="main">
      <AppHeader></AppHeader>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
@import 'scss/_breakpoints';
@import 'scss/_fonts';
@import 'scss/_typography';
@import 'scss/_boilerplate';
#main {
  position: relative;
  padding: 0px !important;
}
</style>
