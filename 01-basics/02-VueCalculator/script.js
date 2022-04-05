import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const AppData = defineComponent({
  name: 'App',

  data() {
    return {
      valueA: 0,
      valueB: 0,
      operator: 'sum',
    };
  },
  computed: {
    calculateResult() {
      if (this.operator === 'sum') return this.valueA + this.valueB;
      if (this.operator === 'subtract') return this.valueA - this.valueB;
      if (this.operator === 'multiply') return this.valueA * this.valueB;
      if (this.operator === 'divide') return this.valueA / this.valueB;
    },
  },
});

const App = createApp(AppData).mount('#app');
