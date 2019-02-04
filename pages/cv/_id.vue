<template>
  <div>
    <h1>
      {{ company.name }}
    </h1>

    <p>{{company.location}}</p>

    <ul>
      <li v-for="role in company.roles" :key="role.name">
        <h2>{{ role.title }}</h2>

        <time :datetime="role.start">
          {{ humanDate(role.start) }}
        </time>
        &mdash;
        <span v-if="!role.end">Now</span>
        <time v-else :datetime="role.end">
          {{ humanDate(role.end) }}
        </time>

        <p v-if="role.description">
          {{ role.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import companies from './positions'
export default {
  data() {
    return {
      company: undefined,
    }
  },

  created() {
    this.company = companies.find(c => (
      c.id === this.$route.params.id
    ))
  },

  methods: {
    humanDate(date) {
      return moment(date).format('MMM YYYY');
    }
  },
}
</script>
