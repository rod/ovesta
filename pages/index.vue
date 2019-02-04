<template>
  <div>
    <nuxt-link
      v-for="company in companies"
      :key="company.id"
      :to="`/cv/${company.id}`"
      :name="company.name"
    >
      {{ company.name }}
    </nuxt-link>
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
