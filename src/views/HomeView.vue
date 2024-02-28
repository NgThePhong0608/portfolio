<template>
  <section class="section" ref="home" id="home">
    <AppHero></AppHero>
  </section>
  <section class="section" ref="about-me" id="about-me">
    <AppAboutMe></AppAboutMe>
  </section>
  <section class="section" ref="projects" id="projects">
    <AppProjects></AppProjects>
  </section>
  <section class="section" ref="contact" id="contact">
    <AppContact></AppContact>
  </section>
</template>

<style lang="scss">
#home,
#projects {
  background-color: #f9f9f9;
}
</style>

<script>
import AppAboutMe from '@/components/AppAboutMe.vue';
import AppContact from '@/components/AppContact.vue';
import AppHero from '@/components/AppHero.vue';
import AppProjects from '@/components/AppProjects.vue';
import store from '@/store';


// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { AppHero, AppAboutMe, AppProjects, AppContact },
  computed: {
    scrollTarget() {
      return store.state.scrollToTarget;
    },
  },
  watch: {
    scrollTarget: function (newVal) {
      this.$refs[newVal].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
</script>
