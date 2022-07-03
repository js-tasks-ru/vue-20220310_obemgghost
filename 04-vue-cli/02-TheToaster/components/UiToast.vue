<template>
  <div class="toast" :class="toastClass">
    <ui-icon class="toast__icon" :icon="icon" />
    <span><slot /></span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'UiToast',
  components: { UiIcon },
  props: {
    type: {
      require: true,
      type: String,
    },
    id: {
      require: true,
      type: String,
    },
  },

  computed: {
    toastClass() {
      return 'toast_' + this.type;
    },
    icon() {
      const toasts_types = {
        success: 'check-circle',
        error: 'alert-circle',
      };
      return toasts_types[this.type];
    },
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
