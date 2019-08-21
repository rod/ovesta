<template>
  <div class="intro">
    {{ site }}
  </div>
</template>

<script>
export default {
  layout: 'default',

  data() {
    return {
      bodycopy: '',
    }
  }
}
</script>

<style>
.intro {
  font-size: var(--font-size-6);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}
</style>
