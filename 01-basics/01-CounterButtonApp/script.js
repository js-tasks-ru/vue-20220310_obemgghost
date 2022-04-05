import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = defineComponent({
  name: 'App',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
  },
});
const counterApp = createApp( App );
const vm = counterApp.mount('#app');
