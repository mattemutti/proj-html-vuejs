<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppNavbar

  },
  data() {
    return {

    }
  },
  methods: {
    // qui le funzioni
  },
  mounted() {
    // qui i log nell hook mounted
  }
}
</script>
<template>

  <AppHeader />
  <AppNavbar class="position-fixed" />
  <!-- creare il componente nav bar -->
  <AppMain />
  <AppFooter />

</template>
<style></style>