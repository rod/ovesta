<template>
  <footer>
    <div class="logo">
      <Logo />
    </div>

    <div class="copyright">
      <p>Good artists copy; Great artists steal.</p>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo'
export default {
  components:{
    Logo,
  },

  data() {
    return{
      year: new Date().getFullYear(),
    }
  }
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
  width: 100%;
}

.copyright {
  flex: 1;
  margin-right: 1.125rem;
}

.logo {
  order: 2;
  text-align: right;
}

.logo > svg {
  display: inline-block;
  opacity: 0.66;
  transition: .33s ease-out;
}

.logo > svg:hover {
  opacity: 1;
}

.copyright {
  order: 1;
  text-transform: lowercase;
}
</style>

