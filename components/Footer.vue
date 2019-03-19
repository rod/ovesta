<template>
  <footer>
    <div class="logo">
      <Logo />
    </div>

    <div class="copy">
      <p>Good artists copy;</p>
    </div>

    <div class="steal">
      <p>Great artists steal.</p>
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
  text-transform: lowercase;
  width: 100%;
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

.copy,
.steal {
  flex: 1;
}

.copy {
  order: 1;
  margin-right: 1.125rem;
}

.steal {
  order: 3;
  margin-left: 1.125rem;
  text-align: right
}
</style>

