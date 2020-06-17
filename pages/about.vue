<template>
  <div>
    <LeapfrogOnline />
    <Belly />
    <HatchLoyalty />
    <Carbonmade />
    <ActiveCampaign />
  </div>
</template>

<script>
import LeapfrogOnline from "~/components/leapfrogonline";
import Belly from "~/components/belly";
import HatchLoyalty from "~/components/hatchloyalty";
import Carbonmade from "~/components/carbonmade";
import ActiveCampaign from "~/components/activecampaign";

export default {
  components: {
    LeapfrogOnline,
    Belly,
    HatchLoyalty,
    Carbonmade,
    ActiveCampaign
  }
};
</script>
