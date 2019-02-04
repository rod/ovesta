<template>
  <div class="site-container serif">
    <Header />
    <main class="site-content">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@font-face{
  font-family: 'ArgentCF';
  font-weight: normal;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Regular.woff2'),
       url('~assets/fonts/ArgentCF-Regular.woff')
}

:root {
  --font-size-11: 6.706rem;
  --font-size-10: 5.364rem;
  --font-size-9: 4.292rem;
  --font-size-8: 3.433rem;
  --font-size-7: 2.747rem;
  --font-size-6: 2.197rem;
  --font-size-5: 1.758rem;
  --font-size-4: 1.406rem;
  --font-size-3: 1.125rem;
  --font-size-2: 0.9rem;
  --font-size-1: 0.72rem;
}

.serif { font-family: 'ArgentCF', serif; }
.monospace { font-family: 'Space Mono', monospace; }

html {
  font-size: 1rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffe7c7;
  color: #000813;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-content {
  flex: auto;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
