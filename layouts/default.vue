<template>
  <div class="site-container">
    <Header/>
    <main class="site-content">
      <nuxt />
    </main>
    <Footer/>
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

