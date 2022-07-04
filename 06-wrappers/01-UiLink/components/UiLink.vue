<template>
  <component :is="tag" :href="href" :to="to" :target="target"><slot /></component>
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    tag: {
      type: [String, Object],
      default: 'router-link',
    },
    to: [String, Object],
    href: String,
    target: String,
  },
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
