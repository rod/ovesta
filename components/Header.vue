<template>
  <header>
    <div class="home">
      <nuxt-link to="/">
        <div class="logo">
          <Logo />
        </div>
      </nuxt-link>
    </div>

    <ul class="social">
      <li v-for="soc in socials" :key="soc.url">
        <a :href="soc.url" rel="nofollow">{{soc.name}}</a>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo,
  },

  data() {
    return {
      status: undefined,
      socials: [
        {name: 'tw', url: 'https://twitter.com/rrrrrrod'},
        {name: 'gh', url: 'https://github.com/rod'},
        {name: 'db', url: 'https://dribbble.com/rrrrrrod'},
        {name: 'in', url: 'https://linkedin.com/in/rodneydennis'},
      ]
    }
  },
}
</script>

<style>
header {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-2);
  padding: 1.125rem;
}

.home {
  margin-right: 1.125rem;
}

.logo {
  order: 2;
  text-align: right;
}

.logo > svg {
  display: inline-block;
  transition: .33s ease-out;
}

.logo > svg:hover {
  opacity: 1;
}

.social {
  flex: 1;
  font-family: 'Space Mono', monospace;
  list-style: none;
  padding: 0;
  text-align: right;
  order: 3;
}

.social li {
  display: inline-block;
}

.social li:not(:last-child) {
  margin-right: 0.72rem;
}
</style>

