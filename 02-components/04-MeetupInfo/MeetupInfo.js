import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      require: false,
    },
    place: {
      type: String,
      require: false,
    },
    date: {
      type: Number,
      require: false,
    }
  },
  computed: {
    getDateFull( ) {
      const meetupDate = new Date( this.date );
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return meetupDate.toLocaleString('en-US', options);
    },

    getDateShort( ) {
      const meetupDate = new Date( this.date );
      const iso = meetupDate.toISOString();
      return iso.substring(0, iso.indexOf('T'));
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="getDateShort">{{ getDateFull }}</time>
      </li>
    </ul>`,
});
