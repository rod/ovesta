<template>
  <footer>
    <div class="copy">
      <p>Good artists &copy; {{year}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return{
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style>
footer {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  font-family: 'Space Mono', monospace;
  font-size: var(--font-size-1);
  padding: 1.125rem;
  text-transform: lowercase;
  width: 100%;
}

.copy {
  flex: 1;
  margin-right: 1.125rem;
  order: 1;
}
</style>

