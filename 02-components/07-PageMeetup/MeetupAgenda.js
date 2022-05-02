import { defineComponent } from './vendor/vue.esm-browser';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: Array,
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="agendaItem in agenda">
        <!-- meetup agenda item -->
          <meetup-agenda-item :agenda-item="agendaItem"></meetup-agenda-item>
      </li>
    </ul>`,
});
