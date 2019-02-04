<template>
  <header>
    <div class="home">
      <nuxt-link to="/">rod</nuxt-link>
      <!-- <span>&nbsp;is {{ status }}</span> -->
    </div>

    <ul class="social">
      <li><a href="https://twitter.com/rrrrrrod" rel="nofollow">tw</a></li>
      <li><a href="https://twitter.com/rod" rel="nofollow">gh</a></li>
      <li><a href="https://twitter.com/rrrrrrod" rel="nofollow">db</a></li>
    </ul>
  </header>
</template>

<script>
import awful from 'awful'
export default {
  data() {
    return {
      status: undefined,
    }
  },

  created() {
    this.status = awful.random()
  }
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
</style>

