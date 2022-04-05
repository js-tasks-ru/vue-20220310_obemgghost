import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const AppData = defineComponent({
  data() {
    return {
      meetUpId: 1,
      meetupTitle: '',
    };
  },
  watch: {
    meetUpId() {
      this.getMeetupsTitle();
    },
  },
  mounted() {
    this.getMeetupsTitle();
  },
  methods: {
    getMeetupsTitle() {
      fetchMeetupById(this.meetUpId).then((meetup) => {
        this.meetupTitle = meetup.title;
      });
    },
  },
});
const App = createApp(AppData).mount('#app');
