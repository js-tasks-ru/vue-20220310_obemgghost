<template>
  <header class="header">
    <meetups-logo @push="(n) => $emit('push', n)" />
    <meetups-nav @push="(n) => $emit('push', n)" />
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import MeetupsLogo from './MeetupsLogo';
import MeetupsNav from './MeetupsNav';

export default defineComponent({
  name: 'MeetupsHeader',
  components: { MeetupsNav, MeetupsLogo },

  data(){
    return {

    }
  }
});
</script>

<style scoped>
.header {
  padding: 44px 0 32px;
  background-color: var(--white);
}
</style>
