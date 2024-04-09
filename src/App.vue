<script>
import AppHeader from './components/AppHeader.vue';
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

  <section>

    <div class="position-relative">
      <button class="demos btn text-center">
        <i class="fa-solid fa-folder-plus"></i>
        <div>Demos</div>
      </button>
      <button class="on_sale btn text-center">
        <div class="price_green">$39</div>
        <div>On Sale</div>
      </button>
    </div>
    <!-- Button left All page -->

    <AppHeader />
    <AppNavbar class="position-absolute" />
    <AppMain />
    <AppFooter />
  </section>

</template>
<style></style>