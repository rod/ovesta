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
  font-weight: 200;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Thin.woff2'),
       url('~assets/fonts/ArgentCF-Thin.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 200;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-ThinItalic.woff2'),
       url('~assets/fonts/ArgentCF-ThinItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 300;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Light.woff2'),
       url('~assets/fonts/ArgentCF-Light.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 300;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-LightItalic.woff2'),
       url('~assets/fonts/ArgentCF-LightItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: normal;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Regular.woff2'),
       url('~assets/fonts/ArgentCF-Regular.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: normal;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-RegularItalic.woff2'),
       url('~assets/fonts/ArgentCF-RegularItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 600;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-DemiBold.woff2'),
       url('~assets/fonts/ArgentCF-DemiBold.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 600;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-DemiBoldItalic.woff2'),
       url('~assets/fonts/ArgentCF-DemiBoldItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 700;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Bold.woff2'),
       url('~assets/fonts/ArgentCF-Bold.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 700;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-BoldItalic.woff2'),
       url('~assets/fonts/ArgentCF-BoldItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 800;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-ExtraBold.woff2'),
       url('~assets/fonts/ArgentCF-ExtraBold.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 800;
  font-style: italic;
  src: url('~assets/fonts/ArgentCF-ExtraBoldItalic.woff2'),
       url('~assets/fonts/ArgentCF-ExtraBoldItalic.woff')
}
@font-face{
  font-family: 'ArgentCF';
  font-weight: 900;
  font-style: normal;
  src: url('~assets/fonts/ArgentCF-Super.woff2'),
       url('~assets/fonts/ArgentCF-Super.woff')
}

:root {
  /* colors */
  --yellow: hsl(50, 100%, 50%);
  --black: hsl(215, 100%, 4%);

  /* type */
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: var(--yellow);
  box-sizing: border-box;
  color: var(--black);
  font-size: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

.serif { font-family: 'ArgentCF', serif; }
.monospace { font-family: 'Space Mono', monospace; }

.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-content {
  align-items: center;
  display: flex;
  flex: auto;
  max-width: 40rem;
}

.site-content a {
  text-decoration: underline;
  text-decoration-color: hsla(215, 100%, 4%, .33);
}

</style>
