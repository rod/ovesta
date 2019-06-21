<template>
  <footer class="sans">
    <div class="copy">
      <p>Good artists &copy; {{year}}</p>
    </div>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133879449-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-133879449-1');
    </script>
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

<style scoped>
footer {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
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

