import { defineComponent } from './vendor/vue.esm-browser';

export default defineComponent({
  name: 'MeetupDescription',

  props: {
    description: {
      require: false,
    },
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
});
