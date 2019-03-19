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

  created() {
    (function(e,t,o,n,p,r,i){e.prismGlobalObjectAlias=n;e.pgo=e.pgo||function(){(e.pgo.q=e.pgo.q||[]).push(arguments)};e.pgo.l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://prism.app-us1.com/prism.js","pgo");

    pgo('setAccount', '89472534');
    pgo('setTrackByDefault', true);

    pgo('process');
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

.copy {
  flex: 1;
  margin-right: 1.125rem;
  order: 1;
}
</style>

