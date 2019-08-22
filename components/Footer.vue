<template>
  <footer class="sans">
    <ul class="social">
      <li v-for="(soc, i) in socials" :key="soc.url">
        <a :href="soc.url" rel="nofollow">
          <span class="label">{{(i + 1) * 13}}</span>
          <span class="link">{{soc.name}}</span>
        </a>
      </li>
    </ul>

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
    return {
      socials: [
        { name: 'twitter', url: 'https://twitter.com/rrrrrrod'},
        // { name: 'instagram', url: 'https://www.instagram.com/rrrrrrrrrrrod/'},
        { name: 'github', url: 'https://github.com/rod'},
        { name: 'dribbble', url: 'https://dribbble.com/rrrrrrod'},
        { name: 'linkedin', url: 'https://linkedin.com/in/rodneydennis'},
      ]
    }
  },
}
</script>

<style scoped>
footer {
  padding: 0 var(--space-1);
}

.social {
  border-top: 1px var(--black) solid;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--font-size-1);
  list-style: none;
  margin: 0;
  padding: var(--space-1) 0;
}

.social li {
  display: inline-block;
  flex: 1 1 50%;
  text-align: center;
  padding: var(--space-1) 0;
}

.social li:not(:nth-child(even)):not(:last-child) {
  border-right: 1px solid var(--black);
}

.social li a {
  display: block;
}

.social li a span {
  display: block;
}

.social li a span.label {
  font-family: var(--sans);
  font-weight: 600;
}

.social li a span.link {
  font-family: var(--serif);
  font-style: italic;
}

@media screen and (min-width: 30rem) {
  .social li {
    flex: 1 1 auto;
  }

  .social li:not(:last-child) {
    border-right: 1px solid var(--black);
  }
}
</style>
