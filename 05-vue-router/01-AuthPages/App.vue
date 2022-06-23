<template>
  <div class="wrapper">
    <meetups-header @push="(n) => push(n)" />
    <main class="main">
      <page-index v-if="currentPath === '/'" />
      <page-login v-else-if="currentPath === '/login'" />
      <page-register v-else-if="currentPath === '/register'" />
      <div v-else>404 - Not Found</div>
    </main>

    <meetups-footer />
  </div>
</template>

<script>
import MeetupsHeader from './components/MeetupsHeader';
import MeetupsFooter from './components/MeetupsFooter';
import PageIndex from "./views/PageIndex";
import PageLogin from "./views/PageLogin";
import PageRegister from "./views/PageRegister";

export default {
  name: 'App',

  components: {
    MeetupsFooter,
    MeetupsHeader,
    PageIndex,
    PageLogin,
    PageRegister,
  },
  data(){
    return {
      currentPath: location.pathname,
    }
  },
  methods: {
    push(path){
      console.log(path);
      this.currentPath = path;
      history.pushState(null, '', this.currentPath);
    }
  }
};
</script>

<style>
@import '@/assets/styles/_fonts.css';
@import '@/assets/styles/_variables.css';
@import '@/assets/styles/_common.css';

.wrapper {
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>
