import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupView from './MeetupView';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      meetup: null,
      state: '',
      error: '',
    };
  },

  watch: {
    meetupId() {
      this.getMeetupById();
    },
  },

  created() {
    this.getMeetupById();
  },

  methods: {
    getMeetupById() {
      this.state = 'processing';
      fetchMeetupById(this.meetupId).then(
        (meetup) => {
          this.meetup = meetup;
          this.state = 'loaded';
        },
        (error) => {
          this.error = error.message;
          this.state = 'error';
        },
      );
    },
  },

  template: `
    <div class="page-meetup">
      <ui-container v-if="state === 'processing'">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
      <ui-container v-else-if="state === 'error'">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>

      <meetup-view v-else="state === 'loaded'" :meetup="meetup"></meetup-view>
    </div>`,
});
