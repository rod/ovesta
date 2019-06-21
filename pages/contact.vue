<template>
  <main>
    <div class="intro">
      Talk to me.
    </div>

    <!-- ActiveCampaign Tracking -->
    <script type="text/javascript">
      (function(e,t,o,n,p,r,i){e.prismGlobalObjectAlias=n;e.pgo=e.pgo||function(){(e.pgo.q=e.pgo.q||[]).push(arguments)};e.pgo.l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://prism.app-us1.com/prism.js","pgo");

      pgo('setAccount', '89472534');
      pgo('setTrackByDefault', true);

      pgo('process');
    </script>
  </main>
</template>

<script>
export default {
  layout: 'default'
}
</script>


<style scoped>
.intro {
  font-size: var(--font-size-6);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}
</style>
