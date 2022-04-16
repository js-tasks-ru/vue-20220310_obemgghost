import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      reauire: true,
      default: 0,
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  emits: ['update:count'],
  // Шаблон потребуется отредактировать
  template: `
    <button type="button" @click="$emit('update:count', count + 1)">{{ count }}</button>`,
});
