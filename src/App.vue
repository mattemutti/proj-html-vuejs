<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter

  },
  data() {
    return {
      message: 'By'

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

  <h1>{{ message }}</h1>
  <AppHeader />

</template>
<style></style>