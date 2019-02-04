<template>
  <div class="intro">
    Hey, I'm Rod. I'm a frontend developer currently leading a team at
    <a href="https://www.activecampaign.com/">ActiveCampaign</a>.
    In the past I've worked at
    <a href="https://www.hatchloyalty.com/">Hatch Loyalty</a>,
    <a href="https://www.bellycard.com/">Belly</a>,
    <a href="https://carbonmade.com/">Carbonmade</a>,
    <a href="https://www.startupinstitute.com/">Startup Institute</a>
    and <a href="https://www.leapfrogonline.com/">Leapfrog Online</a>.
  </div>
</template>

<script>
import companies from './cv/positions'
export default {
  data() {
    return {
      companies,
    }
  }
}
</script>

<style scoped>
.intro {
  font-size: var(--font-size-6);
  font-weight: 700;
  padding: 1.125rem;
  text-transform: lowercase;
}

@media screen and (min-width: 500px) {
  .intro {
    font-size: var(--font-size-8);
  }
}

@media screen and (min-width: 750px) {
  .intro {
    font-size: var(--font-size-9);
  }
}

@media screen and (min-width: 1000px) {
  .intro {
    font-size: var(--font-size-11);
  }
}
</style>
