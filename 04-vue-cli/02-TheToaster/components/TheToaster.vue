<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasts" :class="toast.type" :icon="toast.icon">{{ toast.message }}</ui-toast>
  </div>
</template>

<script>
import UiToast from "./UiToast";

export default {
  name: 'TheToaster',
  components: { UiToast },
  data(){
    return {
      toasts: [],
    }
  },
  methods: {
    success( message ) {
      this.toasts.push({
        type: 'toast_success',
        message: message,
        icon: 'check-circle'
      });
      setTimeout( () => this.toasts.shift(), 5000 );
    },
    error( message ) {
      this.toasts.push({
        type: 'toast_error',
        message: message,
        icon: 'alert-circle'
      });
      setTimeout( () => this.toasts.shift(), 5000 );
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
