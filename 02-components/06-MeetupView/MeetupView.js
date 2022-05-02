import { defineComponent } from './vendor/vue.esm-browser';
import MeetupCover from './MeetupCover';
import MeetupDescription from './MeetupDescription';
import MeetupAgenda from './MeetupAgenda';
import MeetupInfo from './MeetupInfo';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <meetup-cover
        :title="meetup['title']"
        :image="meetup['image']"
      ></meetup-cover>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup['description']"></meetup-description>

            <h3>Программа</h3>
            <meetup-agenda
              v-if="meetup['agenda'][0]" 
              :agenda="meetup['agenda']"
            ></meetup-agenda>
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <meetup-info
              :organizer="meetup['organizer']"
              :place="meetup['place']"
              :date="meetup['date']"
            ></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
